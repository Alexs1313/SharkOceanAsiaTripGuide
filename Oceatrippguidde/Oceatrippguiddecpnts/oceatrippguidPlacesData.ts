import type {ImageSourcePropType} from 'react-native';

export type OceatrippguidPlaceCategory = 'Reefs' | 'Lagoons' | 'Depths';

export type OceatrippguidPlace = {
  id: string;
  category: OceatrippguidPlaceCategory;
  title: string;
  coords: string;
  description: string;
  image: ImageSourcePropType;
};

export const oceatrippguidCategoryTabs = [
  {key: 'All', label: 'All' as const},
  {key: 'Reefs', label: 'Reefs' as const},
  {key: 'Lagoons', label: 'Lagoons' as const},
  {key: 'Depths', label: 'Depths' as const},
] as const;

const oceatrippguidPlaceImages = [
  require('../../assets/i/oceatrippguoplac1.png'),
  require('../../assets/i/oceatrippguoplac2.png'),
  require('../../assets/i/oceatrippguoplac3.png'),
  require('../../assets/i/oceatrippguoplac4.png'),
  require('../../assets/i/oceatrippguoplac5.png'),
  require('../../assets/i/oceatrippguoplac6.png'),
  require('../../assets/i/oceatrippguoplac7.png'),
  require('../../assets/i/oceatrippguoplac8.png'),
  require('../../assets/i/oceatrippguoplac9.png'),
  require('../../assets/i/oceatrippguoplac10.png'),
  require('../../assets/i/oceatrippguoplac11.png'),
  require('../../assets/i/oceatrippguoplac12.png'),
  require('../../assets/i/oceatrippguoplac13.png'),
  require('../../assets/i/oceatrippguoplac14.png'),
  require('../../assets/i/oceatrippguoplac15.png'),
  require('../../assets/i/oceatrippguoplac16.png'),
  require('../../assets/i/oceatrippguoplac17.png'),
  require('../../assets/i/oceatrippguoplac18.png'),
  require('../../assets/i/oceatrippguoplac19.png'),
  require('../../assets/i/oceatrippguoplac20.png'),
  require('../../assets/i/oceatrippguoplac21.png'),
  require('../../assets/i/oceatrippguoplac22.png'),
  require('../../assets/i/oceatrippguoplac23.png'),
  require('../../assets/i/oceatrippguoplac24.png'),
  require('../../assets/i/oceatrippguoplac25.png'),
  require('../../assets/i/oceatrippguoplac26.png'),
  require('../../assets/i/oceatrippguoplac27.png'),
  require('../../assets/i/oceatrippguoplac28.png'),
  require('../../assets/i/oceatrippguoplac29.png'),
] as const;

const imgForIndex = (idx: number) =>
  oceatrippguidPlaceImages[idx % oceatrippguidPlaceImages.length];

