import animefreak from '../projectsimg/animefreak.jpg';
import nft from '../projectsimg/nft.jpg';
import portfolio from '../projectsimg/portfolio.jpg';

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
        link: 'http://localhost:3000/myportfolio',
        img: portfolio
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
        img: animefreak
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
        img: nft
    }
]

export default projects;