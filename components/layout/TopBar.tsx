"use client"

import { UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navLinks } from "@/lib/constants";

const TopBar = () => {
  
  const [dropdownMenu, setDropdownMenu] = useState(false);
  
  const pathname = usePathname();

  return (
    <div className="bg-[#323434] sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <h1 className="text-red-600 font-extrabold text-lg">Hyper-Cart</h1>

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathname === link.url ? "text-white" : "text-neutral-500"}`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4 items-center text-white">
        <Menu
          className="cursor-pointer md:hidden"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className="absolute top-10 right-6 flex flex-col gap-8 p-5 bg-[#121212] shadow-xl rounded-lg">
            {navLinks.map((link) => (
              <Link
                onClick={() => setDropdownMenu(!dropdownMenu)}
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-medium text-neutral-500"
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;