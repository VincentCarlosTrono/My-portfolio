import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const footerLink = [
    {
      title: "Useful links",
      sub1: ["Home", "/#"],
      sub2: ["Portfolio", "/#Portfolio"],
      sub3: ["About", "/#About"],
      sub4: ["Blog", "/#"],
      sub5: ["Get In Touch", "/#Get-In-Touch"],
    },
    {
      title: "Need Help?",
      sub1: ["Faqs", "#"],
      sub2: ["Privacy", "#"],
      sub3: ["Policy", "#"],
      sub4: ["Support", "#"],
      sub5: ["Terms", "#"],
    },
    {
      title: "Contact",
      sub1: ["Facebook", "https://www.facebook.com/tronovincentcarlos"],
      sub2: [
        "LinkedIn",
        "https://www.linkedin.com/in/vincent-trono-668462191/",
      ],
      sub3: ["Email", "mailto:trono.vincentcii@gmail.com"],
      sub4: ["Instagram", "https://www.instagram.com/vinctrn/"],
      sub5: ["Github", "https://github.com/VincentCarlosTrono"],
    },
  ];
  return (
    <footer className="grid-container bg-FooterBg mt-24 bg-bottom bg-no-repeat bg-cover">
      <main className="col-start-2 col-end-3 flex w-full justify-between  ">
        <div className="w-4/12">
          <div className="flex items-center -ml-1">
            <Image src={"/media/logo.png"} width={50} height={30} alt="logo" />
            <h1 className="text-darkBlue font-bold  text-2xl">Vince</h1>
          </div>
          <p>Vincent Carlos Trono</p>
          <p>Front end Developer</p>

          <br />
          <p>
            <strong>Phone :</strong> +639 389 916 831
          </p>
          <p>
            <strong>Email :</strong> trono.vincentcii@gmail.com
          </p>
        </div>
        <div className="flex md:flex-row w-8/12 flex-col justify-between md:items-end">
          {footerLink.map(({ title, sub1, sub2, sub3, sub4, sub5 }, index) => (
            <div className="mb-10 mr-10 " key={index}>
              <h1 className="mb-5 text-xl font-semibold text-darkBlue ">
                {title}
              </h1>
              <Link href={sub1[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 text-sm hover:text-lightBlue">{sub1[0]}</p>
                </a>
              </Link>
              <Link href={sub2[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 text-sm hover:text-lightBlue">{sub2[0]}</p>
                </a>
              </Link>
              <Link href={sub3[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 text-sm hover:text-lightBlue">{sub3[0]}</p>
                </a>
              </Link>
              <Link href={sub4[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 text-sm hover:text-lightBlue">{sub4[0]}</p>
                </a>
              </Link>
              <Link href={sub5[1]}>
                <a
                  target={title === "Contact" ? "_blank" : "undefined"}
                  rel="noopener"
                >
                  <p className="mb-2 text-sm hover:text-lightBlue">{sub5[0]}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <div className="col-start-2 col-end-3 py-4 text-gray-600 text-sm flex justify-between border-t">
        <p>Copyright © {date.getFullYear()}</p>
        <p>Vincent Trono All right reserved</p>
      </div>
    </footer>
  );
}
