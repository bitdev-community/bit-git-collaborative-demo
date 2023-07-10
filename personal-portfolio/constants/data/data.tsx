import React from "react";
import { Logo } from "@showoff/design.brand.logo";
import { HeaderProps } from "@showoff/design.navigation.header";
import { FooterProps } from "@showoff/design.navigation.footer";
import { IconsProps } from "@showoff/personal-portfolio.ui.social.icons";
import { History as HistoryEntity } from "@showoff/personal-portfolio.entities.history";
import { AboutPageProps } from "@showoff/personal-portfolio.pages.about-page";
import { Project } from "@showoff/personal-portfolio.entities.project";

const PERSON_IMAGE = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";


export const CONTACT_ME_API_URL = "";

export const USER_PROFILE = {
  name: "Tobias Sundberg",
  bio: "Frontend developer, UX architect and Javascript engineer, Photochromic Lens enthusiast, practicing minimalist, and Pop Music & Jazz lover in search of flow.",
  tagline: "CREATIVE DEVELOPER WEB DESIGNER",
  imageUrl: PERSON_IMAGE,
  email: "Tobiassundberg@gmail.com"
}

export const ABOUT_ME: AboutPageProps = {
  headingText: "I’m Tobias Sundberg, a Creative web developer UX Engineer and a designOps. Working remotely from sunny Dublin, Ireland",
  body: {
    para1: "I’ve spent the past 12+ years working across different areas of digital design; front-end development, email design, marketing site pages, app UI/UX, to my current role designing products for mobile platforms.",
    para2: "These days my time is spent researching, designing, prototyping, and coding. I also help designers get started with their careers.",
    para3: "Out of the office you’ll find me dreaming of soccer, playing bass guitar, and petting all the good dogs."
  },
  avatarUrl: PERSON_IMAGE,
  cvLink: "https://enlear.com",
  history: [
    new HistoryEntity({
      designation: 'Software Engineer',
      company: 'ABC Company',
      yearsOfExperience: 3,
      period: '2019 - Present',
    }),
    new HistoryEntity({
      designation: 'Senior Software Engineer',
      company: 'ABC Company',
      yearsOfExperience: 3,
      period: '2019 - Present',
    }),
    new HistoryEntity({
      designation: 'Associate Technical Lead',
      company: 'ABC Company',
      yearsOfExperience: 5,
      period: '2020 - 2021',
    }),
  ]
}

export const PROJECTS: Project[] = [
  new Project({
    id: '1',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'component-based',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
    componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66'
  }),
  new Project({
    id: '2',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'component-based',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
    componentId: 'showoff.personal-portfolio/apps/portfolio@0.0.66'
  }),
  new Project({
    id: '3',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'monolithic',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
  }),
  new Project({
    id: '4',
    description: 'An E-commerce Application For Buying Cotton Products.',
    image: 'https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60',
    name: 'Project name',
    tags: ['React', 'Redux', 'Typescript', 'Node', 'Express', 'MongoDB'],
    type: 'monolithic',
    links: {
      github: 'https://github.com',
      website: 'https://github.com',
      bit: 'https://github.com',
    },
  })
];

export const HEADER_LINKS: HeaderProps = {
  logo: <Logo />,
  navLinks: [
    { label: 'Projects', url: '/projects' },
    { label: 'Contact', url: '/contact' },
    { label: 'About me', url: '/about' },
  ]
}

export const FOOTER_META: FooterProps = {
  leftContent: 'Thanks for visiting.',
  rightContent: `© ${new Date().getFullYear()} Ober. All Rights Reserved.`
}

export const SOCIAL_LINKS: IconsProps = {
  links: [
    { name: 'github', url: 'https://github.com' },
    { name: 'linkedin', url: 'https://linkedin.com' },
    { name: 'twitter', url: 'https://twitter.com' },
    { name: 'website', url: 'https://enlear.com' },
  ]
}