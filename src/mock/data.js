import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Juan Carlos Portfolio", // e.g: 'Name | Developer'
  lang: "", // e.g: en, es, fr, jp
  description: "Welcome to my Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Juan Carlos Gomez",
  subtitle: "I am a Full Stack Software Engineer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "I am a Full Stack Software Engineer with 2 years of developing experience in building scalable and maintainable applications. I am proficient in JavaScript, TypeScript, React.JS, Django, Node.JS, and MERN Stack and have experience in the full software development life cycle.",
  paragraphTwo:
    "In my current role as a Software Engineer at JHT Incorporated, I collaborated with an agile development team to build front-end SPAs for multiple emulated desktop environments, utilizing the React.JS framework along with TypeScript and MobX for state management. I designed and implemented React components according to scope documentation and utilized standard React.JS design principles and tooling to ensure code quality and maintainability.",
  paragraphThree:
    "I have also completed several projects, including a web app using 3rd party API and hooks to retrieve a list of favorite movies, a web app utilizing Django to create todos to plan out your week, and an e-commerce web app using redux for global state control and adding stripe for payments.",
  paragraphFour:
    "I hold a Certificate in Full Stack Web Development from the University of Central Florida and currently pursuing a BS in Chemistry with a minor in Math and Physics.",
  paragraphFive:
    "I am a highly motivated individual with excellent organizational and communication skills, and I am fluent in Spanish. I am passionate about using my skills to build innovative solutions and make a positive impact in the world of technology",
  resume:
    "https://drive.google.com/file/d/1NcywYlwDVt7NKbM-o59Fe5TZiESM-N3s/view?usp=sharing", // if no resume, the button will not show up
  certificate:
    "https://drive.google.com/file/d/1a1VlqEcCzbVG4vfcq2DqTUYPyL8KWjED/view?usp=sharing",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "shopping-cart-ts.jpg",
    title: "Shopping Cart TS",
    info:
      "Shopping cart that allows users to add items to cart, update quantity & remove items while caching data using local storage",
    info2: " ",
    url: "https://extraordinary-cucurucho-f94ce5.netlify.app/store",
    repo: "https://github.com/jcgom3/ShoppingCartTS", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "MovieLand.jpg",
    title: "MovieLand",
    info: "A quick search of your favorite movie!",
    info2: " ",
    url: "https://quiet-biscuit-d10189.netlify.app/",
    repo: "https://github.com/jcgom3/ReactMovieLand", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "TodoListDjango.jpg",
    title: "TodoList Django",
    info: "Create multiple todos to to plan out your week",
    info2: " ",
    url: "https://todolist9993.herokuapp.com/",
    repo: "https://github.com/jcgom3/todolist9993", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project-3-sneakerz-seekerz.png",
    title: "Sneakerz-Seekerz",
    info:
      "A sleek site to make sneaker shopping easy. Users can download app for quicker access and continuing using if there is no online functionality. Once back online, user transaction will resume.",
    info2: " ",
    url: "https://sneakerz-seekerz.herokuapp.com/",
    repo: "https://github.com/jcgom3/Project-3-sneakerz-seekerz", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project-2-just-chatting.jpg",
    title: "Just-Chattin",
    info:
      "live chat using MVC essentials with Socket.IO, Javascript, Node.js, Express, MySQL2, Sequelize, handlebars & Heroku.",
    info2:
      "This app allows users to log in, sign up, connect to 4 different chat rooms, & leave room.",
    url: "https://just-chattin.herokuapp.com/login",
    repo: "https://github.com/jcgom3/Just-Chattin", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "project-1-cocktail-u.jpg",
    title: "Cocktail-u",
    info:
      "An App for a bar that provides you a list of cocktails that can be made from a choice of alcoholic beverages.",
    info2: "Used in bar only.",
    url: "https://jcgom3.github.io/Cocktail-U/",
    repo: "https://github.com/jcgom3/Cocktail-U", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Shop-React-Redux.jpg",
    title: "Shop-Shop-Redux",
    info:
      "A Full E-Commerce MERN Stack that includes Redux Library, GraphQL and PWA Functionality",
    info2:
      "Users have to log in to be allowed to complete purchased with stripe api",
    url: "https://reduxstore1.herokuapp.com/",
    repo: "https://github.com/jcgom3/Challenge-22-Redux-Store", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Google-Book-Search-MERN.jpg",
    title: "Google Engine Book Search",
    info:
      "Full-MERN Stack app. This app allow us to create an user and search books. You can also add books to a list of viewed books.",
    info2: " ",
    url: "https://book-search-challenge-21-mern.herokuapp.com/",
    repo: "https://github.com/jcgom3/Challenge-21-MERN-Book-Search-Engine", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Tech-Blog-MVC.jpg",
    title: "Tech Blog",
    info:
      "A blog app made for developer to gossip about all coding/programing related matters and more",
    info2: " ",
    url: "https://mvctechblogchallenge14.herokuapp.com/",
    repo: "https://github.com/jcgom3/Challenge-14-Tech_blog", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Note-Taker-NodeandExpressJS.jpg",
    title: "Note Taker using Express",
    info:
      "A Note Taking App using Node and Express JS. Keeps previous notes and you can edit and delete if you decide to.",
    info2: " ",
    url: "https://abcdefgnotetaker.herokuapp.com/",
    repo: "https://github.com/jcgom3/Challenge-11-Note-Taker-Express.js", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "MyTeamGenerator.jpg",
    title: "My Team Generator",
    info:
      "This project has to be seem locally. Check my repository for further instructions",
    info2: " ",
    url: "",
    repo: "https://github.com/jcgom3/Challenge-10-MyTeamGenerator", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Code-quiz-Javascript.jpg",
    title: "Code Quiz",
    info: "",
    info2: "",
    url: "https://jcgom3.github.io/Challenge-4-Web-API-Code-Quiz/",
    repo: "https://github.com/jcgom3/Challenge-4-Web-API-Code-Quiz", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Password-generator-JavaScript.jpg",
    title: "Password Generator",
    info: "",
    info2: "",
    url: "https://jcgom3.github.io/Challenge-3-Password-Generator/",
    repo: "https://github.com/jcgom3/Challenge-3-Password-Generator", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "Email Me",
  email: "Jcgom3@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/juan-carlos-gomez3",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/jcgom3",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
