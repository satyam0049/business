

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  Code,
  Feather,
  Briefcase,
  GraduationCap,
  Sparkles,
  Star,
} from "lucide-react";

const FloatingCard = ({ icon, title, desc, bg }) => (
  <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
    <div
      className={`backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/10 rounded-2xl p-6 shadow-xl transition hover:shadow-2xl ${bg}`}
    >
      <div className="flex items-center gap-3 mb-3 text-indigo-600 dark:text-indigo-400">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 lg:px-20 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-black dark:via-gray-900 dark:to-gray-800"
    >
      {/* Background Sparkles */}
      <Sparkles className="absolute top-10 right-10 text-indigo-200 dark:text-indigo-900 opacity-10 w-40 h-40 animate-pulse" />
      <Sparkles className="absolute bottom-10 left-10 text-purple-300 dark:text-purple-900 opacity-10 w-32 h-32 animate-ping" />

      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold text-gray-800 dark:text-white">
          Get to Know <span className="text-indigo-600">Me</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Passionate frontend developer blending design and code to create seamless digital experiences.
        </p>
      </div>

      {/* Floating Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        <FloatingCard
          icon={<Feather className="w-6 h-6" />}
          title="UI/UX Design"
          desc="Crafting visually engaging and intuitive interfaces tailored for user delight."
        />
        <FloatingCard
          icon={<Code className="w-6 h-6" />}
          title="Frontend Magic"
          desc="React, Tailwind, Framer Motion — I turn concepts into performant applications."
        />
        <FloatingCard
          icon={<Star className="w-6 h-6" />}
          title="Creative Projects"
          desc="Working on personal innovations like auction systems, dashboards, and more."
        />
      </div>

      {/* Profile & Tabs */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="text-left">
          <img
            src="./my.jpeg"
            alt="Satyam"
            className="rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700 w-72 h-72 object-cover mx-auto mb-6"
          />
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            I'm Satyam, a frontend craftsman with 1+ years of experience building polished, performant interfaces. From React dashboards to auction platforms, I love transforming ideas into reality.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Let’s Collaborate
          </a>
        </div>

        {/* Tabs: Education & Experience */}
        <div>
          <Tabs>
            <TabList className="flex gap-4 mb-6">
              <Tab className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-gray-700">
                <GraduationCap className="inline w-5 h-5 mr-1" /> Education
              </Tab>
              <Tab className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-indigo-100 dark:hover:bg-gray-700">
                <Briefcase className="inline w-5 h-5 mr-1" /> Experience
              </Tab>
            </TabList>

            <TabPanel>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400">BCA - Computer Applications</h4>
                  <p className="text-gray-500 dark:text-gray-400">Shivaji University | 2023 - 2025</p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400">Frontend Certifications</h4>
                  <p className="text-gray-500 dark:text-gray-400">Jijau Software,Satara | Ongoing</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400">Frontend Developer</h4>
                  <p className="text-gray-500 dark:text-gray-400">Freelance & Projects | 2022 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built elegant interfaces using React, Tailwind, Zustand, and API integration.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-400">Web Dev Intern</h4>
                  <p className="text-gray-500 dark:text-gray-400">CodeCraft Labs | 2021 - 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed responsive admin panels with Bootstrap and jQuery.
                  </p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>


     {/* Skills Section */}
<div className="mt-24">
  <h3 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
    <bold className="text-purple-600">My</bold> Skills*
  </h3><br/>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
    {[
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Tailwind", level: 88 },
      { name: "Router", level: 80 },
      { name: "Framer Motion", level: 75 },
    ].map((skill, index) => (
      <Tilt key={index} glareEnable={true} glareMaxOpacity={0.15} scale={1.03}>
        <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/10 rounded-2xl p-4 shadow-md hover:shadow-lg transition">
          <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
            {skill.name}
          </h4>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {skill.level}%
          </p>
        </div>
      </Tilt>
    ))}
  </div>
</div>


    </section>
  );
};

export default About;
