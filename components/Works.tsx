import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section
      className="grid-container py-44 bg-WorkBg bg-Gray  bg-left bg-no-repeat bg-contain "
      id="Portfolio"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <main className="col-start-2 col-end-3 grid   items-center md:grid-cols-2">
        <div className="">
          <Image
            src="/media/why-us.png"
            width={831}
            height={625}
            alt="Works Illustration"
          />
        </div>
        <div className="grid justify-center  ">
          <div className="text-center sm:text-left max-w-sm  ">
            <div
              className="md:block hidden "
              data-aos="fade-down"
              data-aos-duration="1500"
            ></div>
            <div className="" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl capitalize my-2">
                comitted, hard Work, Positve
              </h1>
              <h1 className="text-2xl text-darkBlue sm:text-3xl lg:text-4xl mb-4 font-bold ">
                Check Out My Portfolio
              </h1>
              <p className=" text-sm sm:text-base text-gray-700 ">
                I am committed to everything I am doing because I believe that
                if you are committed to do that thing you can create something
                unique and make that project special without noticing it.
              </p>
              <Link href="/projects" passHref>
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-8 rounded-full secondary3-btn border-2 border-lightBlue text-lightBlue   ">
                  Show me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
