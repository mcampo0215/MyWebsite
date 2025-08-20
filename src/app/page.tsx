"use client"
import * as React from "react";
import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Github, Linkedin, ExternalLink, Code, Database, Smartphone, BarChart2Icon } from "lucide-react";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { SiReact, SiSpringboot, SiNextdotjs, SiJavascript, SiPython, SiTypescript, SiPostgresql, SiFirebase} from "react-icons/si";
import { IconType } from "react-icons";

type TechItem={name: string; Icon: React.ComponentType<{className?: string}>};
const TECH: Record<string, TechItem[]>={
  "Frameworks": [
    {name: "React Native", Icon: SiReact},
    {name: "Next.js", Icon: SiNextdotjs},
  ],
  "Languages": [
    {name: "Java", Icon: SiJavascript},
    {name: "Python", Icon: SiPython},
    {name: "Typescript", Icon: SiTypescript},
  ],
  "Backend": [
    {name: "Spring Boot", Icon: SiSpringboot},
    {name: "PostgreSQL", Icon: SiPostgresql},
    {name: "Firebase", Icon: SiFirebase},
  ],
}
function TechGrid() {
  return(
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid gap-8">
        {Object.entries(TECH).map(([group, items]) => (
          <div key={group} className="text-center">
            <h3 className="mb-4 text-lg font-semibold font text-white/90">{group}</h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {items.map(({name, Icon}) => (
                <li key={name}>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-5 hover:bg-white/10 hover:border-white/20 transition"
                  title={name}
                  aria-label={name}>
                    <Icon className="w-8 h-8 mb-2"></Icon>
                    <span className="text-sm text-gray-200">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export default function Page() {
  const projects = [
    {
      title: "Algorithm Visualization",
      description:"An algorithm visualization tool used to visualize a brute force soution and optimized solution. Can help students to better visualize and understand the importance of time complexity.",
      tech: ["Java", "p5.js"],
      url: "https://github.com/mcampo0215/AlgoVisualization",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Page Rank & Markov",
      description:"Simple simulation of PageRank using markov chains. Contains a simple but effective UI with statistics and a graph to better understand how markov chains work.",
      tech: ["React Native", "Javascript", "Spring Boot", "Java"],
      url: "https://github.com/mcampo0215/MarkovChains",
      icon: <BarChart2Icon className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "User Authentication",
      description:"User authenitcation system containing registration and login features, along with JWT and email verification. Used Next.js for a seamless user experience and connected to a Spring Boot backend.",
      tech: ["Next.js", "Java", "Spring Boot", "Typescript", "PostgreSQL", "Postman"],
      url: "https://github.com/mcampo0215/UserAuthentication",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Penalty Kick Analyzer",
      description:"UI that allows users to input a video file of them taking a penalty kick, along with an AI generated tip on how to improve shot accuracy. Additionally includes user authentication features for security.",
      tech: ["Next.js", "Typescript", "Java", "Spring Boot", "Python", "PostgreSQL", "Postman"],
      url: "https://github.com/mcampo0215/Penalty-Kick-Analyzer",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900/95 to-black/95 p-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Card className="flex flex-col bg-gradient-to-r from-white via-violet-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent animate-text-shimmer bg-[length:300%_300%] ">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-70 pointer-events-none" />

          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold mb-4 font-serif bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Matthew Campoverde
            </CardTitle>
            <CardDescription className="flex justify-center mt-2">
              <div className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-300">
                CS Student @ NYIT
              </div>
            </CardDescription>
            <div className="mt-6 text-center text-gray-400 text-sm animate-pulse-slow font-serif">
              <TypingAnimation className="font-mono text-sm #0d0d0d, #595959, #c0c0c0, #f5f5f5"
              duration={65}>Hi! My name is Matthew and I am an aspiring software engineer
              studying Computer Science at NYIT. I have gained my experience so
              far building projects using React Native & Next.js, in addition to
              working with several backend services such as Spring Boot,
              Firebase, and PostgreSQL. I have different side projects as well that
              can be accessible below.</TypingAnimation>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto flex justify-center items-center gap-6 px-6 pb-6 z-10">
            <a
              href="https://github.com/mcampo0215"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-6 h-6 text-white group-hover/icon:text-blue-300 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/matthew-campoverde-aa4bb4256"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-6 h-6 text-white group-hover/icon:text-blue-300 transition-colors duration-300" />
            </a>
          </CardFooter>
        </Card>
      </div>

      <hr className="w-full max-w-5xl my-8 border-t border-white/20" />
      <section
        id="projects"
        className="w-full max-w-7xl text-white flex flex-col items-center"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-serif bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills as an aspiring software engineer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  <TypingAnimation className="font-mono text-sm #0d0d0d, #595959, #c0c0c0, #f5f5f5"
              duration={65}>{project.description}</TypingAnimation>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 group/btn"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
        {/* Code for Tech Stacks */}
        <hr className="w-full max-w-5xl my-8 border-t border-white/20"/>
        <section className="w-full max-w-7xl mx-auto px-4 mt-16 text-white text-center"></section>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-serif bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">All my curent technologies used.</p>
        </div>
        <TechGrid></TechGrid>
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Explore more of my work here!
          </p>
          <a
            href="https://github.com/mcampo0215"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </div>
  );
}
