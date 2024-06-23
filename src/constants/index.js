import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        id:0,
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        id:1,
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        id:2,
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        id:3,
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        id:4,
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        id:5,
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        id:6,
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        id:7,
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        id:8,
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        id:9,
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "React.js Developer",
        // company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Oct 2023 - Dec 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        // company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Dec 2023 - Feb 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        // company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2024 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        // company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "June 2024 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Yash-Paliwal-0210',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce Website',
        description: 'Developed a web application where you can go-to online destination for a diverse range of products including fashion, electronics, home essentials, beauty products, and more.',
        link: 'https://github.com/Yash-Paliwal-0210/E-Commerce',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Career-Connect',
        description: 'Created a Job platform where one can apply for job filter it in different manners , gets suggestion in things you lack',
        link: 'https://github.com/Yash-Paliwal-0210/Career_Connect-main',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Text-Util',
        description: 'Designed and built a mobile app to perform operations on a text according to you.',
        link: 'https://github.com/Yash-Paliwal-0210/text-utils',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'PortFolio',
        description: 'A portfolio by me at the very starting of my learning using html and css only.',
        link: 'https://github.com/Yash-Paliwal-0210/responsive_portfolio1',
    },
    
];