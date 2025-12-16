"use client";

import Image from "next/image";

function Contactus() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
        <Image
          src="/contacthero.png"
          alt="Contact Us"
          fill
          priority
          className="object-cover object-bottom"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[52px] font-semibold leading-tight">
            Contact Us
          </h1>
          <p className="mt-2 text-xs sm:text-sm">
            Halal Travels Club &nbsp; &gt; &nbsp; Contact Us
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Need to contact us?
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-10">
          Our team is always happy to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT FORM */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              Email us
            </h3>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              Drop us an email and we’ll get back to you within 48hrs...
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full mt-1 border rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="someone@example.com"
                    className="w-full mt-1 border rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Contact Number*
                </label>
                <input
                  type="tel"
                  placeholder="01234 56789"
                  className="w-full mt-1 border rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  What's Your Message?
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full mt-1 border rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <button
                type="submit"
                className="bg-teal-400 text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-teal-500 transition w-full sm:w-auto"
              >
                More Information
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="lg:border-l lg:pl-10 space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold">
              Trip Queries
            </h3>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
              <div>
                <p className="text-gray-500">
                  Emergency Helpline
                </p>
                <p className="text-teal-500 font-semibold text-lg">
                  +965 91100975
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Contactable Hours
                </p>
                <p className="font-medium">
                  Mon–Sun: 24 Hours
                </p>
              </div>

              <div>
                <p className="text-gray-500">
                  Require information about a trip?
                </p>
                <p className="font-medium break-all">
                  Sales@Halaltravelsclub.Com
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border h-[220px] sm:h-[260px]">
              <iframe
                src="https://www.google.com/maps?q=Dubai&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
