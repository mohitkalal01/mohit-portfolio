import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// Setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Mohit Kalal | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Mohit Kalal, a skilled Frontend Developer and UI Designer specializing in React.js, Next.js, TypeScript, and Tailwind CSS. Explore projects showcasing modern web development and UI/UX design."
        />
        <meta
          name="keywords"
          content="Mohit Kalal, Frontend Developer, UI Designer, React.js, Next.js, TypeScript, Tailwind CSS, JavaScript, modern web development, portfolio, Framer Motion, UI/UX design"
        />
        <meta name="author" content="Mohit Kalal" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#f13024" />
        <meta property="og:title" content="Mohit Kalal | Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Discover Mohit Kalal's portfolio, featuring projects built with React.js, Next.js, TypeScript, and Tailwind CSS, showcasing expertise in frontend development and UI design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mohitkalal.com" /> {/* Update with actual URL */}
        <meta property="og:image" content="/images/mohit-kalal-profile.jpg" /> {/* Update with actual image path */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohit Kalal | Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Mohit Kalal's frontend development and UI design projects built with modern technologies like React.js and Next.js."
        />
        <meta name="twitter:image" content="/images/mohit-kalal-profile.jpg" /> {/* Update with actual image path */}
      </Head>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Mohit Kalal Portfolio",
            url: "https://www.mohitkalal.com", // Update with actual URL
            description:
              "Portfolio of Mohit Kalal, a Frontend Developer and UI Designer proficient in React.js, Next.js, TypeScript, and Tailwind CSS.",
            author: {
              "@type": "Person",
              name: "Mohit Kalal",
              url: "https://www.mohitkalal.com", // Update with actual URL
              sameAs: [
                "https://www.linkedin.com/in/mohit-kalal", // Update with actual LinkedIn URL
                "https://github.com/mohitkalal", // Update with actual GitHub URL
                "https://twitter.com/mohitkalal", // Update with actual Twitter URL
              ],
            },
          }),
        }}
      />

      <main
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
        aria-label="Main content"
      >
        <TopLeftImg />
        <Nav />
        <Header />

        {/* Main content */}
        {children}
      </main>
    </>
  );
};

export default Layout;