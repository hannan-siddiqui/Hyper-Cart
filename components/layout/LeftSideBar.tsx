"use client";

import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-gray-600 shadow-xl max-lg:hidden">
      {/* <Image src="/logo.png" alt="logo" width={150} height={70} /> */}

      <div><h1 className="text-4xl text-red-600 font-extrabold">HyperCart</h1></div>

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex items-center gap-4 text-2xl font-semibold text-body-medium hover:text-blue-400 ${
              pathname === link.url ? "text-blue-500" : "text-gray-300"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>


      <div className="flex text-2xl font-semibold gap-4 text-body-medium items-center">
        <UserButton />
        <p>Edit Profile</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
