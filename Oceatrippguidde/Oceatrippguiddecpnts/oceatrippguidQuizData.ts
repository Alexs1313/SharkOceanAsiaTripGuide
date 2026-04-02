import type {ImageSourcePropType} from 'react-native';

export type OceatrippguidQuizItem = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};

const placeholderImages = [
  require('../../assets/i/oceatrippgufacqz1.png'),
  require('../../assets/i/oceatrippgufacqz2.png'),
  require('../../assets/i/oceatrippgufacqz3.png'),
  require('../../assets/i/oceatrippgufacqz4.png'),
  require('../../assets/i/oceatrippgufacqz5.png'),
  require('../../assets/i/oceatrippgufacqz6.png'),
  require('../../assets/i/oceatrippgufacqz7.png'),
  require('../../assets/i/oceatrippgufacqz8.png'),
  require('../../assets/i/oceatrippgufacqz9.png'),
  require('../../assets/i/oceatrippgufacqz10.png'),
  require('../../assets/i/oceatrippgufacqz11.png'),
  require('../../assets/i/oceatrippgufacqz12.png'),
  require('../../assets/i/oceatrippgufacqz13.png'),
  require('../../assets/i/oceatrippgufacqz14.png'),
  require('../../assets/i/oceatrippgufacqz15.png'),
  require('../../assets/i/oceatrippgufacqz16.png'),
  require('../../assets/i/oceatrippgufacqz17.png'),
  require('../../assets/i/oceatrippgufacqz18.png'),
  require('../../assets/i/oceatrippgufacqz19.png'),
  require('../../assets/i/oceatrippgufacqz20.png'),
] as const;

const img = (i: number) => placeholderImages[i % placeholderImages.length];

export const oceatrippguidQuizPool: OceatrippguidQuizItem[] = [
  {id: 'octopus', title: 'Octopus', image: img(0)},
  {id: 'shark', title: 'Shark', image: img(1)},
  {id: 'dolphin', title: 'Dolphin', image: img(2)},
  {id: 'whale', title: 'Whale', image: img(3)},
  {id: 'jellyfish', title: 'Jellyfish', image: img(4)},
  {id: 'seaturtle', title: 'Sea Turtle', image: img(5)},
  {id: 'clownfish', title: 'Clownfish', image: img(6)},
  {id: 'seahorse', title: 'Seahorse', image: img(7)},
  {id: 'stingray', title: 'Stingray', image: img(8)},
  {id: 'lobster', title: 'Lobster', image: img(9)},
  {id: 'crab', title: 'Crab', image: img(10)},
  {id: 'starfish', title: 'Starfish', image: img(11)},
  {id: 'squid', title: 'Squid', image: img(12)},
  {id: 'moray', title: 'Moray Eel', image: img(13)},
  {id: 'pufferfish', title: 'Pufferfish', image: img(14)},
  {id: 'anglerfish', title: 'Anglerfish', image: img(15)},
  {id: 'barracuda', title: 'Barracuda', image: img(16)},
  {id: 'mantaray', title: 'Manta Ray', image: img(17)},
  {id: 'coral', title: 'Coral', image: img(18)},
  {id: 'bluetang', title: 'Blue Tang', image: img(19)},
];
