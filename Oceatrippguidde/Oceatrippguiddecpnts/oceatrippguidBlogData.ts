export type OceatrippguidBlogPost = {
  id: string;
  title: string;
  text: string;
};

export const oceatrippguidBlogPosts: OceatrippguidBlogPost[] = [
  {
    id: 'blog-1',
    title: 'Best Season',
    text: 'Choosing the right season is the key to a perfect ocean trip. In most Asian countries, the dry season offers calm seas, clear water, and better visibility for snorkeling and diving. For Thailand and Bali, the ideal time is from November to April, when waves are gentle and the weather is stable. In contrast, Vietnam’s central coast is best between spring and summer. Monsoon seasons bring strong winds, heavy rain, and rough waves, which can limit beach time and water activities. Always check regional weather patterns before planning your trip.',
  },
  {
    id: 'blog-2',
    title: 'Coral Life',
    text: 'Coral reefs are living ecosystems full of color and movement. They support thousands of marine species, including fish, turtles, and reef sharks. Southeast Asia is home to some of the richest reefs in the world, especially in Indonesia and the Philippines. When exploring reefs, it’s important to maintain distance and avoid touching them, as corals are very fragile. Even small damage can take years to recover. Using reef-safe sunscreen and controlled movement in the water helps protect this underwater world.',
  },
  {
    id: 'blog-3',
    title: 'Snorkel or Dive',
    text: 'Both snorkeling and diving offer unique ways to explore the ocean. Snorkeling is simple and requires minimal equipment, making it ideal for beginners and shallow waters. You can see colorful fish and coral reefs just below the surface. Diving allows you to go deeper and experience more complex marine environments, including caves, wrecks, and larger sea creatures. However, it requires training and proper equipment. Choosing between them depends on your comfort level and how deep you want to explore.',
  },
  {
    id: 'blog-4',
    title: 'Ocean Safety',
    text: 'Safety in the ocean should always come first. Even calm-looking water can hide strong currents or sudden depth changes. Always swim in marked areas and pay attention to local warnings. If you are snorkeling or diving, never go alone and always check your equipment. Marine life is generally not dangerous if respected, so avoid provoking animals or getting too close. Staying aware of your surroundings ensures a safe and enjoyable experience.',
  },
  {
    id: 'blog-5',
    title: 'Hidden Spots',
    text: 'Some of the best ocean locations are not the most popular ones. Hidden beaches and remote islands often offer clearer water, fewer people, and a more natural atmosphere. In Asia, many of these spots can be found away from major tourist centers, such as smaller islands in Indonesia or quiet bays in Thailand. Exploring these places may require extra effort, but the reward is a unique and peaceful experience.',
  },
  {
    id: 'blog-6',
    title: 'Beach Routine',
    text: 'A good beach day is more than just lying in the sun. Start early to enjoy calm waters and softer light. Midday is best for swimming and underwater activities when visibility is highest. In the evening, beaches transform with warm colors and cooler temperatures, perfect for relaxing walks. Staying hydrated and protecting your skin from the sun are essential for comfort throughout the day.',
  },
  {
    id: 'blog-7',
    title: 'Ocean Facts',
    text: 'The ocean covers more than 70% of the Earth’s surface and remains largely unexplored. Coral reefs, although covering a small area, support a huge portion of marine biodiversity. Many sea creatures use camouflage to survive, blending perfectly into their surroundings. Ocean currents regulate the planet’s climate and influence weather patterns. Learning these facts helps you better understand and appreciate the environment you are exploring.',
  },
];

export const oceatrippguidBlogById = new Map(
  oceatrippguidBlogPosts.map(p => [p.id, p]),
);

