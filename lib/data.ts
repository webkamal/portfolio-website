import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import personalsiteImg from "@/public/personal-site.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Stanmore",
    description:
      "I built websites for many clients using wordpress, woocommerce, opencart. I also helped with maintenance of emails, websites and hosting.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "Web Developer / SEO Specialist",
    location: "Bankstown",
    description:
      "I rebuilt 3 websites of the company in wordpress and worked hard to get the sites on top of Google.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Freelane Web Developer",
    location: "Sydney",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, MERN and WordPress. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Site",
    description:
      "Built using Next.js 13, Next.js Server Actions, Client & Server Components, Context API, React.Email & Resend",
    tags: ["Next.js", "App Router", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: personalsiteImg,
  },
  {
    title: "Job Borad",
    description:
      "Job board built for remote developer jobs with Next.js react farmework. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "App Touter", "Server Actions"],
    imageUrl: rmtdevImg,
  },
  {
    title: "WP to React",
    description:
      "Creating Tools for migrating WordPress to React. This project is still on development.",
    tags: ["Next.js", "Supabase", "Next.js Auth", "App Router"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "PostgreSQL",
  "WordPress"
  "Framer Motion",
  "Supabase"
] as const;
