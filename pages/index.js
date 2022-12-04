import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";

function index() {
  return (
    <div>
      <Head>
        <title>Hamsa Harcourt</title>
      </Head>
      <main>
        <Navbar />
        <h1>Hi, I&apos;m Harcourt Hamsa</h1>
        <p>
          I am a detail-oriented engineer with a flair for design and a deep
          commitment to writing high-quality, performant code.
        </p>
        <p>
          I write articles about what I&apos;m learning and building on this
          blog—most of them about programming and technology. I also keep a{" "}
          <Link href={"/"}>list of software projects</Link> I&apos;ve made.
        </p>
        <p>
          I&apos;ve been building web applications since 2019 having worked on
          also relatively fast-growing startups like{" "}
          <Link href={"https://agrocist.com/"} target={"_blank"}>
            Agrocist
          </Link>{" "}
          and{" "}
          <Link href={"https://kundabox.com/"} target={"_blank"}>
            Kundabox
          </Link>
          .
        </p>

        <div className="social-links">
          <Link href={"https://twitter.com/harcourt_hamsa"} target={"_blank"}>
            [Twitter]
          </Link>
          <Link href={"https://github.com/HarcourtHamsa"} target={"_blank"}>
            [Github]
          </Link>
          <Link
            href={"https://www.linkedin.com/in/harcourt-hamsa-2b10131b6/"}
            target={"_blank"}
          >
            [LinkedIn]
          </Link>
        </div>

        <h4>--- Skills ---</h4>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>TailwindCSS / SCSS</li>
          <li>React.js / React Native</li>
          <li>Unit Tests</li>
          <li>Node</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Heroku / Vercel / Netlify</li>
        </ul>

        <h4>--- Writing ---</h4>
        <p>I try to write about technologies I find interesting.</p>

        <ul>
          <li>
            <Link href={"https://harcourt.hashnode.dev/"} target={"_blank"}>
              My Personal Blog
            </Link>
          </li>
          <li>
            <Link
              href={"https://blog.logrocket.com/author/harcourthamsa/"}
              target={"_blank"}
            >
              LogRocket
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.a11yproject.com/authors/#hamsa-harcourt"}
              target={"_blank"}
            >
              A11yProject
            </Link>
          </li>
          <li>
            <Link href={"https://medium.com/@hamsa-harcourt"} target={"_blank"}>
              Medium
            </Link>
          </li>
        </ul>

        <h4>--- Contact ---</h4>
        <p>
          You can find me on Twitter at{" "}
          <Link href={"https://twitter.com/harcourt_hamsa"} target={"_blank"}>
            @harcourt_hamsa
          </Link>{" "}
          or send me an email at{" "}
          <Link href={"mailto: harcourt.o.hamsa@gmail.com"}>
            hamsa.o.harcourt@gmail.com
          </Link>
          .
        </p>
      </main>
    </div>
  );
}

export default index;
