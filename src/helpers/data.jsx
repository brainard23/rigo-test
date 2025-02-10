//logos
import pwe from "/images/assets/logos/pwe.webp";
import kpmg from "/images/assets/logos/kpmg.webp";
import oval from "/images/assets/logos/oval.webp";
import homeFarm from "/images/assets/logos/home-farm.webp";
import cooperEstate from "/images/assets/logos/CooperEstates.webp";
import retailSol from "/images/assets/logos/retail-solutions.webp";
//features
import clock from "/images/assets/features/clock.webp";
import graph from "/images/assets/features/graph.webp";
import note from "/images/assets/features/note.webp";
import notification from "/images/assets/features/notification.webp";

export const logos = [
    { alt: "KPMG", image: kpmg },
    { alt: "Cooper Estate", image: cooperEstate },
    { alt: "Oval", image: oval },
    { alt: "PwC", image: pwe },
    { alt: "Retail Solutions", image: retailSol },
    { alt: "Home Farm", image: homeFarm },
  ];

  export const featuresImg = [
    {
      title: "Real-time results",
      description:
        "Real-time information on UK companies entering administration.",
      image: clock,
    },
    {
      title: "Financial data",
      description:
        "Company financial data, including turnover, profit and trading history.",
      image: graph,
    },
    {
      title: "Information Library",
      description:
        "An ever-expanding library of information, interviews, and advice.",
      image: note,
    },
    {
      title: "Direct contact",
      description: "Direct contact details for administrators across the UK.",
      image: notification,
    },
  ];