import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFacts extends Struct.ComponentSchema {
  collectionName: 'components_blocks_facts';
  info: {
    displayName: 'Faktaruta';
    icon: 'information';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface BlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image';
  info: {
    displayName: 'Bild';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quote';
  info: {
    displayName: 'Citat';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text';
  info: {
    displayName: 'Text';
    icon: 'feather';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta';
  info: {
    displayName: 'Call to action';
    icon: 'cursor';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    theme: Schema.Attribute.Enumeration<
      [
        'pinkBlack',
        'bluePink',
        'goldBlack',
        'blueRed',
        'greenPink',
        'blackOrange',
        'white',
      ]
    > &
      Schema.Attribute.DefaultTo<'white'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEventsList extends Struct.ComponentSchema {
  collectionName: 'components_sections_events_list';
  info: {
    displayName: 'Evenemangslista';
    icon: 'calendar';
  };
  attributes: {
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<4>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'UPCOMING EVENTS'>;
  };
}

export interface SectionsExhibitionCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_exhibition_carousel';
  info: {
    displayName: 'Utst\u00E4llningskarusell';
    icon: 'apps';
  };
  attributes: {
    allLink: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'EXHIBITIONS'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    dateLabel: Schema.Attribute.String;
    exhibition: Schema.Attribute.Relation<
      'oneToOne',
      'api::exhibition.exhibition'
    >;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    imageUrl: Schema.Attribute.String;
    primaryCta: Schema.Attribute.Component<'shared.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLinkList extends Struct.ComponentSchema {
  collectionName: 'components_sections_link_list';
  info: {
    displayName: 'L\u00E4nklista med bild';
    icon: 'bulletList';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    imageUrl: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_banner';
  info: {
    displayName: 'Textbanner';
    icon: 'quote';
  };
  attributes: {
    link: Schema.Attribute.Component<'shared.link', false>;
    text: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<
      [
        'pinkBlack',
        'bluePink',
        'goldBlack',
        'blueRed',
        'greenPink',
        'blackOrange',
        'white',
      ]
    > &
      Schema.Attribute.DefaultTo<'white'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_link';
  info: {
    displayName: 'L\u00E4nk';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLinkGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_group';
  info: {
    displayName: 'L\u00E4nkgrupp';
    icon: 'bulletList';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blocks.facts': BlocksFacts;
      'blocks.image': BlocksImage;
      'blocks.quote': BlocksQuote;
      'blocks.rich-text': BlocksRichText;
      'sections.cta': SectionsCta;
      'sections.events-list': SectionsEventsList;
      'sections.exhibition-carousel': SectionsExhibitionCarousel;
      'sections.hero': SectionsHero;
      'sections.link-list': SectionsLinkList;
      'sections.text-banner': SectionsTextBanner;
      'shared.link': SharedLink;
      'shared.link-group': SharedLinkGroup;
    }
  }
}
