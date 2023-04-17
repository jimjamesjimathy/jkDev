import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import hero from "../../public/assets/profile/hero.png";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_89ktqkq",
        "template_mk93h4p",
        {
          from_name: form.name,
          to_name: "James Kirkwood",
          from_email: form.email,
          to_email: "jameskwebdev@gmail.com",
          message: form.message,
        },
        "h24P0qTU2K_gGpymq"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out! I will get back to you at my earliest convenience"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Uh oh! Something went wrong.");
        }
      );
  };

  return (
    <>
      <Head>
        <title>Jk || Dev - About</title>
        <meta name="description" content="any description" />
      </Head>
      <PageTransition />
      <main>
        <Layout className="flex lg:flex-col justify-center min-h-[91vh] gap-20 xlg:gap-8 px-24 py-12 xs:px-6">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 min-h-full gap-8 p-12 bg-secondary dark:bg-fourthLight rounded-2xl shadow-about shadow-black-200"
          >
            <AnimatedText
              text="Contact"
              className="sm:text-[12vw] lg:text-[9vw] text-[6vw] font-light justify-center"
            />
            <label className="flex flex-col items-center">
              <span className="w-full mb-4 font-medium text-white">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="w-full px-6 py-4 font-medium text-white bg-white border-none rounded-lg outline-none placeholder:text-secondary"
              />
            </label>

            <label className="flex flex-col items-center">
              <span className="w-full mb-4 font-medium text-white">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="w-full px-6 py-4 font-medium text-white bg-white border-none rounded-lg outline-none placeholder:text-secondary"
              />
            </label>

            <label className="flex flex-col items-center">
              <span className="w-full mb-4 font-medium text-white">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What can I help you with?"
                className="w-full px-6 py-4 font-medium text-white bg-white border-none rounded-lg outline-none placeholder:text-secondary"
              />
            </label>
            <button
              className="w-full px-8 py-3 mx-auto font-normal shadow-sm outline-none bg-sixthLight text-black-200 rounded-xl shadow-black-200"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div className="flex flex-col items-center justify-center flex-1 min-h-full gap-8 rounded-2xl bg-secondary dark:bg-fourthLight shadow-about shadow-black-200">
            <Image src={hero} alt="tree" className="object-cover w-5/6 p-2" />
            <div className="flex flex-col items-center justify-center gap-2 text-center text-white ">
              <h2 className="text-5xl font-light">James Kirkwood</h2>
              <h2 className="text-2xl">Full Stack Developer</h2>
              <p className="pb-8">
                Available for Fulltime, Contract, or Freelance
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
