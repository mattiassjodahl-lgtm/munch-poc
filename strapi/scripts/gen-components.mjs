// Genererar komponent-JSON och boilerplate (controller/route/service) för alla API:er.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const w = (p, c) => {
  fs.mkdirSync(path.dirname(path.join(root, p)), { recursive: true });
  fs.writeFileSync(path.join(root, p), typeof c === 'string' ? c : JSON.stringify(c, null, 2) + '\n');
};

const comp = (cat, name, displayName, attributes, icon = 'layer') =>
  w(`src/components/${cat}/${name}.json`, {
    collectionName: `components_${cat}_${name.replace(/-/g, '_')}`,
    info: { displayName, icon },
    options: {},
    attributes,
  });

const themeEnum = { type: 'enumeration', enum: ['pinkBlack', 'bluePink', 'goldBlack', 'blueRed', 'greenPink', 'blackOrange', 'white'], default: 'white' };

comp('shared', 'link', 'Länk', { label: { type: 'string', required: true }, url: { type: 'string', required: true } }, 'link');
comp('shared', 'link-group', 'Länkgrupp', { title: { type: 'string' }, links: { type: 'component', repeatable: true, component: 'shared.link' } }, 'bulletList');

comp('sections', 'hero', 'Hero', {
  title: { type: 'string' },
  subtitle: { type: 'string' },
  dateLabel: { type: 'string' },
  image: { type: 'media', multiple: false, allowedTypes: ['images', 'videos'] },
  imageUrl: { type: 'string' },
  exhibition: { type: 'relation', relation: 'oneToOne', target: 'api::exhibition.exhibition' },
  primaryCta: { type: 'component', repeatable: false, component: 'shared.link' },
}, 'picture');
comp('sections', 'exhibition-carousel', 'Utställningskarusell', {
  title: { type: 'string', default: 'EXHIBITIONS' },
  allLink: { type: 'component', repeatable: false, component: 'shared.link' },
}, 'apps');
comp('sections', 'text-banner', 'Textbanner', {
  title: { type: 'string' },
  text: { type: 'text' },
  link: { type: 'component', repeatable: false, component: 'shared.link' },
  theme: themeEnum,
}, 'quote');
comp('sections', 'link-list', 'Länklista med bild', {
  title: { type: 'string' },
  links: { type: 'component', repeatable: true, component: 'shared.link' },
  imageUrl: { type: 'string' },
  image: { type: 'media', multiple: false, allowedTypes: ['images'] },
}, 'bulletList');
comp('sections', 'events-list', 'Evenemangslista', {
  title: { type: 'string', default: 'UPCOMING EVENTS' },
  limit: { type: 'integer', default: 4 },
}, 'calendar');
comp('sections', 'cta', 'Call to action', {
  title: { type: 'string' },
  links: { type: 'component', repeatable: true, component: 'shared.link' },
  theme: themeEnum,
}, 'cursor');

comp('blocks', 'rich-text', 'Text', { body: { type: 'richtext' } }, 'feather');
comp('blocks', 'quote', 'Citat', { text: { type: 'text' }, author: { type: 'string' } }, 'quote');
comp('blocks', 'image', 'Bild', {
  image: { type: 'media', multiple: false, allowedTypes: ['images'] },
  imageUrl: { type: 'string' },
  caption: { type: 'string' },
}, 'picture');
comp('blocks', 'facts', 'Faktaruta', { items: { type: 'component', repeatable: true, component: 'shared.link' } }, 'information');

for (const [api, kind] of [['exhibition', 'c'], ['event', 'c'], ['homepage', 's'], ['global', 's']]) {
  const uid = `api::${api}.${api}`;
  w(`src/api/${api}/controllers/${api}.ts`, `import { factories } from '@strapi/strapi';\n\nexport default factories.createCoreController('${uid}');\n`);
  w(`src/api/${api}/routes/${api}.ts`, `import { factories } from '@strapi/strapi';\n\nexport default factories.createCoreRouter('${uid}');\n`);
  w(`src/api/${api}/services/${api}.ts`, `import { factories } from '@strapi/strapi';\n\nexport default factories.createCoreService('${uid}');\n`);
}
console.log('ok');
