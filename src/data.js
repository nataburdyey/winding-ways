import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    title: 'endless hiking',
  },
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    title: 'saving money',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
    title: 'amazing comfort',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2023',
    title: 'tibet adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2023',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    cost: 'from $3000',
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2023',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '8 days',
    cost: 'from $4000',
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2023',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '5 days',
    cost: 'from $1500',
  },
];
