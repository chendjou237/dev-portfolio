import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 7,
        name: 'Honor Bilingual Complex Website',
        description: 'A comprehensive website developed for Honor Bilingual Complex, showcasing their educational offerings and institutional information.',
        tools: ['NextJS', 'Tailwind CSS', 'Vercel'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'honorbilingualcomplex.vercel.app',
        image: travel,
    },
    {
        id: 8,
        name: 'InnovBusiness - Offline-Capable POS System',
        description: 'A Point of Sale (POS) and inventory management system designed for local stores in Cameroon, featuring offline functionality to ensure business continuity during internet outages.',
        tools: ['Laravel','Hostinger', 'vuejs',   'Offline Storage', 'POS Integration', 'Inventory Management',],
        role: 'Full Stack Developer',
        code: '',
        demo: 'innovbusiness.vercel.app',
        image: crefin,
    },
    {
        id: 5,
        name: 'EJ ejvent (Decoration Reservation Web app) and admin dashboard for owner',
        description: "EJ Event is a premier decoration reservation platform designed to streamline the booking process for a wide range of decoration items and services tailored to your events. Our intuitive site ensures a hassle-free experience, making it easier than ever to bring your event's vision to life",
        tools: ['Next js', 'sentry', 'clerk Auth', 'vercel', 'github actions', 'resend', 'postgresql', 'firebase storage', 'stripe'],
        role: 'Full stack Developer',
        code: '',
        demo: 'ejevent.co',
        image: crefin,
    },
    {
        id: 2,
        name: 'Intellibra (Breast Cancer awareness and Detection)',
        description: "IntelliBra is a smart breastwear utilizing ultrasound technology for breast cancer detection. This device is complemented by a smartphone application that interprets the results obtained after IntelliBra completes its scanning. Patients can choose to print their results or share them with their physician or one of our associated healthcare providers",
        tools: ['Flutter', 'Firebase authentication', 'OpenAI API', 'getStream Chat', 'Cloud function','cloud storage', 'Joi', 'Firebase analytic', 'Rowy', 'Github action'],
        role: 'Full stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Impact Festival website',
        description: 'I have designed and developed the annual event (impact festival)',
        tools: ['NextJS', 'Tailwind CSS', "whatsapp api", "figma", "TypeScript", "mailgun"],
        role: 'Front Developer',
        code: 'www.github.com/chendjou237/impact-festival',
        demo: 'impact-festival.vercel.app',
        image: travel,
    },
    {
        id: 4,
        name: 'Pizza Light',
        description: 'Pizza Light is a comprehensive pizza ordering mobile and web app, designed to let you order the pizza of your choice with your preferred seasonings and toppings. Enjoy the convenience of having your custom pizza delivered in less than 30 minutes, right to your doorstep in your neighborhood.',
        tools: ['Flutter', 'Bloc', 'Laravel', 'TypeScript', 'Azure Blob', 'Laravel', 'AWS S3', 'Postgresql', 'payunit'],
        code: '',
        role: 'Mobile Developer',
        demo: 'pizza-light.com',
        image: realEstate,
    },
    {
        id: 1,
        name: 'Innovschool',
        description: 'My team built an school management app using React as Front and Express springsboot for backend, with a Mongodb database. We used Express, Typescript, OpenAI, Replicate, Stripe, and pr to develop . We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: 'cmkdigitalinnovation.com',
        image: realEstate,
    },
    {
        id: 6,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
