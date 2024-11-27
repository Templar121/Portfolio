import {
    mobile,
    backend,
    creator,
    web,
    html,
    css,
    mongodb,
    git,
    figma,
    docker,
    meta,
    hpair,
    hc,
    ai,
    rag,
    tripguide,
    threejs,
    python,
    java,
    k,
    r,
    tf,
    sklearn,
    sih,
    dlai,
    hu,
    iitkgp,
    su,
    iitm,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Achivements",
    },
    {
      id: "Certificates",
      title: "Certificates",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning Engineer",
      icon: web,
    },
    {
      title: "Researcher",
      icon: mobile,
    },
    {
      title: "Deep Learning Enginner",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "Keras",
      icon: k,
    },
    {
      name: "SK-Learn",
      icon: sklearn,
    },
    {
      name: "Tensorflow",
      icon: tf,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Delegate at Harvard Project for Asian and International Relations 2024",
      company_name: "Harvard University",
      icon: hpair,
      iconBg: "#383E56",
      date: "Aug 2024",
      points: [
        "Harvard's Asian Conference on Reimagining creativity held at Chulalongkorn University, Bangkok Thailand.",
        "Selected after a rigorous interview by the HPAIR Organizing Team.",
      ],
    },
    {
      title: "International Hardware Model Making Competition 2024 - 1st Runners Up",
      company_name: "Asansol Engineering College",
      icon: hc,
      iconBg: "#E6DEDD",
      date: "Feb 2024",
      points: [
        "Developed a Block-chain based E-vault alongside my team Block Busters.",
        "Collaborating with cross-functional team-members including designers, and other developers to create high-quality end product.",
      ],
    },
    {
      title: "Smart India Hackathon 2023 Finalist",
      company_name: "Ministry of Law and Justice, Government of India",
      icon: sih,
      iconBg: "#383E56",
      date: "Dec 2023",
      points: [
        "Worked under the Ministry of Law and Justice over their problem statement ID - 1284.",
        "Developed a Block-chain based E-valu for storing and managing legal records digitally.",
        "Selected in the top 5 among 500 competing teams all across India.",
      ],
    },
    
    {
      title: "Intra College Buisness Idea Presentation - Winner",
      company_name: "JIS group",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2023",
      link: "",
      points: [
        "Presented our idea - DevSociety; A platform designed to ensure collaboration between students and experienced professionals",
        "Selcted at College Level and Presented our Idea in front of Judge Panel at Narula Institute of Technology Agarpara",
      ],
    },
  ];

  const certificates = [
    {
      title: "Deep Learning",
      issuing_organization: "Indian Instititute of Technology, Madras, NPTEL",
      icon: iitm,
      iconBg: "#E6DEDD",
      date: "Nov 2024",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS114S86980006904337487",
      points: [
              "12 Weeks course taugh by Mitesh Khapra - Topper 5 % in this course",
              "skills learned - Machine Learning, Neural Network, CNN, Python."
      ],
    },
    {
      title: "Introduction to Machine Learning",
      issuing_organization: "Indian Institute of Technology, Kharagpur, NPTEL",
      icon: iitkgp,
      iconBg: "#E6DEDD",
      date: "Oct 2024",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS81S33130000602761845",
      points: [
        "8 Weeks course taught by Dr. Sudeshna Sarkar, Head - Centre of Excellence in Artificial Intelligence",
        "Skills learned - Various Mchine Learning Algorithms and their use cases."
],
    },
    {
      title: "Natural Language Specialization",
      issuing_organization: "Deep Learning.AI",
      icon: dlai,
      iconBg: "#E6DEDD",
      date: "Aug 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/75KR93YKRU06",
      points: [
              "Skills obtained from this above certification",
              "NLP, Applied Machine Learning, Artificial Neural Networks."
      ],
    },
    {
      title: "Machine Learning Specialization",
      issuing_organization: "Stanford University",
      icon: su,
      iconBg: "#E6DEDD",
      date: "Apr 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/26YPTS8V4L3J",
      points: [
              "Skills obtained from this above certification",
              "Neural Networks, Logistic Regression, Critical Thinking, machine Learning, Linear Regression, Python."
      ],
    },
    {
      title: "CS50 AI",
      issuing_organization: "Harvard University",
      icon: hu,
      iconBg: "#E6DEDD",
      date: "Mar 2024",
      link: "https://certificates.cs50.io/c3447d07-47f3-412e-8dac-f8f3977c6635.pdf?size=letter",
      points: [
              "Skills obtained from this above certification",
              "Machine Learning, Artificial Intelligence, Python."
      ],
    }
];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "RAG based Chat with Document",
      description:
        "Large language Model based Retrieval Augmented Genaretive system for Chatting with any PDF documents.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "green-text-gradient",
        },
        {
          name: "rag",
          color: "pink-text-gradient",
        },
      ],
      image: rag,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sentiment Analysis using LIME",
      description:
        "Neural Network based Sentiment Analysis with Local Interpretable Model Agnostic Explanations for Interpretability",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Neural-Networks",
          color: "green-text-gradient",
        },
        {
          name: "LIME",
          color: "pink-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, certificates,  testimonials, projects};