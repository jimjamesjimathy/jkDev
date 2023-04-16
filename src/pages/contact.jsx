import AnimatedText from "@/components/AnimatedText";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import contact from "../../public/assets/pages/contact.jpg";

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
      <main className="flex w-full flex-col items-center justify-center overflow-x-hidden SKILLS">
        <Layout className="mt-12 mb-6 px-12 min-h-full flex">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col gap-8 p-12 bg-secondary h-full rounded-2xl shadow-about shadow-black-200"
          >
            <AnimatedText
              text="Contact"
              className="sm:text-[12vw] lg:text-[9vw] text-[7vw] font-light justify-center"
            />
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What can I help you with?"
                className="bg-white py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              className="bg-sixthLight py-3 px-8 outline-none w-full text-black-200 font-normal rounded-xl shadow-sm shadow-black-200"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          <div className="flex-1 h-full flex items-center justify-center">
            <div className="p-6 flex items-center  justify-center rounded-2xl bg-secondary shadow-about shadow-tertiary">
              <Image
                src={contact}
                height={700}
                width={500}
                alt="tree"
                className="rounded-2xl object-bottom"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
