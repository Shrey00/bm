import React from "react";

const logos = [
  "/kent-logo.png",
  "/apollo-logo.png",
  "/dar-logo.png",
  "/jaggery-logo.png",
  "/eco-logo.png",
  "/angreji-logo.png",
  "/mscit-logo.png",
];

export default function TrustedPartnersCarousel() {
  return (
    <section className="py-12 bg-black" id="trusted-partners">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-white text-2xl font-semibold mb-6">
          Trusted Partners of Market Leaders in India
        </h3>

        <div className="relative overflow-hidden">
          {/* Carousel track */}
          <div className="flex animate-scroll gap-12">
            {/* Repeat logos for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-16 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
