import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GiAirplane } from "react-icons/gi";
import { MdSchedule } from "react-icons/md";
import { SiCockpit } from "react-icons/si";

const privatePilot = {
  data: {
    slug: `private-pilot`,
    pageTitle: `Private Pilot License (PPL) | ${COMPANY_NAME}`,
    pageDescription: `Start your aviation journey with the Private Pilot License (PPL) program at ${COMPANY_NAME}. Train one-on-one with a dedicated flight instructor and progress at your own pace, with the flexibility to move as quickly as you're ready.`,
    pageKeywords: `Private Pilot, PPL course, flight training, independent CFI, FAA minimum time, ${COMPANY_NAME}`,

    header: {
      imagePath: `/src/assets/stock/stock-steward-masweneng-n9By7oBszM0-unsplash.jpg`,
      imageAlt: `Private Pilot student with ${COMPANY_NAME} preparing for takeoff`,
      headerH1: `Private Pilot License (PPL)`,
      paragraph: `Take your first step toward becoming a pilot. This course delivers the essential flight training needed to earn your FAA Private Pilot License, right here at ${COMPANY_NICKNAME}.`,
      cards: [
        { 
          icon: GrContact,
          name: `Apply Now`, 
          link: `#contact`, 
          description: `Submit your application and begin your training at ${COMPANY_NICKNAME}.`,
        },
        { 
          icon: FaPlaneDeparture,
          name: `Book a Discovery Call`, 
          link: `/discovery-call`, 
          description: `Talk with a flight advisor about the PPL course and your training goals.`,
        },
        { 
          icon: IoInformationCircle,
          name: `More Info`, 
          link: `#details`, 
          description: `Find out what’s included in the course and how to get started.`,
        },
      ],
    },
    content: {
      upperHeader: "Private Pilot Course",
      header: "Your First Step Toward Becoming a Pilot",
      smallParagraph:
        "The Private Pilot License (PPL) is where your aviation journey begins. With Hawkins Flight Academy, you’ll learn foundational flying skills in a modern, supportive environment.",
      firstParagraph:
        "We train students using our fleet of fuel-efficient RV-12s and glass cockpit aircraft. You’ll get hands-on experience from day one and work with independent CFIs who prioritize safety, flexibility, and real-world readiness.",
      features: [
        {
          title: "Modern Aircraft",
          description: "Train in RV-12s, a Vector Harmony, and a Cessna 172 — all equipped with glass cockpits and ADS-B.",
          icon: GiAirplane
        },
        {
          title: "Flexible Scheduling",
          description: "Work with an independent instructor at your own pace. Accelerated or part-time — it's your call.",
          icon: MdSchedule
        },
        {
          title: "Glass Cockpit Training",
          description: "Our G3X-equipped aircraft help prepare you for more advanced ratings and commercial flying.",
          icon: SiCockpit
        },
      ],
      secondParagraph:
        "Our Shelbyville and Tupelo locations offer low-traffic environments, perfect for both solo practice and focused instruction. Whether you plan to fly for fun or move on to a commercial career, this course sets the foundation.",
      ctaTitle: `<a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Apply Today</a> or Schedule a <a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Discovery Call</a>`,
      ctaParagraph:
        "Want to learn more before you commit? Talk to an advisor or apply now to start training on your schedule.",
      imagePath: "/src/assets/IMG_4669-scaled.jpg",
      imageAlt: "Private Pilot student training with Hawkins Flight Academy",
      simulator: true,
    },
    faqs: {
      title: "Private Pilot FAQs",
      questions: [
        {
          question: "What is the Private Pilot License (PPL)?",
          answer:
            "The PPL is a certification that allows you to fly as pilot-in-command of an aircraft. It’s the first step in your aviation journey.",
        },
        {
          question: "How long does it take to earn a PPL?",
          answer:
            "The time varies based on your schedule and commitment, but most students complete the course in 3-6 months.",
        },
        {
          question: "What are the requirements for enrolling?",
          answer:
            "You must be at least 17 years old, hold at least a third-class medical certificate, and pass a written exam.",
        },
        {
          question: "Can I train part-time?",
          answer:
            "Yes! We offer flexible scheduling to accommodate your lifestyle, whether you want to train full-time or part-time.",
        },
      ],
    },
  },
};

export default privatePilot;
