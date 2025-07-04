import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { GiAirplane } from "react-icons/gi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSchedule } from "react-icons/md";


const instrumentRating = {
  data: {
    slug: `instrument-rating`,
    pageTitle: `Instrument Rating (IR) | ${COMPANY_NAME}`,
    pageDescription: `Take your flight skills to the next level with the Instrument Rating course at ${COMPANY_NAME}. Train in G3X-equipped aircraft and FAA-approved BATD simulators to gain real-world IFR experience and fly safely in all conditions.`,
    pageKeywords: `Instrument Rating, IFR training, flight simulators, glass cockpit, ${COMPANY_NAME}`,

    header: {
      imagePath: `/src/assets/p2006-interior-1.jpg`,
      imageAlt: `Instrument student training on G3X glass cockpit avionics`,
      headerH1: `Instrument Rating (IR)`,
      paragraph: `Learn to fly with precision in low visibility. This course will teach you how to operate under Instrument Flight Rules (IFR) using glass cockpit avionics and FAA-approved simulators.`,
      cards: [
        {
          icon: GrContact,
          name: `Apply Now`,
          link: `#contact`,
          description: `Ready to begin IFR training? Submit your application and take the next step with ${COMPANY_NICKNAME}.`,
        },
        {
          icon: FaPlaneDeparture,
          name: `Book a Discovery Call`,
          link: `/discovery-call`,
          description: `Talk to a flight advisor to discuss your instrument goals and training timeline.`,
        },
        {
          icon: IoInformationCircle,
          name: `More Info`,
          link: `#details`,
          description: `Get details on course structure, aircraft, simulator access, and schedule options.`,
        },
      ],
    },
    content: {
      upperHeader: "Instrument Rating Course",
      header: "Fly with Confidence — Even in the Clouds",
      smallParagraph:
        "With your Instrument Rating, you’ll gain the skills to safely operate in IMC and controlled airspace. Hawkins Flight Academy prepares you with the tools and mindset for real-world IFR conditions.",
      firstParagraph:
        "Train on glass cockpit aircraft equipped with G3X avionics, ADS-B, and autopilot. Our FAA-approved BATD flight simulator lets you log up to 10 hours toward your rating — reducing cost while reinforcing precision procedures.",
      features: [
        {
          title: "Real-World IFR Training",
          description: "Master holds, approaches, and enroute procedures with an emphasis on practical, in-aircraft experience.",
          icon: GiAirplane
        },
        {
          title: "Sim + Flight Integration",
          description: "Log 10 hours in our BATD sim, reducing overall training cost and sharpening your skills.",
          icon: HiMiniComputerDesktop
        },
        {
          title: "Flexible Instructor Options",
          description: "Train on your schedule with dedicated CFIs who know how to get you IFR ready.",
          icon: MdSchedule
        },
      ],
      secondParagraph:
        "Whether you’re aiming for commercial flying or just want the safety of flying in clouds, Hawkins offers a structured, personalized IFR program. Our Tupelo and Shelbyville locations allow for controlled airspace training without the congestion.",
      ctaTitle: `<a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Apply Now</a> or Schedule a <a href="#contact" class="text-accent-600 hover:brightness-125 transition-all duration-300">Discovery Call</a>`,
      ctaParagraph:
        "Get expert guidance from our team and take the next step in your aviation journey.",
      imagePath: "/src/assets/IMG_4669-scaled.jpg",
      imageAlt: "Student training for instrument rating in glass cockpit aircraft",
      simulator: true,
    },
    faqs: {
      title: "Instrument Rating FAQs",
      questions: [
        {
          question: "Why should I get an Instrument Rating?",
          answer:
            "It allows you to fly in a wider range of weather conditions and improves safety, proficiency, and employability as a pilot.",
        },
        {
          question: "How long does IFR training take?",
          answer:
            "Most students complete their Instrument Rating in 2 to 4 months, depending on weather and scheduling.",
        },
        {
          question: "How much simulator time can I log?",
          answer:
            "You can log up to 10 hours in our FAA-approved BATD flight simulator toward the 40-hour IFR requirement.",
        },
        {
          question: "Do I need to own my own aircraft?",
          answer:
            "No. Our fleet of modern training aircraft is available for you to train in with your instructor.",
        },
      ],
    },
  },
};

export default instrumentRating;
