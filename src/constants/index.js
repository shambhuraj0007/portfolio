const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Systems", imgPath: "/images/concepts.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Major Projects Built" },
  { value: 250, suffix: "+", label: "DSA Problems Solved" },
  { value: 96, suffix: "%", label: "DL Model Accuracy" },
  { value: 9.78, suffix: " CGPA", label: "Top 15 Rank (First Year)" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "MERN Development",
    desc: "Built and deployed scalable full-stack applications with React, Node, MongoDB.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Problem Solving",
    desc: "Solved 250+ DSA problems across platforms like LeetCode and GFG.",
  },
  {
    imgPath: "/images/time.png",
    title: "Model Building",
    desc: "Developed deep learning models with 96%+ accuracy using TensorFlow & Keras.",
  },
];

const techStackImgs = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "MongoDB", imgPath: "/images/logos/mongodb.png" },
  { name: "TensorFlow", imgPath: "/images/logos/tensorflow.png" },
  { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png" },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript",
    imgPath: "/models/javascript.png",
    isImage: true,
  },
  {
    name: "Node.js",
    imgPath: "/models/nodejs-logo.png",
    isImage: true,
  },
  {
    name: "MongoDB",
    imgPath: "/models/mongodb_logo.png",
    isImage: true,
  },
  {
    name: "deep learning",
    imgPath: "/models/deep-learning.jpg",
    isImage: true,
  },
];



const expCards = [
  {
    review: "Shambhuraj delivered an impressive social platform with a seamless full-stack experience. His MERN skills are commendable.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    date: "2023 - Present",
    responsibilities: [
      "Built 'Vibly', a full-stack social media app with likes, comments, and profile features.",
      "Managed authentication with cookies and session tokens.",
      "Deployed full-stack apps using Vercel and Render.",
    ],
  },
  {
    review: "Shambhuraj’s work on the CNN-based plant disease detector was efficient and accurate. It’s a real-world solution with deep learning.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
   
    date: "2024",
    responsibilities: [
      "Built CNN model with 96% accuracy for leaf disease detection.",
      "Integrated model into a Streamlit app for real-time predictions.",
      "Used data augmentation and dropout to improve generalization.",
    ],
  },

];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
];




const certificateCards = [
  {
    title: "Full Stack Web Development",
    issuer: "College Wallah",
    date: "2023",
    imgPath: "/images/cert1.png",
    description: "Completed a comprehensive course covering MERN stack, REST APIs, and deployment strategies. Built multiple full-stack applications with modern web technologies.",
    link: "",
    verificationLink: "https://verify.collegewallah.com/abc123"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "NVIDIA Deep Learning Institute",
    date: "2024",
    imgPath: "/images/cert2.png",
    description: "Mastered neural networks, CNNs, and sequence models with TensorFlow. Developed AI models with 96%+ accuracy for real-world applications.",
    link: "https://courses.nvidia.com/certificate/def456",
    verificationLink: "https://verify.nvidia.com/def456"
  },
  {
    title: "JAVA with DSA",
    issuer: "PW Skills",
    date: "2025",
    imgPath: "/images/cert3.png",
    description: "Comprehensive course covering Java programming fundamentals and Data Structures & Algorithms. Solved 250+ DSA problems across multiple platforms.",
    link: "https://certificates.pwskills.com/certificate/ghi789",
    verificationLink: "https://verify.pwskills.com/ghi789"
  }
];

const internshipCards = [
  {
    company: "Eduskills Virtual Internship",
    role: "AWS Cloud Intern",
    date: "Jan – Feb 2025",
    imgPath: "/images/aws-cloud.png",
    logoPath: "/logos/aws.svg",
    responsibilities: [
      "Explored AWS services including EC2, S3, Lambda, and IAM.",
      "Completed hands-on labs and deployed cloud-native solutions.",
      "Gained understanding of scalable infrastructure and DevOps basics.",
    ],
  },
  {
    company: "Eduskills Virtual Internship",
    role: "Android Development Intern",
    date: "Mar – Apr 2025",
    imgPath: "/images/android-dev.png",
    logoPath: "/logos/android.svg",
    responsibilities: [
      "Built basic Android apps using Java and XML layouts.",
      "Worked on UI components, activities, and intents.",
      "Submitted milestone projects and received certification from Eduskills.",
    ],
  }
];
// constants/technicalSkills.js
export const technicalSkills = [
  { name: "React", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
{ name: "Express", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", darkBgFix: true },
  { name: "Next.js", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
{ name: "Tailwind CSS", imgPath: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Bootstrap", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Redux", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "JavaScript", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Python", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "C++", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
   { name: "Java", imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
];



export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  techStackIcons,
  techStackImgs,
  navLinks,
  certificateCards,
  internshipCards,
};
