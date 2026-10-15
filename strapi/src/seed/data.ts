// Seed-data för prototypen. Korttexter från munch.no; ingresser omskrivna. Bilder = platshållare.
const img = (seed: string) => `https://picsum.photos/seed/munch-${seed}/1600/1000`;

const para = (s: string) => ({ __component: 'blocks.rich-text', body: s });

export const exhibitions = [
  {
    kicker: 'KATHARINA GROSSE', title: 'BLACK BED', slug: 'katharina-grosse',
    teaser: 'Explore Grosse’s boundary-defying use of colour.',
    dateLabel: 'Until 03.01.2027', endDate: '2027-01-03', floor: 'Floor 3', theme: 'pinkBlack', order: 1,
    imageUrl: img('grosse'), imageCredit: 'Placeholder image',
    intro: 'A large-scale installation where colour spills off the canvas and over walls, floors and objects – painting as an event you walk straight into.',
    body: [
      para('Katharina Grosse has spent three decades testing where a painting begins and ends. In *Black Bed* the gallery itself becomes the surface.'),
      { __component: 'blocks.quote', text: 'Painting can happen anywhere.', author: 'Prototype quote' },
      para('The exhibition is produced for MUNCH and fills the full height of the gallery on floor 3.'),
    ],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'CONNECT THE LINES', slug: 'connect-the-lines',
    teaser: 'Create your own digital drawings and discover how AI finds similar works from the collection.',
    dateLabel: 'Until 29.11.2026', endDate: '2026-11-29', floor: 'Floor 10', theme: 'greenPink', order: 2,
    imageUrl: img('lines'),
    intro: 'An interactive room where your own sketch is matched against thousands of Munch drawings that are too fragile to show for long.',
    body: [para('Draw on a screen, and an image-matching model searches the archive for drawings with a similar line or motif.')],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'INFINITE', slug: 'edvard-munch-infinite',
    teaser: 'Explore Munch’s artistry and encounter his most famous works.',
    dateLabel: 'Collection exhibition', isCollection: true, floor: 'Floor 4', theme: 'bluePink', order: 3,
    imageUrl: img('infinite'),
    intro: 'A journey through Munch’s art – from the famous motifs to major works few people know – and the human themes that still speak to us.',
    body: [
      para('The exhibition draws on the museum’s collection to show how Munch returned to the same ideas again and again, in new techniques and new versions.'),
      { __component: 'blocks.facts', items: [{ label: 'Floor', url: '4' }, { label: 'Ticket', url: 'Included in entrance' }] },
    ],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'HORIZONS', slug: 'edvard-munch-horizons',
    teaser: 'Explore Edvard Munch’s art in dialogue with his contemporaries.',
    dateLabel: 'Collection exhibition', isCollection: true, floor: 'Floor 11', theme: 'goldBlack', order: 4,
    imageUrl: img('horizons'),
    intro: 'Munch shown alongside the artists around him – the colours, cities and inner lives that shaped a generation.',
    body: [para('Works by Munch’s contemporaries frame his development and the art scene he grew out of.')],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'MONUMENTAL', slug: 'edvard-munch-monumental',
    teaser: 'Discover large-scale works up to 50 square metres in a grand gallery space.',
    dateLabel: 'Collection exhibition', isCollection: true, floor: 'Floor 6', theme: 'bluePink', order: 5,
    imageUrl: img('monumental'),
    intro: 'Munch’s biggest paintings, shown in a gallery tall enough to hold them.',
    body: [para('Some of the works measure up to 50 square metres and were made for public spaces.')],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'SHADOWS', slug: 'edvard-munch-shadows',
    teaser: 'Get close to the man Edvard Munch and immerse yourself in his time at Ekely.',
    dateLabel: 'Collection exhibition', isCollection: true, floor: 'Floor 7', theme: 'pinkBlack', order: 6,
    imageUrl: img('shadows'),
    intro: 'A multimedia reconstruction of Ekely, the home where Munch spent his last three decades.',
    body: [para('Light, sound and moving images bring back a house that no longer exists.')],
  },
  {
    kicker: 'EDVARD MUNCH', title: 'UP CLOSE', slug: 'up-close',
    teaser: 'Experience Munch’s pioneering woodcuts firsthand.',
    dateLabel: 'Collection exhibition', isCollection: true, floor: 'Floor 7', theme: 'blueRed', order: 7,
    imageUrl: img('upclose'),
    intro: 'Munch’s printmaking, and especially his woodcuts, seen at close range.',
    body: [para('Munch took up printmaking in his thirties and kept experimenting with it for the rest of his life.')],
  },
];

