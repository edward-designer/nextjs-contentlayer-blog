import Image from "next/image";

import profileCharacter from "@/public/edward1.jpg";
import Skills from "./Skills";

const AboutCoverSection = () => {
  return (
    <>
      <section className="w-full h-[75vh] flex flex-row items-center justify-center text-dark">
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <Image
            src={profileCharacter}
            alt="edward"
            className="w-full h-full object-cover object-center"
            fill
          />
        </div>
        <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
          <h2 className="font-bold capitalize text-6xl leading-[1.1em] mb-4">
            Dream Big, Enjoy Work, Learn More!
          </h2>
          <p className="text-base font-in">
            {`This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.`.toLowerCase()}
          </p>
        </div>
      </section>
      <Skills />
    </>
  );
};
export default AboutCoverSection;
