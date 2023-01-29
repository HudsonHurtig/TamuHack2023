import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects3 from '../components/Projects3'
import  Projects2 from '../components/Projects2'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Link from 'next/link'
import { Experience, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
import React, { useEffect,useState } from 'react';
import ContactMe from '../components/ContactMe'


type Props = {
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}
const Home = ({ experiences, projects, skills, socials }: Props) => {
  const [bgColor, setBgColor] = useState('#333333');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setBgColor('#333333');
    } else if (scrollY >= 100 && scrollY < 200) {
      setBgColor('#3A3A3A');
    } else {
      setBgColor('#444444');
    }
  }
  return (
    <div className="bg-[#0a192f] text-white h-screen  snap-y snap-proximity
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin  scrollbar-thumb-[#a8b2d1]/40">
      <Head>
        <title>Portfolio Risk Optimizer</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Projects */}
        <section id="projects1" className="snap-start">
        <Projects2 projects={projects} />
      </section>
            {/* Projects */}
            <section id="projects2" className="snap-start">
        <Projects3 projects={projects} />
      </section>
            {/* Contact Me */}
            <section id="contactme" className="snap-start">
        <ContactMe/>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 100,
  };
}