export const oceatrippguidPlaces: OceatrippguidPlace[] = [
  {
    id: 'reefs-1',
    category: 'Reefs',
    title: 'Tubbataha Reefs',
    coords: '8.9500, 119.9000',
    description:
      'A remote marine reserve located in the open sea, known for its untouched coral ecosystems and exceptional water clarity. The reefs here are home to hundreds of species, including reef sharks, manta rays, and sea turtles. Due to its isolation, access is limited, which helps preserve its natural beauty. It is considered one of the best diving locations in Asia.',
    image: imgForIndex(0),
  },
  {
    id: 'reefs-2',
    category: 'Reefs',
    title: 'Raja Ampat',
    coords: '-0.2333, 130.5167',
    description:
      'A world-famous reef system with the highest marine biodiversity on the planet. The coral formations are incredibly vibrant, and the waters are filled with tropical fish, reef sharks, and unique species. Calm lagoons and shallow reefs make it suitable for both snorkeling and diving. The area feels wild and untouched, offering a true ocean exploration experience.',
    image: imgForIndex(1),
  },
  {
    id: 'reefs-3',
    category: 'Reefs',
    title: 'Apo Reef',
    coords: '12.6667, 120.4333',
    description:
      'One of the largest coral reef systems in the region, featuring wide reef flats and deep drop-offs. The visibility here is excellent, making it ideal for underwater photography. Marine life is abundant, including schools of fish, turtles, and occasional large predators. The reef structure creates a mix of calm and more dynamic zones.',
    image: imgForIndex(2),
  },
  {
    id: 'reefs-4',
    category: 'Reefs',
    title: 'Bunaken Marine Park',
    coords: '1.6200, 124.7600',
    description:
      'Known for its dramatic vertical coral walls that drop deep into the ocean. The reef is covered in soft corals and sponges, attracting a wide variety of marine species. The calm surface conditions make it accessible for beginners, while deeper sections offer more advanced diving opportunities.',
    image: imgForIndex(3),
  },
  {
    id: 'reefs-5',
    category: 'Reefs',
    title: 'Similan Islands Reefs',
    coords: '8.6500, 97.6333',
    description:
      'These reefs are famous for their clear blue water and large granite rock formations underwater. The marine life includes reef sharks, rays, and large schools of fish. The area is especially popular during the dry season when conditions are calm and visibility is at its best.',
    image: imgForIndex(4),
  },
  {
    id: 'reefs-6',
    category: 'Reefs',
    title: 'Sipadan Reef',
    coords: '4.1148, 118.6289',
    description:
      'A legendary dive location known for its steep drop-offs and rich marine life. Large schools of barracuda, turtles, and sharks are commonly seen here. The reef rises sharply from deep water, creating dramatic underwater landscapes.',
    image: imgForIndex(5),
  },
  {
    id: 'reefs-7',
    category: 'Reefs',
    title: 'Komodo Reefs',
    coords: '-8.5500, 119.4500',
    description:
      'Strong currents bring nutrient-rich water, making these reefs full of life. The corals are colorful and dense, and the area is known for manta rays and reef sharks. It’s a more dynamic environment, perfect for experienced divers.',
    image: imgForIndex(6),
  },
  {
    id: 'reefs-8',
    category: 'Reefs',
    title: 'Koh Tao Reefs',
    coords: '10.1000, 99.8333',
    description:
      'A beginner-friendly reef destination with calm waters and accessible dive sites. The reefs are smaller but still full of tropical fish and soft corals. It is a popular place for learning diving and exploring shallow reef systems.',
    image: imgForIndex(7),
  },
  {
    id: 'reefs-9',
    category: 'Reefs',
    title: 'Nha Trang Reefs',
    coords: '12.2388, 109.1967',
    description:
      'These reefs are located near the coast and offer easy access for snorkeling and diving. The marine life is diverse, and the coral formations are spread across multiple small islands. The area combines natural beauty with tourist-friendly infrastructure.',
    image: imgForIndex(8),
  },
  {
    id: 'reefs-10',
    category: 'Reefs',
    title: 'Andaman Coral Reefs',
    coords: '11.7401, 92.6586',
    description:
      'A remote and less crowded reef system with rich biodiversity and clear waters. The reefs are still relatively untouched and support a wide range of marine species. It is a great place for those looking for a quieter and more natural ocean experience.',
    image: imgForIndex(9),
  },

  {
    id: 'lagoons-1',
    category: 'Lagoons',
    title: 'El Nido Lagoons',
    coords: '11.2026, 119.4043',
    description:
      'A group of hidden lagoons surrounded by dramatic limestone cliffs. The water here is calm, shallow, and incredibly clear, making it perfect for kayaking and swimming. Many lagoons are accessible only through narrow openings, which adds a sense of exploration. The combination of cliffs, turquoise water, and silence creates a very peaceful atmosphere.',
    image: imgForIndex(10),
  },
  {
    id: 'lagoons-2',
    category: 'Lagoons',
    title: 'Coron Lagoons',
    coords: '11.9985, 120.2043',
    description:
      'Famous for its unique mix of saltwater and freshwater layers. The lagoons are surrounded by steep rock formations, and the water is often warm and very still. Visibility is high, and the area is ideal for both relaxing swims and light snorkeling. The landscape feels isolated and untouched.',
    image: imgForIndex(11),
  },
  {
    id: 'lagoons-3',
    category: 'Lagoons',
    title: 'Railay Lagoon',
    coords: '8.0117, 98.8380',
    description:
      'A hidden lagoon accessible by climbing or hiking through limestone cliffs. The water level changes depending on the tides, sometimes revealing more of the sandy bottom. The surrounding cliffs create a natural enclosure, making it feel like a secret place away from the main beaches.',
    image: imgForIndex(12),
  },
  {
    id: 'lagoons-4',
    category: 'Lagoons',
    title: 'Kayangan Lake Lagoon',
    coords: '11.9980, 120.1980',
    description:
      'Often considered one of the clearest bodies of water in the region. The lagoon is surrounded by sharp limestone formations, and the water has a deep blue color with incredible visibility. It is calm, quiet, and ideal for relaxing swims.',
    image: imgForIndex(13),
  },
  {
    id: 'lagoons-5',
    category: 'Lagoons',
    title: 'Blue Lagoon (Padang Bai)',
    coords: '-8.5333, 115.5167',
    description:
      'A small and peaceful lagoon with calm water and easy access. It is perfect for snorkeling, with colorful fish and coral close to the shore. The atmosphere here is quiet compared to larger tourist beaches.',
    image: imgForIndex(14),
  },
  {
    id: 'lagoons-6',
    category: 'Lagoons',
    title: 'Phi Phi Leh Lagoon',
    coords: '7.6780, 98.7660',
    description:
      'A stunning enclosed lagoon surrounded by high cliffs. The water is bright turquoise and very calm, especially in the early morning. Boats often stop here, but it still maintains a magical, almost unreal feeling.',
    image: imgForIndex(15),
  },
  {
    id: 'lagoons-7',
    category: 'Lagoons',
    title: 'Havelock Lagoon',
    coords: '11.9670, 92.9930',
    description:
      'A quiet lagoon area known for soft sandy bottoms and shallow, clear water. It is perfect for slow swimming and relaxing. The surrounding greenery adds to the natural and untouched atmosphere.',
    image: imgForIndex(16),
  },
  {
    id: 'lagoons-8',
    category: 'Lagoons',
    title: 'Koh Hong Lagoon',
    coords: '8.0667, 98.7833',
    description:
      'A circular lagoon hidden behind cliffs, accessible through a narrow entrance. Inside, the water is calm and protected from waves. It’s ideal for kayaking and peaceful exploration.',
    image: imgForIndex(17),
  },
  {
    id: 'lagoons-9',
    category: 'Lagoons',
    title: 'Maldives Atolls Lagoons',
    coords: '3.2028, 73.2207',
    description:
      'Large shallow lagoons with crystal-clear water and white sandy bottoms. The water here is extremely calm, almost like a mirror. Perfect for relaxing, swimming, and enjoying the tropical scenery.',
    image: imgForIndex(18),
  },
  {
    id: 'lagoons-10',
    category: 'Lagoons',
    title: 'Rawa Island Lagoon',
    coords: '2.5667, 103.9167',
    description:
      'A small tropical lagoon with bright blue water and soft sand. The waves are minimal, making it safe for swimming. The surrounding coral adds light snorkeling opportunities.',
    image: imgForIndex(19),
  },

  {
    id: 'depths-1',
    category: 'Depths',
    title: 'Mariana Trench Area',
    coords: '11.3500, 142.2000',
    description:
      'The deepest known part of the ocean, reaching extreme depths. While not a typical tourist dive spot, nearby areas offer deep-water exploration experiences. The environment is dark, high-pressure, and mostly unexplored.',
    image: imgForIndex(20),
  },
  {
    id: 'depths-2',
    category: 'Depths',
    title: 'Blue Hole (Dahab)',
    coords: '28.5729, 34.5369',
    description:
      'A famous underwater sinkhole with a deep vertical drop. It attracts advanced divers due to its depth and unique structure. The water here is deep blue and mysterious.',
    image: imgForIndex(21),
  },
  {
    id: 'depths-3',
    category: 'Depths',
    title: 'Yonaguni Monument',
    coords: '24.4440, 122.9330',
    description:
      'An underwater rock formation that looks like ancient ruins. Located at depth, it creates a mysterious and unique diving experience. Strong currents make it more suitable for experienced divers.',
    image: imgForIndex(22),
  },
  {
    id: 'depths-4',
    category: 'Depths',
    title: 'Oslob Deep Waters',
    coords: '9.5211, 123.4370',
    description:
      'Known for deep-water encounters with large marine life. The area drops quickly into deeper zones, attracting whale sharks and other species. The contrast between shallow and deep water is very noticeable.',
    image: imgForIndex(23),
  },
  {
    id: 'depths-5',
    category: 'Depths',
    title: 'Richelieu Rock',
    coords: '9.3622, 98.0215',
    description:
      'A submerged pinnacle rising from deep water. It is surrounded by open ocean, attracting large pelagic species. Visibility and depth make it a dynamic and exciting dive site.',
    image: imgForIndex(24),
  },
  {
    id: 'depths-6',
    category: 'Depths',
    title: 'Mabul Deep Sites',
    coords: '4.2467, 118.6280',
    description:
      'A combination of sandy bottoms and deeper reef edges. Known for macro life but also connected to deeper drop-offs. The environment changes quickly with depth.',
    image: imgForIndex(25),
  },
  {
    id: 'depths-7',
    category: 'Depths',
    title: 'Komodo Deep Channels',
    coords: '-8.5500, 119.4500',
    description:
      'Strong currents flow through deep underwater channels. These conditions attract large marine species like manta rays and sharks. It is a powerful and active underwater environment.',
    image: imgForIndex(26),
  },
  {
    id: 'depths-8',
    category: 'Depths',
    title: 'Tubbataha Drop-offs',
    coords: '8.9500, 119.9000',
    description:
      'Steep reef walls that drop directly into the deep ocean. The transition from shallow to deep happens very quickly, creating dramatic underwater views.',
    image: imgForIndex(27),
  },
  {
    id: 'depths-9',
    category: 'Depths',
    title: 'Andaman Deep Sites',
    coords: '11.7401, 92.6586',
    description:
      'Remote deep-water dive spots with strong currents and rich marine life. These areas are less explored and offer a more raw ocean experience.',
    image: imgForIndex(28),
  },
  {
    id: 'depths-10',
    category: 'Depths',
    title: 'Maldives Deep Channels',
    coords: '3.2028, 73.2207',
    description:
      'Deep channels between atolls where currents bring nutrients. These areas are known for large fish, sharks, and manta rays. The depth and movement make every dive different.',
    image: imgForIndex(29),
  },
];

export const oceatrippguidPlacesById = new Map(
  oceatrippguidPlaces.map(p => [p.id, p]),
);
