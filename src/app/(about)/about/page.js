import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import { siteMetaData } from "@/src/utils/siteMetaData";

const title = "About edward-designer";
const description =
  "edward loves web development and is there to create amazing websites and apps";
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

const About = () => {
  return <AboutCoverSection />;
};

export default About;
