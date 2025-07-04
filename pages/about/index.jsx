import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiNetlify,
  SiGithub,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [FaJs, SiTypescript],
      },
      {
        title: "Web Technologies",
        icons: [
          SiNextdotjs,
          FaReact,
          FaHtml5,
          FaCss3,
          SiTailwindcss,
          FaBootstrap,
          SiJquery,
        ],
      },
      {
        title: "Tools & Platforms",
        icons: [SiGithub, SiNetlify],
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "JavaScript Projects – Great Learning",
        stage: "2024",
      },
      {
        title: "Developer and Technology Job Simulation - Accenture UK",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "React.js Developer Intern - WebSenor, Udaipur",
        stage: "January 24, 2025 – April 24, 2025",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title:
          "Master of Computer Application (MCA) - Bharati Vidyapeeth Deemed University, Pune",
        stage: "2025 – 2027 (Ongoing)",
      },
      {
        title:
          "Bachelor of Science (B.Sc.) - Pandit Deendayal Upadhyaya Shekhawati University, Sikar, Rajasthan",
        stage: "2020 – 2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Passionate about{" "}
            <span className="text-accent">creating</span> exceptional user
            experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm a motivated and detail-oriented software developer with
            practical experience in front-end web development and UI design. I
            specialize in building responsive, user-friendly interfaces using
            modern technologies including React.js, Next.js, TypeScript, and
            Tailwind CSS.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  months of experience as a React.js Developer.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Completed projects.
                </div>
              </div>

              {/* technologies */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Technologies mastered.
                </div>
              </div>

              {/* certifications */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certifications earned.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                role="button"
                tabIndex={0}
                onClick={() => setIndex(itemI)}
                onKeyDown={(e) => e.key === "Enter" && setIndex(itemI)}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                {item.stage && <div className="hidden md:flex">-</div>}
                {item.stage && <div>{item.stage}</div>}

                {/* icons */}
                {item.icons && (
                  <div className="flex gap-x-4">
                    {item.icons.map((Icon, iconI) => (
                      <div key={iconI} className="text-2xl text-white">
                        <Icon />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
