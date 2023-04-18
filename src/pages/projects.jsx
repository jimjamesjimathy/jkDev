import AnimatedText from "@/components/AnimatedText";
import { BsGithub } from "react-icons/bs";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hotelApp from "../../public/assets/projects/hotelOne.png";
import instaJam from "../../public/assets/projects/instaJam.png";
import literary from "../../public/assets/projects/literary.png";
import adminDashboard from "../../public/assets/projects/dashboard.png";

import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex items-center justify-between w-full p-12 border md:flex-col rounded-3xl border-tertiary bg-fourthLight dark:bg-sixth shadow-about md:p-4">
      <PageTransition />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer md:w-5/6"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 md:pl-0 md:w-full md:items-center md:justify-center md:text-center">
        <span className="text-xl text-fourthLight">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl text-left ">{title}</h2>
        </Link>
        <p className="my-2 font-meduim">{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <BsGithub className="text-2xl rounded-full text-black-200" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="px-6 py-1 ml-4 text-lg text-white rounded-sm bg-tertiary"
          >
            Project Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full h-full p-6 border rounded-2xl border-tertiary bg-sixth dark:bg-fourthLight shadow-about">
      <Link
        href={link}
        target="_blank"
        className="overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl text-fourthLight">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-2xl text-left ">{title}</h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link href={link} target="_blank" className="ml-4 text-lg">
            Demo
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <BsGithub className="text-2xl rounded-full text-black-200" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Jk || Dev - Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Layout className="p-16 xmd:p-0 xmd:px-4">
          <AnimatedText
            text="What I've been working on"
            className="sm:font-semibold md:text-[7vw] lg:text-[8vw] justify-center text-[5vw] font-light mb-8"
          />
          <div className="grid grid-cols-12 gap-12 xs:flex xs:flex-col xs:items-center xs:justify-center">
            <div className="col-span-full">
              <FeaturedProject
                title="Restauraunt Site"
                img={literary}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://restaurant-site-one.vercel.app/"
                github="https://github.com/jimjamesjimathy/LIT"
              />
            </div>
            <div className="col-span-6 md:col-span-full">
              <Project
                title="Hotel Booking Site"
                img={hotelApp}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://github.com/jimjamesjimathy/hotelBooking-fullstack"
                github="https://github.com/jimjamesjimathy/hotelBooking-fullstack"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 md:col-span-full">
              <Project
                title="Social Media App"
                img={instaJam}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://github.com/jimjamesjimathy/instaJam"
                github="https://github.com/jimjamesjimathy/instaJam"
              />
            </div>
            <div className="col-span-full">
              <FeaturedProject
                title="Admin Dashboard"
                img={adminDashboard}
                summary="Web application that enables Administrator to perform CRUD operations to update users/employee information as well as delete or change status of user/employee"
                link="https://admin-dashboard-umber-one.vercel.app/"
                github="https://github.com/jimjamesjimathy/admin-dashboard"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
