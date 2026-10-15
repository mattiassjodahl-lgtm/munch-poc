import type { Core } from '@strapi/strapi';
import { exhibitions, events, global, homepage } from './seed/data';

const PUBLIC_READ = [
  'api::exhibition.exhibition.find',
  'api::exhibition.exhibition.findOne',
  'api::event.event.find',
  'api::event.event.findOne',
  'api::homepage.homepage.find',
  'api::global.global.find',
];

async function grantPublicRead(strapi: Core.Strapi) {
  const role = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
  if (!role) return;
  for (const action of PUBLIC_READ) {
    const exists = await strapi.db.query('plugin::users-permissions.permission').findOne({ where: { action, role: role.id } });
    if (!exists) await strapi.db.query('plugin::users-permissions.permission').create({ data: { action, role: role.id } });
  }
}

async function seed(strapi: Core.Strapi) {
  const docs = strapi.documents;
  const count = await docs('api::exhibition.exhibition').count({});
  if (count > 0) return;
  strapi.log.info('[seed] Seedar prototypdata…');

  let heroId = '';
  for (const e of exhibitions) {
    const d = await docs('api::exhibition.exhibition').create({ data: e as any, status: 'published' });
    if (e.slug === 'katharina-grosse') heroId = d.documentId;
  }
  for (const e of events) await docs('api::event.event').create({ data: e as any, status: 'published' });
  await docs('api::global.global').create({ data: global as any });
  await docs('api::homepage.homepage').create({ data: homepage(heroId) as any, status: 'published' });
  strapi.log.info('[seed] Klart.');
}

export default {
  register() {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await grantPublicRead(strapi);
    if (process.env.SEED_DISABLED !== 'true') await seed(strapi);
  },
};
