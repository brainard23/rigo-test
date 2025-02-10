import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import CardContent from "../../components/ui/CardContent";
import BlurrCard from "../../components/ui/BlurrCard";
//logos
import pwe from "../../assets/logos/pwe.webp";
import kpmg from "../../assets/logos/kpmg.webp";
import oval from "../../assets/logos/oval.webp";
import homeFarm from "../../assets/logos/home-farm.webp";
import cooperEstate from "../../assets/logos/CooperEstates.webp";
import retailSol from "../../assets/logos/retail-solutions.webp";
//features
import clock from "../../assets/features/clock.webp";
import graph from "../../assets/features/graph.webp";
import mobile from "../../assets/features/mobile.webp";
import note from "../../assets/features/note.webp";
import notification from "../../assets/features/notification.webp";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const logos = [
    { alt: "KPMG", image: kpmg },
    { alt: "Cooper Estate", image: cooperEstate },
    { alt: "Oval", image: oval },
    { alt: "PwC", image: pwe },
    { alt: "Retail Solutions", image: retailSol },
    { alt: "Home Farm", image: homeFarm },
  ];

  const featuresImg = [
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

  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      <div className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen">
        {/* Dark Mode Toggle Button */}
        <div className="absolute z-50 p-4 flex justify-end right-0">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none dark:bg-gray-200 dark:text-black"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative h-dvh md:h-[668px] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(images/Hero.webp)" }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 md:mx-[130px] md:max-w-6xl px-4 py-16 sm:px-6 lg:px-0">
            <div className="md:max-w-3xl md:pt-20">
              <p className="mb-4 text-lg font-normal text-white">Administration List</p>
              <div className="ml-8">
                <h1 className="mb-6 sm:text-3xl md:text-5xl lg:text-5xl font-medium leading-tight text-white md:w-[670px]">
                  Download our Ultimate Guide on how to Capitalise on Distressed Business Opportunities
                </h1>
                <p className="mb-8 text-lg text-white/90">Stay ten steps ahead of your competition.</p>
                <Button>DOWNLOAD FREE RESOURCE</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="py-10 bg-white dark:bg-gray-800">
          <div className="flex justify-between items-center w-full md:max-w-[1214px] sm:w-full mx-auto">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  width={80}
                  height={60}
                  loading="lazy"
                  src={logo?.image}
                  alt={`${logo?.alt} logo`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Information Section */}
        <section className="bg-white dark:bg-gray-800 md:px-[73px]">
          <div className="bg-[#F5F5F5] dark:bg-gray-700 w-full h-[654px]">
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex-col justify-center items-center max-w-5xl m-auto text-center">
                <div className="md:w-[703px] w-full md:px-28">
                  <h2 className="md:text-3xl text-2xl font-bold mb-6 md:m-auto">
                    Leverage Distressed Acquisitions for Maximum Profitability
                  </h2>
                </div>
                <div className="md:w-[624px] w-full m-auto">
                  <p className="mb-10 p-6 font-extralight text-[16px] text-center">
                  Administration List is a service for savvy investors and
                  business leaders seeking valuable insights into the UK
                  insolvency sector. Welcome to a world of exclusive information
                  and trends in distressed acquisition activity.
                  <br />
                  <br />
                  Identify the right opportunities, negotiate the best deals,
                  and maximise returns with distressed business acquisitions.
                  Our Ultimate Guide can help you stay ten steps ahead of your
                  competition.
                  </p>
                </div>
                <div className="mt-[54px]">
                  <Button>Download Free Resource</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Feature Highlights Section */}
      <section className="bg-white mt-[98px]">
        <div className="relative h-[829px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(src/assets/features/alley.webp)",
            }}
          ></div>
          <div className="relative z-10 md:mb-[33px] pt-12">
            <img
              width={670}
              height={450}
              loading="lazy"
              className="m-auto"
              src={mobile}
              alt={`mobile image`}
            />{" "}
          </div>

          <div className="relative z-10 grid md:grid-cols-4 grid-cols-2 max-w-5xl mx-auto md:gap-8">
            {featuresImg.map((feature, i) => (
              <Card key={i}>
                <CardContent>
                  <img
                    width={40}
                    height={40}
                    loading="lazy"
                    src={feature?.image}
                    alt={`${feature?.title} logo`}
                    className="mb-[31px]"
                  />{" "}
                  <h3 className="md:text-xl font-bold text-[#52B5E6] md:mb-1">
                    {feature?.title}
                  </h3>
                  <p className="text-center font-extralight md:text-[16px] text-xs">
                    {feature?.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-900 text-white py-16 md:px-40 relative h-[820px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(src/assets/testimonial/blurr.webp)",
          }}
        ></div>
        <div className="grid md:gap-60 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-between items-center relative z-10 h-full w-full">
          <div className="max-w-5xl mx-auto text-center md:h-[502px] md:w-[494px] relative pl-2">
            <div
              className="absolute inset-0 bg-cover bg-center md:w-[62px] md:h-[45px] h-[10px] w-[10px] opacity-35"
              style={{
                backgroundImage: "url(src/assets/testimonial/bg.png)",
              }}
            />
            <div />
            <h1 className="md:text-[55.6px]/15 italic mb-6 text-left pr-10 mt-3">
              Making a profit with a distressed acquisition...
            </h1>
            <p className="font-extralight text-[16px] text-left mb-6 ">
              starts with clarifying your commercial purpose. Successful
              investors and entrepreneurs focus their time and attention on
              understanding, strategising and defining exactly what they want
              from the purchase.”
            </p>
            <p className="font-medium text-left mb-12">
              Stephen Ideh,
              <br /> Director, Administration List
            </p>
            <div className="flex justify-start">
              <Button>Download Free Resource</Button>
            </div>
          </div>
          <div>
            <BlurrCard>40 years of experience</BlurrCard>
            <BlurrCard>10 steps ahead of the market</BlurrCard>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-[#e2e2e2] relative h-[846px] overflow-hidden">
        <div className="flex justify-end items-center">
          <div className="">
            <div
              className="absolute inset-0 bg-cover md:flex hidden bg-center w-[1130px] h-[846px] left-[-40px]"
              style={{
                backgroundImage: "url(src/assets/book.webp)",
              }}
            />
          </div>
          <div className="relative z-10 mt-[167px] p-1">
            <h2 className="text-3xl font-bold mb-6 dark:text-black">What's Included</h2>
            <div className="md:w-[413px] md:mr-36">
              <p className="md:font-extralight md:text-[16px] mb-8 dark:text-black">
                Unlock the secrets to profitable distressed acquisitions today!
                Gain invaluable knowledge about market trends and industry
                insights with our Ultimate Guide. Here’s a brief outline of what
                it covers:
              </p>
              <ul className="relative z-10 list-disc list-inside text-left md:font-extralight md:text-[16px] dark:text-black">
                <li>
                  The strategy of buying an operational business below market
                  value
                </li>
                <li>
                  Engaging the value of business assets before acquisitions
                </li>
                <li>Where and how to buy insolvent businesses</li>
                <li>
                  Putting together a bulletproof strategy for maximised return
                  on investment
                </li>
              </ul>
              <div class="left-[-400px] top-[374px] absolute inset-0 w-[828.853px] h-[410.896px] flex-shrink-0 bg-gradient-to-b from-[#DCDCDC] to-[rgba(227,227,227,0)] rotate-[145deg]" />
            </div>
            <div className="relative z-10 flex justify-start mt-14">
              <Button>Download Free Resource</Button>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="bg-gray-800 dark:bg-gray-900 text-white text-center">
          <div className=" mb-6 pt-[89px]">
            <h2 className="text-3xl font-bold">Administration List</h2>
            <p className="font-extralight text-[15px] mt-10">
              Address: 25 Wilton Rd, Victoria, London SW1V 1LW
            </p>
          </div>
          <div className="bg-[#1C242B] h-[50px] bottom-0 flex justify-center items-center">
            <p className="font-extralight text-[12px]">
              © Copyright &copy; 2022. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
