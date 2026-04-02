export type OceatrippguidFactsCategory = 'Marine Life' | 'Ocean Nature' | 'Ocean Secrets';

export const oceatrippguidFactsCategories = [
  {key: 'marine', title: 'Marine Life' as const, about: 'About: fish, sharks, turtles, corals, underwater creatures'},
  {key: 'nature', title: 'Ocean Nature' as const, about: 'About: currents, depths, waves, temperatures, natural phenomena'},
  {key: 'secrets', title: 'Ocean Secrets' as const, about: 'About: unusual facts, records, strange creatures, little-known phenomena'},
] as const;

export const oceatrippguidFactsByCategory: Record<OceatrippguidFactsCategory, string[]> = {
  'Marine Life': [
    'Sharks existed before dinosaurs and have changed very little over millions of years.',
    'Clownfish can change their gender depending on the group structure.',
    'Octopuses have three hearts and blue blood.',
    'Some fish can glow in the dark using bioluminescence.',
    'Sea turtles can travel thousands of kilometers and return to the same beach to lay eggs.',
    'A group of jellyfish is called a “smack.”',
    'Whale sharks are the largest fish in the ocean, yet they eat plankton.',
    'Seahorses are the only animals where males give birth.',
    'Some reef fish can sleep while hiding in coral crevices.',
    'Moray eels have a second set of jaws hidden inside their throat.',
  ],
  'Ocean Nature': [
    'The ocean covers more than 70% of Earth’s surface.',
    'The deepest point in the ocean is the Mariana Trench, over 10,000 meters deep.',
    'Ocean currents act like a global conveyor belt, moving heat around the planet.',
    'Waves are mostly caused by wind, not by the water itself moving forward.',
    'The ocean absorbs about 30% of carbon dioxide from the atmosphere.',
    'Some underwater volcanoes are still active and shape ocean floors.',
    'Tides are influenced by the gravitational pull of the Moon.',
    'Water temperature can change drastically with depth.',
    'Coral reefs grow very slowly, sometimes only a few centimeters per year.',
    'The ocean produces over half of the world’s oxygen.',
  ],
  'Ocean Secrets': [
    'More than 80% of the ocean remains unexplored.',
    'There are underwater rivers and lakes with different salinity levels.',
    'Some deep-sea creatures have transparent bodies.',
    'The ocean can create “brine pools” that are deadly to most marine life.',
    'Giant squids were once considered mythical creatures.',
    'There are fish that can walk on the ocean floor using fins.',
    'The loudest natural sound in the ocean comes from snapping shrimp.',
    'Some species can survive extreme pressure in deep ocean zones.',
    'There are underwater caves longer than any caves on land.',
    'Certain fish can generate electricity to defend themselves or hunt.',
  ],
};

