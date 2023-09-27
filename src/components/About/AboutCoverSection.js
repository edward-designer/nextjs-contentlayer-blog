import Image from "next/image";

import profileCharacter from "@/public/edward1.jpg";
import Skills from "./Skills";

const AboutCoverSection = () => {
  return (
    <>
      <section className="w-full my-8 md:h-[75vh] flex flex-row md:items-center justify-center">
        <div className="w-1/2 md:h-full flex items-start md:items-center justify-start md:justify-center relative">
          <Image
            src={profileCharacter}
            alt="edward"
            className="w-full md:h-full object-contain md:object-cover object-center"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="w-1/2 flex flex-col text-left items-start justify-center px-4 md:px-16">
          <h2 className="font-bold capitalize text-3xl md:text-6xl leading-[1.1em] mb-4">
            Dream Big, Enjoy Work, Learn More!
          </h2>
          <p className="text-sm md:text-base font-in">
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
