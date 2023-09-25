import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row gap-4 items-center">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileImg}
          alt="profile image"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span>Edblog</span>
    </Link>
  );
};

export default Logo;
