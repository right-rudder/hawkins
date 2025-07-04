import { COMPANY_NAME, COMPANY_NICKNAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

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
  },
};

export default privatePilot;
