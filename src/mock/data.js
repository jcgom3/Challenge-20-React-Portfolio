import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Juan Carlos Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Juan Carlos Gomez',
  subtitle: 'I am a Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a Full Stack Web Developer With 6 months developer experience. Recently graduated from UCF Coding Boot Camp (02/21). I have a background in customer service and sales. Skilled in both front-end and back-end. I am open-minded, provide problem solving skills, communication and leadership when working in teams. Always looking for ways on improvement. I am looking forward to help and provide the best results when given a task without losing integrity.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1sxFM9Fuh3gXft1az_h-UKp1I0Ct369gL/view?usp=sharingp', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-3-sneakerz-seekerz.png',
    title: 'Sneakerz-Seekerz',
    info: 'A sleek site to make sneaker shopping easy. Users can download app for quicker access and continuing using if there is no online functionality. Once back online, user transaction will resume.',
    info2: ' ',
    url: 'https://sneakerz-seekerz.herokuapp.com/',
    repo: 'https://github.com/jcgom3/Project-3-sneakerz-seekerz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2-just-chatting.jpg',
    title: 'Just-Chattin',
    info: 'live chat using MVC essentials with Socket.IO, Javascript, Node.js, Express, MySQL2, Sequelize, handlebars & Heroku.',
    info2: 'This app allows users to log in, sign up, connect to 4 different chat rooms, & leave room.',
    url: 'https://just-chattin.herokuapp.com/login',
    repo: 'https://github.com/jcgom3/Just-Chattin', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-1-cocktail-u.jpg',
    title: 'Cocktail-u',
    info: 'An App for a bar that provides you a list of cocktails that can be made from a choice of alcoholic beverages.',
    info2: 'Used in bar only.',
    url: 'https://jcgom3.github.io/Cocktail-U/',
    repo: 'https://github.com/jcgom3/Cocktail-U', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Shop-React-Redux.jpg',
    title: 'Shop-Shop-Redux',
    info: 'A Full E-Commerce MERN Stack that includes Redux Library, GraphQL and PWA Functionality',
    info2: 'Users have to log in to be allowed to complete purchased with stripe api',
    url: 'https://reduxstore1.herokuapp.com/',
    repo: 'https://github.com/jcgom3/Challenge-22-Redux-Store', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Google-Book-Search-MERN.jpg',
    title: 'Google Engine Book Search',
    info: 'Full-MERN Stack app. This app allow us to create an user and search books. You can also add books to a list of viewed books.',
    info2: ' ',
    url: 'https://book-search-challenge-21-mern.herokuapp.com/',
    repo: 'https://github.com/jcgom3/Challenge-21-MERN-Book-Search-Engine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tech-Blog-MVC.jpg',
    title: 'Tech Blog',
    info: 'A blog app made for developer to gossip about all coding/programing related matters and more',
    info2: ' ',
    url: 'https://mvctechblogchallenge14.herokuapp.com/',
    repo: 'https://github.com/jcgom3/Challenge-14-Tech_blog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Note-Taker-NodeandExpressJS.jpg',
    title: 'Note Taker using Express',
    info: 'A Note Taking App using Node and Express JS. Keeps previous notes and you can edit and delete if you decide to.',
    info2: ' ',
    url: 'https://abcdefgnotetaker.herokuapp.com/',
    repo: 'https://github.com/jcgom3/Challenge-11-Note-Taker-Express.js', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MyTeamGenerator.jpg',
    title: 'My Team Generator',
    info: 'This project has to be seem locally. Check my repository for further instructions',
    info2: ' ',
    url: '',
    repo: 'https://github.com/jcgom3/Challenge-10-MyTeamGenerator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Code-quiz-Javascript.jpg',
    title: 'Code Quiz',
    info: '',
    info2: '',
    url: 'https://jcgom3.github.io/Challenge-4-Web-API-Code-Quiz/',
    repo: 'https://github.com/jcgom3/Challenge-4-Web-API-Code-Quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Password-generator-JavaScript.jpg',
    title: 'Password Generator',
    info: '',
    info2: '',
    url: 'https://jcgom3.github.io/Challenge-3-Password-Generator/',
    repo: 'https://github.com/jcgom3/Challenge-3-Password-Generator', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'Jcgom3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/juan-carlos-gomez-952256113/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jcgom3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
