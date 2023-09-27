import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import { siteMetaData } from "@/src/utils/siteMetaData";

const title = "Let's talk";
const description = "edward loves hearing from YOU!";
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${siteMetaData.siteUrl}/blogs`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const Contact = () => {
  return (
    <section className="w-full md:h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="inline-block md:w-2/5 dark:bg-light/10">
        <LottieAnimation />
      </div>
      <div className="md:w-3/5 flex flex-col items-start justify-center p-4 md:px-16 pt-8 pb-8">
        <h2 className="text-4xl">Let's Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
