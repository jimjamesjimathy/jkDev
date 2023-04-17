import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import about from "../../public/assets/pages/about.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Jk || Dev - About</title>
        <meta name="description" content="any description" />
      </Head>
      <PageTransition />
      <main className="flex flex-col items-center justify-center w-full overflow-x-hidden SKILLS">
        <Layout className="min-h-full px-12 pt-16">
          <div className="flex w-full h-full ">
            <div className="flex-[2] flex flex-col w-full justify-center text-center px-8 xmd:px-0 xl:mt-24">
              <AnimatedText
                text="About Me"
                className="sm:text-[12vw] lg:text-[9vw] text-[7vw] justify-center font-light mb-8 mt-[-1em]"
              />
              <h2 className="text-2xl font-normal text-black-200 dark:text-white">
                My name is{" "}
                <span className="font-bold">James Alan Mikal Kirkwood</span>
              </h2>
              <p className="my-4 font-semibold text-black-200 dark:text-white">
                I am a full-stack Software Developer{" "}
                <span className="italic text-fourth dark:text-fifthLight">
                  specializing in Front End Web Developement.
                </span>{" "}
                <br />I am a self-motivated and highly reliable full-stack
                developer positioned to contribute strongly to web developer
                operations demanding tact, enthusiasm, and an exemplary work
                ethic.
              </p>
              <p className="block font-medium sm:hidden text-black-200 dark:text-white">
                I am originally from San Marcos, TX, but I currently reside in
                Lakewood, OH. I have my sights set on moving to Seattle, WA.
                Outside of the coding world I like to keep busy. I play 5
                instruments, write, record and produce my own music. I also have
                become fond of making comedy skits and doing my best to make
                people laugh. Everyone I know calls me a dad without kids
                because of my jokes, and I say that makes me a faux pa.
              </p>
            </div>

            <div className="relative flex-1 w-full h-full p-8 border-2 xl:hidden rounded-2xl border-tertiary bg-secondary shadow-about shadow-black-200 md:hidden">
              <Image
                src={about}
                alt="computer screen with code"
                className="object-cover w-full h-full border-2 rounded-2xl border-tertiary"
                priority
              />
            </div>

            <div className="xmd:hidden flex-[.75] flex flex-col items-end justify-evenly">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl text-fourth dark:text-secondary">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl italic font-normal text-secondary dark:text-gray-100">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl text-fourth dark:text-secondary">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl italic font-normal text-secondary dark:text-gray-100">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl text-fourth dark:text-secondary">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl italic font-normal text-secondary dark:text-gray-100">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default About;
