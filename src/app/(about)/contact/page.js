import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full h-[75vh] flex flex-row items-center justify-center text-dark">
      <div className="inline-block w-2/5 ">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="text-4xl text-dark">Let's Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
