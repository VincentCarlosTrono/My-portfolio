import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { useContext } from "react";
import { MenuContext } from "../ContextApi/openMenu";
import Head from "next/head";

export default function projects() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setOpenMenu } = useContext(MenuContext);
  return (
    <div>
      <Head>
        <title>Vince | Portfolio</title>
        <meta
          name="description"
          content="I'm a software engineer based in Manila, Philippines specializing in building exceptional websites, applications, and everything in between. I started web development in 2018, after doing Front-end, I switched to Full Stack development, where I work with a variety of meaningful projects. I always build realistic websites and real world projects, not just simple todo list, calendar, calculator and all of NextJS TypeScript HTML React JavaScript CSS Tailwind Node PostgreSQL GraphQL Apollo  MongoDB 
          Home
          Portfolio
          About
          Get in Touch
          Contact Me Need Something else? Let’s talk.
          For any type of Query & Discussion."
        />
      </Head>
      <Header />
      <div onMouseOver={() => setOpenMenu(false)}>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
