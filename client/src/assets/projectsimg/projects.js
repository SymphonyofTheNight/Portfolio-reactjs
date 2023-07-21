import animefreak from '../projectsimg/animefreak.jpg';

import nft from '../projectsimg/nft.jpg';

import portfolio from '../projectsimg/portfolio.jpg';
import portfolio2 from '../projectsimg/portfolio2.jpg'

const projects = [
    {
        id: 1,
        name: 'bg-portfolio',
        project: 'My Portfolio',
        titlepage: 'MY PORTFOLIO',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Tailwindcss #Sass',
        description: 'A minimalist website portfolio for software engineers that is very fast and has a responsive design to showcase my projects in effective way.',
        endpoint: 'myportfolio',
        link: 'https://ginodelavega.netlify.app/',
        img: portfolio,
        img2: portfolio2,
        location: "Philippines",
        date: "April 2023",
        technologies: "React, TailwindCSS, SCSS",
        product: "Personal Portfolio",
        context: "To showcase my skills and to present myself I needed to create personal portfolio which includes each projects I have created while I'm self studying web development."
    },
    {
        id: 2,
        name: 'bg-animefreak',
        project: 'Animefreak',
        titlepage: 'ANIME FREAK',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Sass',
        description: 'Fully functioning website for anime with responsive design and using JIKAN Api',
        endpoint: 'animefreak',
        link: '',
        img: animefreak,
        img2: "",
        location: "Philippines",
        date: "November 2022",
        technologies: "React, SCSS",
        product: "Anime Website",
        context: "Since exploring react was my goal, I started to learn about API's so I tried to create a anime website using JIKAN API where you can find thousands of popular anime content."
    },
    {
        id: 3,
        name: 'bg-nft',
        project: 'NFT',
        titlepage: 'NFT CARD',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Sass',
        description: 'Created an NFT Trading Card with responsive design as a demonstration for skills while learning.',
        endpoint: 'nftcard',
        link: 'https://gamexgaming1997.github.io/nft-preview-card/',
        img: nft,
        img2: "",
        location: "Philippines",
        date: "February 2023",
        technologies: "React, SCSS",
        product: "NFT card",
        context: "Web 3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics so I decided to create a sample of NFT card."
    }
]

export default projects;