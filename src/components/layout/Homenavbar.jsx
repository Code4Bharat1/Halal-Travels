"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Homenavbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `text-sm font-medium ${
      pathname === path ? "text-black" : "text-black/80"
    } hover:text-black`;

  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-7xl mx-auto h-[110px] px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png.svg"
            alt="Halal Travels Club"
            className="h-16 w-auto"
          />
        </div>

        {/* NAV LINKS */}
        <div className="flex items-center gap-10">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/packages" className={linkClass("/packages")}>
            Packages
          </Link>

          <Link href="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>

          {/* CENTER CONTACT BUTTON */}
          <Link
            href="/contactus"
            className="px-6 py-2 rounded-full border border-[#2DBDB8] text-black text-sm font-medium hover:bg-[#2DBDB8] hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT CONTACT BUTTON */}
        <Link
          href="/contactus"
          className="px-6 py-2 rounded-full bg-[#2DBDB8] text-white text-sm font-medium hover:opacity-90 transition"
        >
          Contact
        </Link>

      </nav>
    </header>
  );
}

export default Homenavbar;
