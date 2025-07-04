import { motion } from "framer-motion";
import Head from "next/head";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Mohit Kalal - Frontend Developer & UI Designer</title>
        <meta
          name="description"
          content="Mohit Kalal is a motivated Frontend Developer and UI Designer skilled in React.js, Next.js, Tailwind CSS, and TypeScript. Explore his work and projects here."
        />
        <meta
          name="keywords"
          content="Mohit Kalal, Frontend Developer, UI Designer, React.js, Next.js, Tailwind CSS, TypeScript, Web Development, Portfolio"
        />
        <meta name="author" content="Mohit Kalal" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mohit Kalal - Frontend Developer & UI Designer" />
        <meta
          property="og:description"
          content="Explore the professional portfolio of Mohit Kalal, a passionate frontend developer from Udaipur specializing in React, Tailwind, and modern UI design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mohitkalal.netlify.app" />
        <meta property="og:image" content="/images/mohit-kalal-profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohit Kalal - Frontend Developer & UI Designer" />
        <meta
          name="twitter:description"
          content="Discover Mohit Kalal's frontend projects and expertise in modern web technologies like React and Tailwind CSS."
        />
        <meta name="twitter:image" content="/images/mohit-kalal-profile.jpg" />
      </Head>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mohit Kalal",
            jobTitle: "Frontend Developer & UI Designer",
            description:
              "Motivated and detail-oriented software developer with experience in building responsive and user-friendly interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
            url: "https://mohitkalal.vercel.app",
            image: "/images/mohit-kalal-profile.jpg",
            sameAs: [
              "https://www.linkedin.com/in/mohit-kalal-389521217",
              "https://github.com/mohitkalal01",
              "mailto:kalalmohit003@gmail.com"
            ],
          }),
        }}
      />

      <main className="bg-primary/60 h-full relative overflow-hidden">
        <section
          className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
          aria-label="Introduction section"
        >
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6"
            >
              Hi, I'm <span className="text-accent">Mohit Kalal</span>
              <br />
              Frontend Developer & <span className="text-accent">UI Designer</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-base md:text-lg xl:text-xl max-w-2xl text-white mb-10 xl:mb-16"
            >
              Motivated and detail-oriented software developer with hands-on experience in building
              responsive web applications. Skilled in React.js, Next.js, TypeScript, and Tailwind CSS.
              Passionate about creating user-friendly and accessible interfaces.
            </motion.p>

            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </section>

        {/* Avatar & Background */}
        <section className="w-full h-full absolute inset-0" aria-hidden="true">
          <div
            role="presentation"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          />

          <ParticlesContainer />

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar alt="Mohit Kalal profile image" />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
