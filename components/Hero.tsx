import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid-container bg-darkBlue">
      <main className="col-start-2 col-end-3 flex justify-between items-center text-center sm:text-left">
        <div className="max-w-lg my-44 text-white ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight  mb-2">
            Hey, Vince Here!
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl  mb-4 font-bold capitalize">
            a Web Developer
          </h1>
          <p className=" sm:text-base mb-2  text-gray-300 max-w-md">
            Located at manila, philippines i started at website development
            since 2020 i made so many projects that makes me proud. <br />
          </p>
          <p className="sm:text-base  text-gray-300  max-w-md">
            Website development is a kind of job that you need time, focus and
            especially hard work, being web developer make me happy because
            it`&apos;`s my dream ever since so i am willing to pursue my dream
            by creating a wonderful projects and also i am willing to learn
            anytime to make an exceptional website
          </p>
          <div className="md:flex items-center justify-between max-w-sm gap-4">
            <Link href="https://github.com/brixx21/resume/raw/master/EdTosoy-Developer-Resume.pdf">
              <a target="_blank" rel="noopener noreferrer">
                <button className="py-2 sm:py-3 px-6 mt-5 sm:mt-8  rounded-full primary-btn  ">
                  Download CV
                </button>
              </a>
            </Link>
            <div className="flex mt-5 sm:mt-8 gap-4 items-center justify-center">
              <Link href="https://github.com/VincentCarlosTrono">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <button
                    className="grid place-content-center p-3  bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                    aria-label="Github"
                  >
                    <box-icon
                      type="logo"
                      name="github"
                      color="#282828"
                    ></box-icon>
                  </button>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/vincent-trono-668462191/">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <button
                    className="grid place-content-center p-3 bg-gray-200 hover:bg-gray-300 rounded-full transform hover:scale-105 "
                    aria-label="linkedIn"
                  >
                    <box-icon
                      name="linkedin"
                      type="logo"
                      color="#282828"
                    ></box-icon>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/media/hero-img.png"
            width={581}
            height={525}
            alt="Works Illustration"
          />
        </div>
      </main>
    </section>
  );
}
