import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col md:flex-row md:gap-4 items-center">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileImg}
          alt="profile image"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span>Edblog</span>
    </Link>
  );
};

export default Logo;
