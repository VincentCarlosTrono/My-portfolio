import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [submited, setSubmited] = useState(false);
  return (
    <section
      className="grid-container bg-Gray  sm:mt-60 md:mt-0 py-10 bg-ContactBg  bg-left bg-no-repeat bg-contain "
      id="Get-In-Touch"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <main className="col-start-2 col-end-3 grid justify-cent  items-center md:grid-cols-2 ">
        <div className="grid  justify-center">
          <form
            className="mb-10  shadow-lg rounded-2xl p-4 sm:p-10 bg-white grid border"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
              setUsername("");
              setDescription("");
              setSubmited(true);
              setTimeout(() => {
                setSubmited(false);
              }, 2000);
            }}
          >
            <h1 className=" text-lg sm:text-2xl text-darkBlue md:text-3xl mb-8  font-bold ">
              GOT A PROJECT?
            </h1>
            {submited && (
              <h1 className="text-center mb-4 text-violet text-xl font-semibold">
                Thank You!
              </h1>
            )}
            <div className="text-sm">
              <label htmlFor="username" className="block">
                Name
              </label>
              <input
                type="text"
                className="w-full sm:w-96 text-lg p-2 my-2 border rounded-md"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                className="w-full sm:w-96 text-lg p-2 my-2 border rounded-md"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-sm">
              <label htmlFor="text" className="block capitalize">
                Tell me about the project
              </label>
              <textarea
                name="text"
                className="w-full sm:w-96 text-lg p-2 my-2 border rounded-md"
                id="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 sm:py-3 px-6  sm:mt-8  bg-Blue transform hover:scale-95 text-white mt-5  md:mt-10 rounded-md text-lg"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="grid justify-center md:justify-end lg:justify-center">
          <div className="text-left  max-w-sm">
            <div
              className="md:block hidden"
              data-aos="fade-down"
              data-aos-duration="1500"
            ></div>
            <div className="" data-aos="fade-up" data-aos-duration="2000">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl    font-extralight  my-2">
                Need Something else? Let’s talk.
              </h1>
              <h1 className="text-2xl text-darkBlue sm:text-3xl lg:text-4xl  mb-4 font-bold">
                For any type of Query & Discussion.
              </h1>
              <div className="flex justify-between items-center mt-8 ">
                <Link href="mailto:trono.vincentcii@gmail.com" passHref>
                  <button className="py-2 sm:py-3 px-6  rounded-full secondary3-btn border-2  text-lightBlue border-lightBlue ">
                    My Email
                  </button>
                </Link>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/tronovincentcarlos"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="input"
                  >
                    <div className="p-2 rounded-full mr-2  grid place-content-center cursor-pointer hover:bg-gray-300">
                      <box-icon type="logo" name="facebook"></box-icon>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vincent-trono-668462191/"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="input"
                  >
                    <div className="p-2 rounded-full  mr-2 grid place-content-center cursor-pointer hover:bg-gray-300">
                      <box-icon name="linkedin" type="logo"></box-icon>
                    </div>
                  </a>

                  <a
                    href="https://twitter.com/TronoVincent"
                    rel="noreferrer"
                    target="_blank"
                    aria-label="input"
                  >
                    <div className="p-2 rounded-full mr-2  grid place-content-center cursor-pointer hover:bg-gray-300">
                      <box-icon name="twitter" type="logo"></box-icon>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
