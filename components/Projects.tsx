import React from "react";
import PROJECTS from "../Project.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Projects() {
  return (
    <section className="grid-container pt-20 pb-10">
      <main className="col-start-2 col-end-3 ">
        <div className="grid  md:grid-cols-2 gap-9">
          {PROJECTS.data.map(
            ({ name, text, repo, img, link, stack }, index) => (
              <div className="shadow-lg p-8 rounded-lg" key={index}>
                <div className="flex justify-between items-center mb-4 ">
                  <h1 className="text-xl uppercase font-bold ">{name}</h1>
                  <div className="flex gap-4">
                    <Link href={link}>
                      <a target="_blank">
                        <div
                          className=" bg-gray-200  p-3 rounded-full cursor-pointer transform hover:scale-105 hover:bg-red-400 grid place-content-center relative"
                          title="Visit Project"
                        >
                          <box-icon name="search"></box-icon>
                        </div>
                      </a>
                    </Link>
                    <Link href={repo}>
                      <a target="_blank">
                        <div
                          className=" bg-gray-200  p-3 rounded-full cursor-pointer transform hover:scale-105 hover:bg-red-400 grid place-content-center"
                          title="View Code"
                        >
                          <box-icon name="code"></box-icon>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className=" relative h-52 md:h-44 lg:h-72">
                  <Image src={img} layout="fill" alt={name} />
                </div>
                <p className="text-sm text-gray-500 mt-4"> {stack}</p>
              </div>
            )
          )}
        </div>
      </main>
    </section>
  );
}
