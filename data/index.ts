export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently deepening my Solidity & smart contract skills",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Brandkit Studio",
        des: "An AI-powered content generation studio for brands — static ads, carousels, reels, and two research agents, driven by a single swappable brand identity. Used in production for a real business.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/ts.svg", "/tail.svg"],
        link: "https://brand-kit-studio.vercel.app/",
    },
    {
        id: 2,
        title: "Noreste Arquitectura",
        des: "A production website for a real architecture studio client, built with Next.js and GSAP-driven animations.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/ts.svg", "/gsap.svg"],
        link: "https://www.norestearq.com/",
    },
    {
        id: 3,
        title: "DigiStore",
        des: "A full digital-products storefront with license management, Stripe payments, and secure content delivery, built on Next.js and Supabase.",
        img: "/p3.svg",
        iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
        link: "https://github.com/joacoesperon/DigiStore",
    },
    {
        id: 4,
        title: "MiniJava Compiler",
        des: "A complete compiler for a custom programming language — lexical analysis through to Motorola 68000 assembly code generation, built in Java with JFlex and CUP.",
        img: "/p4.svg",
        iconLists: [],
        link: "https://github.com/joacoesperon/minijava-compiler",
    },
];

export const testimonials = [
    {
        quote:
            "Joaquín built our studio's website and I couldn't be happier with how it turned out. He was easy to work with from start to finish and delivered exactly what we needed.",
        name: "Juan Esperón",
        title: "Noreste Arquitectura",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Control Engineering Technician — SAMPOL SA",
        desc: "Developing and maintaining SCADA systems for industrial control engineering projects. Feb 2026 – Present.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Sales Associate — Müller",
        desc: "Customer service, inventory management, and point-of-sale operations. Aug 2024 – Present.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Community Developer — SupTrading",
        desc: "Built and maintained an online education platform (suptrading.net) for blockchain and finance, and grew its community through social media and digital marketing. May 2022 – Aug 2024.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Café Manager — Kena Bowls",
        desc: "Oversaw stock control, customer service, and budgeting for a café. Jul 2022 – Oct 2023.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 5,
        title: "Administrative Employee — Abertech Ibérica S.L.",
        desc: "Built and maintained the company website and coordinated supplier relations and social media. Jul 2020 – May 2022.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/joacoesperon",
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/joaquinesperon/",
    },
];