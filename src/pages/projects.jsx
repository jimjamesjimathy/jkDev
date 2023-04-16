import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
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
    <article className="w-full flex items-center justify-between rounded-3xl border border-tertiary bg-fourthLight dark:bg-sixth shadow-about p-12">
      <PageTransition />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-fourthLight text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl ">{title}</h2>
        </Link>
        <p className="my-2 font-meduim">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-sm bg-tertiary text-white py-1 px-6 text-lg"
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
    <article className="w-full h-full flex flex-col items-center justify-center rounded-2xl border border-tertiary bg-sixth dark:bg-fourthLight shadow-about p-6 relative">
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.35 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-fourthLight text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl ">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} target="_blank" className="ml-4 text-lg">
            Demo
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="p-16">
          <AnimatedText
            text="What I've been working on"
            className="mb-8 text-[5vw] font-light"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-12">
            <div className="col-span-12">
              <FeaturedProject
                title="Restauraunt Site"
                img={literary}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://restaurant-site-one.vercel.app/"
                github="https://github.com/jimjamesjimathy/LIT"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Hotel Booking Site"
                img={hotelApp}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://github.com/jimjamesjimathy/hotelBooking-fullstack"
                github="https://github.com/jimjamesjimathy/hotelBooking-fullstack"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Social Media App"
                img={instaJam}
                summary="Web application that enables users to search for hotels in a specific city, choose amount of adults / children, view hotel images and finally book the room. The site also has an administrative dashboad for performing CRUD operations for new hotels."
                link="https://github.com/jimjamesjimathy/instaJam"
                github="https://github.com/jimjamesjimathy/instaJam"
              />
            </div>
            <div className="col-span-12">
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
