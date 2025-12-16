"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-[#E9FBFB]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 1️⃣ DESTINATIONS SECTION */}
        <div>
          <h3 className="text-[#2DBDB8] font-semibold text-lg mb-2">
            DESTINATION DISCOVERIES - FZCO
          </h3>
          <p className="text-sm text-gray-700">
            © 2024 Halal Travels Club. All Rights Reserved.
          </p>
        </div>

        {/* 2️⃣ CONTACT US SECTION */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Contact Us
          </h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2 text-[#2DBDB8]">
              <MdEmail />
              sales@halaltravelsclub.com
            </p>

            <p className="flex items-center gap-2 text-[#2DBDB8]">
              <BsTelephone />
              +965 91100975
            </p>
          </div>
        </div>

        {/* 3️⃣ LEGAL LINKS SECTION */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Terms & Policies
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-[#2DBDB8] hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>

            <li>
              <Link
                href="/refund-policy"
                className="text-[#2DBDB8] hover:underline"
              >
                Refund Policy
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="text-[#2DBDB8] hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* 4️⃣ FOLLOW US SECTION */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <Link
              href="#"
              className="bg-[#2DBDB8] p-3 rounded-full text-white hover:opacity-90 transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="bg-[#2DBDB8] p-3 rounded-full text-white hover:opacity-90 transition"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="bg-[#2DBDB8] p-3 rounded-full text-white hover:opacity-90 transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
