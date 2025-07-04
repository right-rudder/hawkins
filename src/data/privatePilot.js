import { COMPANY_NAME } from "../consts";
import { GrContact } from "react-icons/gr";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const privatePilot = {
  data: {
    slug: `private-pilot`,
    pageTitle: `Private Pilot License (PPL) | ${COMPANY_NAME}`,
    pageDescription: `Start your aviation journey with the Private Pilot License (PPL) program from ${COMPANY_NAME}. Train with an independent CFI at your own pace, with the flexibility to go as fast as you're ready.`,
    pageKeywords: `Private Pilot, PPL course, flight training, independent CFI, FAA minimum time, ${COMPANY_NAME}`,

    header: {
      imagePath: `/src/assets/stock/stock-steward-masweneng-n9By7oBszM0-unsplash.jpg`,
      imageAlt: `Private Pilot student with ${COMPANY_NAME} preparing for takeoff`,
      headerH1: `Private Pilot License (PPL)`,
      paragraph: `Your first step to becoming a pilot. This course provides foundational flight training to earn your FAA Private Pilot License.`,
      cards: [
        { 
          icon: GrContact,
          name: `Apply Now`, 
          link: `#contact`, 
          description: `Get started with your Private Pilot training today.`,
        },
        { 
          icon: FaPlaneDeparture,
          name: `Book a Discovery Call`, 
          link: `/discovery-call`, 
          description: `Talk with a program advisor to learn more about your training options.`,
        },
        { 
          icon: IoInformationCircle,
          name: `More Info`, 
          link: `#details`, 
          description: `Learn more about our Private Pilot License program.`,
        },
      ],
    },

    pageSummary: {
      title: `FAA-Certified<br> Private Pilot Course`,
      paragraphs: [
        `Earn your Private Pilot Certificate through ${COMPANY_NAME}’s flexible, student-paced model. Whether you want to fly for fun or start a career, this is your launchpad.`,
        `Our CFIs offer one-on-one instruction and training tailored to your pace and schedule. With no school-imposed delays, you get airborne sooner and more affordably.`,
      ],
    },

    details: {
      upperHeading: `Your First Step`,
      heading: `Private Pilot License`,
      subHeading: `Learn to fly with personalized, FAA-compliant training from experienced CFIs near you.`,

      title: `Overview`,
      description: `
        ${COMPANY_NAME}’s <strong>Private Pilot License</strong> program provides the foundation of your aviation education.
        <br/><br/>
        &nbsp;<strong>Hours Included:</strong> 80 flight hours<br/>
        &nbsp;<strong>Estimated Duration:</strong> 1–3 months<br/>
        &nbsp;<strong>Estimated Cost:</strong> $15,000 (or $23,050 with financing)<br/>
        &nbsp;<strong>Aircraft Used:</strong> Cessna 172 or locally available trainer<br/>
        <br/>
        <strong>Looking to save?</strong> If you're able to complete the program at the FAA minimum of <strong>40 hours</strong>, your total cost could be as low as <strong>$9,950</strong>.
      `,

      keyPoints: [
        `One-on-one instruction with independent CFIs`,
        `Flexible scheduling and local airport options`,
        `Ground school and written test prep included`,
        `Accelerated path available (complete in 1–3 months)`,
        `FAA-compliant training with modern aircraft`,
        `Optional discounted training if completed in FAA minimum time`,
      ],

      included: {
        heading: `What’s Included in Your Training Package?`,
        items: [
          `Flight instruction with independent CFI`,
          `Pre-solo, solo, and cross-country training`,
          `Ground school preparation for FAA written test`,
          `Checkride preparation and mock orals`,
          `Flight planning and radio communication training`,
        ],
      },

      callCTA: {
        heading: `Ready to Start Your Journey?`,
        description: `Book a Discovery Call and talk with a program advisor to find out how to start your training with ${COMPANY_NAME}.`,
        button: { buttonText: `Book Now`, link: `/discovery-call` },
      },

      benefits: {
        heading: `Why Train with ${COMPANY_NAME}?`,
        items: [
          `Local instructors and aircraft—no relocation`,
          `No delays, no group scheduling`,
          `Pay-as-you-go or finance your full course`,
          `Mentorship from certified instructors`,
          `Real-world flying experience`,
        ],
      },

      cta: {
        imagePath: `/src/assets/stock-private-pilot-license-training-fast-independent.jpg`,
        imageAlt: `Student pilot doing preflight checklist with ${COMPANY_NAME} instructor`,
        title: `Take the First Step`,
        description: `Start your flight training with ${COMPANY_NAME} and achieve your private pilot license on your schedule.`,
        button: { name: `Apply Now`, link: `/start-flying` },
      },

      faqs: [
        {
          question: `How fast can I finish my Private Pilot License?`,
          answer: `Most students complete the program in 1–3 months, depending on their availability and frequency of flights.`,
        },
        {
          question: `What’s the cheapest way to earn my PPL?`,
          answer: `If you complete your training in the FAA minimum of 40 hours, your cost could be as low as $9,950.`,
        },
        {
          question: `Can I train part-time?`,
          answer: `Yes. ${COMPANY_NAME} allows for full-time or part-time training based on your availability.`,
        },
      ],
    },
  },
};

export default privatePilot;
