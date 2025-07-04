import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GiAirplane } from "react-icons/gi";
import { MdScheduleSend, MdAutoGraph } from "react-icons/md";
import { SiCockpit } from "react-icons/si";

const commercialPilot = {
  data: {
    slug: `commercial-pilot`,
    pageTitle: `Commercial Pilot License (CPL) | ${COMPANY_NAME}`,
    pageDescription: `Get paid to fly. The Commercial Pilot License (CPL) program at ${COMPANY_NAME} prepares you for professional flying with modern aircraft, advanced avionics, and real-world flight experience.`,
    pageKeywords: `Commercial Pilot License, CPL training, advanced flight training, time building, ${COMPANY_NAME}`,

    header: {
      imagePath: `/src/assets/IMG_1693-scaled.jpg`,
      imageAlt: `Commercial student pilot reviewing checklists in cockpit`,
      headerH1: `Commercial Pilot License (CPL)`,
      paragraph: `Take the next step toward a professional aviation career. This course builds on your Private and Instrument skills to meet the FAA requirements for compensated flight operations.`,
      cards: [
        {
          icon: GrContact,
          name: `Apply Now`,
          link: `#contact`,
          description: `Submit your application and start your commercial pilot journey with ${COMPANY_NICKNAME}.`,
        },
        {
          icon: FaBriefcase,
          name: `Book a Discovery Call`,
          link: `/discovery-call`,
          description: `Talk with an advisor about flight time requirements and how we help you prepare for checkrides and hiring.`,
        },
        {
          icon: IoInformationCircle,
          name: `More Info`,
          link: `#details`,
          description: `Learn what’s included and how Hawkins helps you fly professionally — faster and more affordably.`,
        },
      ],
    },
    content: {
      upperHeader: "Commercial Pilot Course",
      header: "From Hobbyist to Professional Pilot",
      smallParagraph:
        "If you want to fly for a living, the Commercial Pilot License is your gateway. At Hawkins, we help you reach the 250-hour requirement efficiently with cost-effective instruction and structured time building.",
      firstParagraph:
        "You’ll fly RV-12s, a Vector Harmony, and our Cessna 172 — all equipped with glass cockpits. Our instructors focus on real-world decision-making, commercial maneuvers, and readiness for future airline or charter opportunities.",
      features: [
        {
          title: "Structured Time Building",
          description: "Earn hours the smart way — dual, solo, cross-country, and simulator time that counts.",
          icon: MdAutoGraph
        },
        {
          title: "Real-World Training",
          description: "Practice commercial maneuvers and flight scenarios that reflect the demands of pro flying.",
          icon: GiAirplane
        },
        {
          title: "Flexible Scheduling",
          description: "Work around your current job or life commitments while progressing toward your CPL.",
          icon: MdScheduleSend
        },
      ],
      secondParagraph:
        "Whether you plan to become a CFI, join a charter operation, or build time toward the airlines, Hawkins gives you the tools, structure, and mentorship to succeed. We’ll help you reach your goals on a timeline that works for you.",
      ctaTitle: `<a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Apply Now</a> or Schedule a <a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Discovery Call</a>`,
      ctaParagraph:
        "Our team will walk you through flight hour requirements, costs, and career opportunities after earning your CPL.",
      imagePath: "/src/assets/N691HA-in-air.png",
      imageAlt: "Hawkins RV-12 aircraft flying cross-country during commercial pilot training",
      simulator: true,
    },
    simulator: true,
    faqs: {
      title: "Commercial Pilot FAQs",
      questions: [
        {
          question: "What are the flight time requirements for a CPL?",
          answer:
            "The FAA requires 250 total flight hours, including 100 hours as pilot-in-command and 50 hours of cross-country flight time.",
        },
        {
          question: "Can I build hours at Hawkins before or during my CPL?",
          answer:
            "Yes. We offer structured time-building plans and affordable rental blocks to help you hit 250 hours efficiently.",
        },
        {
          question: "What kind of aircraft will I train in?",
          answer:
            "We use fuel-efficient RV-12s, a Vector Harmony, and a Cessna 172 — all equipped with glass cockpits.",
        },
        {
          question: "What’s the next step after earning my CPL?",
          answer:
            "Many graduates go on to get their CFI rating, join charter operators, or begin regional airline pathway programs.",
        },
      ],
    },
  },
};

export default commercialPilot;
