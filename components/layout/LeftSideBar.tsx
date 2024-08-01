"use client";

import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-[#0f0f0f] mr-10 h-screen left-0 top-0 sticky p-10 flex flex-col gap-16  shadow-xl max-lg:hidden">
      {/* <Image src="/logo.png" alt="logo" width={150} height={70} /> */}

      <div><h1 className="text-4xl text-red-600 font-extrabold">HyperCart</h1></div>

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex items-center gap-4 text-xl rounded-lg p-2 font-semibold  hover:text-white hover:bg-[#323434] transition-all ease-in-out text-body-medium  ${
              pathname === link.url ? "text-white bg-[#323434]" : "text-neutral-500"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>


      <div className="flex text-2xl font-semibold gap-4 text-body-medium items-center text-[#555858]">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
