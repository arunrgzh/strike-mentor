// pages/About.tsx
import React, { FC, useState } from "react";
import Navbar from "../components/Navbar";
import Bg from "../assets/img/background_2.png";
import TextGenerateEffect from "../components/TextGenerate";
import FooterLogo from "../assets/img/logo.png";
const tabs = ["Characters", "Maps"] as const;
type Tab = (typeof tabs)[number];

const About: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Characters");
  const HIGHLIGHTS = new Set(["CHARACTERS", "MAPS"]);

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />

      {/* Hero / Banner */}
      <section
        className="min-h-screen relative h-64 md:h-96 bg-cover bg-center "
        style={{
          backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-center px-4 gap-6">
          <TextGenerateEffect
            wordClassName="max-w-3xl font-jersey text-xl md:text-2xl lg:text-5xl font-bold mx-auto text-center"
            words="LEARN MORE ABOUT YOUR FAVOURITE CHARACTERS AND MAPS"
            wordsCallbackClass={({ word }) =>
              HIGHLIGHTS.has(word)
                ? "bg-gradient-to-r from-[#FF9B01] to-[#D36611] bg-clip-text text-transparent"
                : ""
            }
          />

          <div className="w-full max-w-md relative mt-4">
            <input
              type="text"
              placeholder="Search..."
              className="font-poppins w-full pl-4 pr-12 py-3 rounded-lg bg-primary backdrop-blur text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400">
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Search bar */}

      {/* Tabs */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <div className="flex border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 -mb-px font-medium ${
                activeTab === tab
                  ? "font-poppins text-xl border-b-2 border-primary-orange text-white"
                  : "font-poppins text-xl text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 font-poppins mb-12">
          {activeTab === "Characters" ? (
            <div>
              {/* TODO: map over your characters data */}
              <p className="text-gray-400 font-poppins">
                Here will go a list of characters…
              </p>
            </div>
          ) : (
            <div>
              {/* TODO: map over your maps data */}
              <p className="text-gray-400 font-poppins">
                Here will go a list of maps…
              </p>
            </div>
          )}
        </div>
      </div>
      <footer className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex  items-center gap-2">
            <img
              src={FooterLogo}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-bold text-lg"></span>
          </div>

          {/* Right: Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Strike Mentor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
