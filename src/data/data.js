import tour1 from '../images/cityscape-mountains-potala-palace-lhasa-tibet_980x650.jpg';
import tour2 from '../images/road-trip3.jpg';
import tour3 from '../images/friends-on-road-trip.jpg';
import tour4 from '../images/Kenya.jpg';
import tour5 from '../images/India.webp'
import tour6 from '../images/nepal.jpg'


export const pageLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' },
];


export const socialLinks = [
       
  { id: 1, href: 'https://www.facebook.com/BackroadsActiveTravel/', icon: 'AiFillFacebook'},
  { id: 2, href: 'https://twitter.com/backroadtouring?lang=en', icon: 'AiFillTwitterCircle'},
  { id: 3, href: 'https://www.twitter.com', icon: 'FaSquarespace'},
];

export const services = [
  {
    id: 1,
    icon: 'FaWallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'BsTreeFill',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'FaSocks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'Best of Java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'Explore Hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'Kenya Highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
  {
    id: 3,
    image: tour5,
    date: 'February 15th, 2020',
    title: 'Explore India',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'India',
    duration: 10,
    cost: 6000,
  },
  {
    id: 3,
    image: tour6,
    date: 'March 15th, 2020',
    title: 'Nepal',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Nepal',
    duration: 15,
    cost: 4500,
  },
];

 const People = [
  
    {id:1, name:'Naveen'},
    {id:2, name:'Mounish'},
    {id:3, name:'Nobi'},
    {id:4, name:'Nobita'},
];
export default People;