export const events = [
  { title: 'WHY KAI', slug: 'why-kai', category: 'Jazz at MUNCH', startsAt: '2026-10-16T19:00:00.000Z', imageUrl: img('ev1') },
  { title: 'UNG SCENE: SUIEVERSE', slug: 'ung-scene', category: 'Ung scene', startsAt: '2026-10-17T16:00:00.000Z', imageUrl: img('ev2') },
  { title: 'CURATOR TALK: BLACK BED', slug: 'curator-talk', category: 'Talk', startsAt: '2026-10-22T15:00:00.000Z', imageUrl: img('ev3') },
  { title: 'FAMILY SUNDAY', slug: 'family-sunday', category: 'Family', startsAt: '2026-10-25T09:00:00.000Z', imageUrl: img('ev4') },
];

export const global = {
  siteName: 'MUNCH',
  openingStatus: 'Closing at 21:00',
  mainNav: [
    { label: 'TICKETS', url: '/en/tickets' },
    { label: 'VISIT US', url: '/en/visit-us' },
    { label: "WHAT'S ON", url: '/en/exhibitions' },
  ],
  footerColumns: [
    { title: 'MUNCH', links: [{ label: 'Opening hours', url: '#' }, { label: 'Find us', url: '#' }, { label: 'Accessibility', url: '#' }] },
    { title: 'Explore', links: [{ label: 'Exhibitions', url: '/en/exhibitions' }, { label: 'Events', url: '#' }, { label: 'Collection', url: '#' }] },
    { title: 'About', links: [{ label: 'Press', url: '#' }, { label: 'Jobs', url: '#' }, { label: 'Contact', url: '#' }] },
  ],
  footerAddress: 'Edvard Munchs plass 1\n0194 Oslo',
};

export const homepage = (heroExhibitionId: string) => ({
  hero: {
    title: 'KATHARINA GROSSE – BLACK BED',
    dateLabel: '26.09.26–03.01.27',
    imageUrl: img('hero'),
    exhibition: heroExhibitionId,
    primaryCta: { label: 'Buy tickets', url: '/en/tickets' },
  },
  sections: [
    { __component: 'sections.exhibition-carousel', title: 'EXHIBITIONS', allLink: { label: 'All exhibitions', url: '/en/exhibitions' } },
    {
      __component: 'sections.text-banner', theme: 'blackOrange',
      title: 'THE 2026 MUNCH AWARD RECIPIENT IS DÁIDDADÁLLU',
      text: 'The MUNCH Award honours the artist’s role as a critical voice in society.',
      link: { label: 'Read more', url: '#' },
    },
    {
      __component: 'sections.link-list', title: 'PLAN YOUR VISIT', imageUrl: img('visit'),
      links: [
        { label: 'What happens where?', url: '#' },
        { label: 'Where can I see The Scream?', url: '#' },
        { label: 'Opening hours and practical information', url: '#' },
        { label: 'Eat and drink in stunning views', url: '#' },
        { label: '5 tips for visiting with kids', url: '#' },
      ],
    },
    { __component: 'sections.events-list', title: 'UPCOMING EVENTS', limit: 4 },
    {
      __component: 'sections.cta', theme: 'pinkBlack',
      title: 'FOLLOW US ON SOCIAL MEDIA FOR STORIES ABOUT EDVARD MUNCH AND HIS ART',
      links: [{ label: 'Instagram', url: '#' }, { label: 'TikTok', url: '#' }, { label: 'Facebook', url: '#' }],
    },
  ],
});
