import animefreak from '../projectsimg/animefreak.jpg';
import nft from '../projectsimg/nft.jpg';
import portfolio from '../projectsimg/portfolio.jpg';

const projects = [
    {
        name: 'bg-portfolio',
        project: 'My Portfolio',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Tailwindcss #Sass',
        description: 'A minimalist website portfolio for software engineers that is very fast and has a responsive design to showcase my projects in effective way.',
        link: 'https://ginodelavega.netlify.app/',
        img: portfolio
    },
    {
        name: 'bg-animefreak',
        project: 'Animefreak',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Sass',
        description: 'Fully functioning website for anime with responsive design and using JIKAN Api',
        link: '',
        img: animefreak
    },
    {
        name: 'bg-nft',
        project: 'NFT',
        web: 'WEB 2.0',
        hashtag: '#ReactJS #Sass',
        description: 'Created an NFT Trading Card with responsive design as a demonstration for skills while learning.',
        link: 'https://gamexgaming1997.github.io/nft-preview-card/',
        img: nft
    }
]

export default projects;