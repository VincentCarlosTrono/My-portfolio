import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const logos = [
    {
      name: "React",
      svg: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/react.svg",
    },
    {
      name: "TypeScript",
      svg: "https://raw.githubusercontent.com/file-icons/source/master/svg/TypeScript-Alt.svg",
    },
    {
      name: "HTML",
      svg: "https://raw.githubusercontent.com/file-icons/DevOpicons/master/svg/html5.svg",
    },
    {
      name: "Tailwind",
      svg: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/tailwindcss.svg",
    },
    {
      name: "JavaScript",
      svg: "https://raw.githubusercontent.com/TheEssemCraft/FocialMix/dev/src/javascript.svg",
    },
    {
      name: "CSS",
      svg: "https://raw.githubusercontent.com/file-icons/DevOpicons/master/svg/css3.svg",
    },
  ];
  return (
    <section
      className="grid-container py-20 -mb-44 mt-24 bg-AboutBg bg-right max-h-screen bg-no-repeat bg-contain "
      id="About"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <main className="col-start-2 col-end-3 grid   items-center grid-rows-2  md:grid-cols-2">
        <div className="grid   justify-center">
          <div className="text-center sm:text-left  max-w-sm">
            <div className="" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl  my-2">
                View Responses
              </h1>
              <h1 className="text-2xl text-darkBlue sm:text-3xl lg:text-4xl mb-4 font-bold">
                and Gain Insight{" "}
              </h1>
              <p className=" text-sm sm:text-base text-gray-700">
                Here are a few technologies I have been working with recently:
              </p>
              <div className="grid grid-cols-3 mt-1">
                {logos.map(({ name, svg }) => (
                  <div className=" flex mt-1 " key={name}>
                    <div className="w-6 h-6 relative">
                      <Image src={svg} layout="fill" alt={name} />
                    </div>
                    <div className="ml-2  ">{name}</div>
                  </div>
                ))}
              </div>
              <Link href="https://github.com/VincentCarlosTrono/">
                <a target="_blank" rel="noopener noreferrer">
                  <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-8 rounded-full secondary3-btn border-2 text-lightBlue border-lightBlue">
                    Learn More
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:row-start-auto">
          <Image
            src="/media/skills.png"
            width={897}
            height={540}
            alt="About Illustration"
          />
        </div>
      </main>
    </section>
  );
}
