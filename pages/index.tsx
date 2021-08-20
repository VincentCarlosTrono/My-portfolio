import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Works from "../components/Works";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useContext } from "react";
import Script from "next/script";
import { MenuContext } from "../ContextApi/openMenu";

export default function Home() {
  const { setOpenMenu } = useContext(MenuContext);

  return (
    <div className="lg:bg-heroBg bg-right-top  bg-no-repeat bg-contain hero ">
      <Head>
        <title>Vince | Front End Developer</title>
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
        <Hero />
        <Works />
        <About />
        <Contact />
        <Footer />
      </div>
      <Script
        async
        src="https://unpkg.com/boxicons@latest/dist/boxicons.js"
      ></Script>
    </div>
  );
}
