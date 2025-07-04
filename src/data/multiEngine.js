import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { BsToggleOn } from "react-icons/bs";
import { IoInformationCircle } from "react-icons/io5";
import { GiJetFighter } from "react-icons/gi";
import { MdSchedule } from "react-icons/md";
import { TbEngine } from "react-icons/tb";

const multiEngine = {
  data: {
    slug: `multi-engine-rating`,
    pageTitle: `Multi-Engine Rating | ${COMPANY_NAME}`,
    pageDescription: `Expand your privileges with the Multi-Engine Rating at ${COMPANY_NAME}. Train one-on-one in a modern twin-engine aircraft and gain the skills needed to safely operate complex aircraft with confidence.`,
    pageKeywords: `Multi-Engine Rating, ME Rating, twin engine flight training, multi training, ${COMPANY_NAME}`,

    header: {
      imagePath: `/src/assets/stock/stock-zahra-q_zVt9iTazQ-unsplash.jpg`,
      imageAlt: `Interior view of twin-engine aircraft cockpit during multi-engine training`,
      headerH1: `Multi-Engine Rating`,
      paragraph: `Earn your multi-engine rating in a structured, personalized course designed for safety, confidence, and efficiency.`,
      cards: [
        {
          icon: GrContact,
          name: `Apply Now`,
          link: `#contact`,
          description: `Submit your application to begin multi-engine training at ${COMPANY_NICKNAME}.`,
        },
        {
          icon: BsToggleOn,
          name: `Book a Discovery Call`,
          link: `/discovery-call`,
          description: `Talk with an advisor about aircraft availability, instructor scheduling, and how to prepare.`,
        },
        {
          icon: IoInformationCircle,
          name: `More Info`,
          link: `#details`,
          description: `Find out what's included and how to get your multi rating added to your certificate.`,
        },
      ],
    },
    content: {
      upperHeader: "Multi-Engine Rating",
      header: "Train with Confidence in a Twin",
      smallParagraph:
        "The Multi-Engine Rating is the next step for pilots looking to fly more complex aircraft or meet professional job requirements. This course focuses on safety, systems, and real-world application.",
      firstParagraph:
        "Train with an independent CFI in a modern twin-engine aircraft using structured, scenario-based instruction. You’ll cover VMC demos, engine-out procedures, systems, and emergency operations — all tailored to your experience level and schedule.",
      features: [
        {
          title: "Real-World Training",
          description: "Master single-engine operations, asymmetric thrust, and systems knowledge in a practical setting.",
          icon: TbEngine
        },
        {
          title: "Flexible Scheduling",
          description: "Coordinate directly with your instructor to train when it works best for you.",
          icon: MdSchedule
        },
        {
          title: "Fast Completion Options",
          description: "Most ME ratings can be completed in just a few days with focused instruction.",
          icon: GiJetFighter
        },
      ],
      secondParagraph:
        "Whether you're building hours, meeting hiring requirements, or prepping for ATP-level training, Hawkins makes it easy to get your multi rating done efficiently — without compromising quality or safety.",
      ctaTitle: `<a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Apply Today</a> or Book a <a href="/discovery-call" class="text-accent-600 hover:brightness-125 transition-all duration-300">Discovery Call</a>`,
      ctaParagraph:
        "We’ll connect you with a multi-engine instructor, walk you through the aircraft and requirements, and help you schedule your first lesson.",
      imagePath: "/src/assets/p2006-interior-1.jpg",
      imageAlt: "Twin-engine aircraft parked at Hawkins Flight Academy ready for training",
      simulator: false,
    },
    simulator: false,
    faqs: {
      title: "Multi-Engine Rating FAQs",
      questions: [
        {
          question: "What certificate do I need before adding a multi-engine rating?",
          answer:
            "You must hold at least a Private Pilot certificate. Many students add it at the Commercial or CFI level.",
        },
        {
          question: "How long does the training take?",
          answer:
            "Most students complete the course in 2–4 days depending on weather, availability, and scheduling.",
        },
        {
          question: "What kind of aircraft do you use?",
          answer:
            "We operate a well-maintained twin-engine aircraft used exclusively for multi-engine training.",
        },
        {
          question: "Will I be able to fly multi-engine aircraft after the checkride?",
          answer:
            "Yes — once you pass the checkride, your certificate will include multi-engine privileges.",
        },
      ],
    },
  },
};

export default multiEngine;
