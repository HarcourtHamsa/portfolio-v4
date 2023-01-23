import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

function Projects() {
  return (
    <div>
      <main>
        <Navbar />

        <h2>Projects</h2>
        <p>
          Here&apos;s a list of some projects I&apos;ve made. Many of the
          projects are supplements to blog posts I wrote, while others were for
          learning, personal use, or fun.
        </p>

        <div>
          <h3>Agrocist</h3>
          <p>
            Agrocist is a agro-tech startup that supercharges your agribusiness
            using data and AI technology.
          </p>

          <ul>
            <li>
              <Link href={"https://agrocist.com/"} target={"_blank"}>
                Agrocist
              </Link>{" "}
            </li>
            <li>
              <Link href={"https://expert.agrocist.com/"} target={"_blank"}>
                Agrocist For Expers
              </Link>{" "}
            </li>
            <li>
              <Link href={"https://business.agrocist.com/"} target={"_blank"}>
                Agrocist For B2B
              </Link>{" "}
            </li>
            <li>
              <Link href={"https://disease.agrocist.com/"} target={"_blank"}>
                Agrocist Disease Intelligence
              </Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3>Favour Princewill</h3>
          <p>
            This is a portfolio website for a User Interface Designer who is in
            the business of designing the best digital experiences for users.
          </p>
          <Link
            href={"https://princewillmenuchimzi.netlify.app/"}
            target={"_blank"}
          >
            Vist Website
          </Link>{" "}
        </div>

        <div>
          <h3>Cryptoverse</h3>
          <p>
           Cryptoverse is a Defi platform built for exploration purposes
          </p>
          <Link
            href={"https://www.internotchtrade.com/"}
            target={"_blank"}
          >
            Vist Website
          </Link>{" "}
        </div>

        <div>
          <h3>Google Keep Clone</h3>
          <p>
            This is a google keep clone built for a JAMStack hackathon using
            Contentful CMS and Next.js
          </p>
          <Link
            href={"https://google-keep-clone-nu.vercel.app/"}
            target={"_blank"}
          >
            Vist Website
          </Link>{" "}
        </div>
      </main>
    </div>
  );
}

export default Projects;
