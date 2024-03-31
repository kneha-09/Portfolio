import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/playstation.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
    {
    id: 1,
    title: 'Github : ',
    description: '<i><u>Check out </u></i>',
  },

  {
    id:2,
    title: 'LinkedIn : ',
    description: '<i><u>View Profile Here</u></i>',
  },

  {
    id:3,
    title: 'Langages : ',
    description: 'Marathi, Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of Experience <br /> of working as a Core Team mamber of Google Developer Student Club.',
  },

  {
    id: 2,
    no: '3+',
    title: 'Completed <br />Projects ',
  },

  {
    id: 3,
    no: '1+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '2+',
    title: 'Ranked in top 5 positions in Web devloper competetion',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Feb - Jully 2023',
    title: 'FSD Internship Program <span> Edureka </span>',
    desc: 'Completed a transformative FSD Internship Program by Edureka, gaining hands-on experience and in-depth knowledge in Full Stack Development, including front-end technologies, back-end technologies, databases, version control, and more.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'Core Team Member <span> Google Developer Student Club </span>',
    desc: 'Actively contributed as a Core Team Member of the GDSC, organizing workshops, hackathons, and tech talks to empower students with the latest technology skills, foster a vibrant tech community, and promote innovation and collaboration.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March - May 2022',
    title: 'Web Developer <span> Infobyte </span>',
    desc: 'Served as a Web Developer at Infobyte, leveraging technical expertise in web development to design and develop high-quality, user-friendly websites, applications, and solutions, contributing to the success and growth of the organization.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelor Degree <span> DIETMS </span>',
    desc: 'Graduated from DIETMS with a Bachelors Degree, equipped with a solid academic background and a passion for FSD',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'HSC <span> Deogiri Science College </span>',
    desc: 'Pursued Science stream at Deogiri Science College for Higher Secondary Education, gaining knowledge and skills in subjects such as Physics, Chemistry, Biology, and Mathematics.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'SSC <span> Jagruti High School </span>',
    desc: 'Completed Secondary School Certificate (SSC) at Jagruti High School, laying the groundwork for academic excellence and personal growth',
  },
];

export const skills = [
  
  {
    id: 1,
    category:'frontend',
    title: 'Html',
    level:'Intermediate',
    img:'https://i.ibb.co/T2kPy6h/html.png'
  },

  {
    id: 2,
    category:'backend',
    title: 'Javascript',
    level:'Intermediate',
    img:'https://i.ibb.co/ydQHfnT/js.png'
  },

  {
    id: 3,
    title: 'Css',
    category:'frontend',
    level:'Intermediate',
    img:'https://i.ibb.co/kyg7Wv3/css.png'
  },

  {
    id: 4,
    title: 'React',
    category:'frontend',
    level:'Intermediate',
    img:'https://i.ibb.co/cTV86Y4/react.jpg'
  },

  {
    id: 5,
    title: 'Express js',
    category:'backend',
    level:'Intermediate',
    img:'https://i.ibb.co/kxmwVyr/express.png    '
  },

  {
    id: 6,
    title: 'Node JS',
    category:'backend',
    level:'Intermediate',
    img:'https://i.ibb.co/QHBmSwb/nodejs.png'
  },


  {
    id: 7,
    title: 'MongoDB',
    category:'database',
    level:'Intermediate',
    img:'https://i.ibb.co/MB6bcB0/mongodb.png'
  },
  {
    id: 8,
    title: 'C++',
    category:'other',
    level:'Intermediate',
    img:'https://i.ibb.co/1bgxp4p/c.png'
  },
  {
    id: 9,
    title: 'Java',
    category:'other',
    level:'Entry level',
    img:'https://i.ibb.co/n6GvjBq/java.png'
  },
  {
    id: 10,
    title: 'Git',
    category:'database',
    level:'Entry level',
    img:'https://i.ibb.co/Smx2s9x/git.png'
  },
  {
    id: 11,
    title: 'Bootstrap',
    category:'frontend',
    level:'Intermediate',
    img:'https://i.ibb.co/VBHKhP6/bootstrap.png'
  },
  
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Playstation clone',
      },
      {
        icon: <FaCode />,
        title: ' Stack : ',
        desc: 'MERN ',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, BootStrap, React, JavaScript, NodeJS, ExpressJS, MongoDB ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://playstationwebsite.netlify.app/" target="_blank">https://playstationwebsite.netlify.app/</a>',
      },
    ],
  }
  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
