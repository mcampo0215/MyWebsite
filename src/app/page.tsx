import * as React from "react";
import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black p-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Card className="flex flex-col bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white ">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-70 pointer-events-none" />

          <CardHeader>
            <CardTitle className="text-center text-[30px] font-bold font-serif">
              Matthew Campoverde
            </CardTitle>
            <CardDescription className="flex justify-center mt-2">
              <div className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-300">
                CS Student @ NYIT
              </div>
            </CardDescription>
            <CardDescription className="mt-6 text-center text-gray-400 text-sm animate-pulse-slow font-serif">
              Hello! My name is Matthew and I am an aspiring software engineer
              studying computer science at NYIT. I have gained my experience so
              far building projects using React Native & Expo Go, in addition to
              working with several backend services such as Spring Boot,
              Firebase, and MySQL. I have different side projects as well that
              can be accessible below.
            </CardDescription>
          </CardHeader>

          <CardFooter className="mt-auto flex justify-center items-center gap-6 px-6 pb-6 z-10">
            {/* GitHub Icon */}
            <a
              href="https://github.com/mcampo0215"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-6 h-6 text-white group-hover/icon:text-blue-300 transition-colors duration-300" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/matthew-campoverde-aa4bb4256"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <Linkedin className="w-6 h-6 text-white group-hover/icon:text-blue-300 transition-colors duration-300"></Linkedin>
             
            </a>
          </CardFooter>
        </Card>
      </div>

      <hr className="w-full max-w-5xl my-6 border-t border-white/20" />

      <section
        id="projects"
        className="w-full max-w-6xl text-white flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold mb-6 font-serif">Projects</h2>

        <div className="flex flex-row flex-wrap justify-center gap-10 w-full px-4">
          <a
            href="https://github.com/mcampo0215/AlgoVisualization"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-[250px] cursor-pointer"
          >
            <Card className="flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:border-white/30">
              <CardTitle className="text-[20px] font-serif">
                AlgoVisualization
              </CardTitle>
            </Card>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </a>

          <a
            href="https://github.com/mcampo0215/MarkovChains"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-[250px] cursor-pointer"
          >
            <Card className="flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-whit group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:border-white/30">
              <CardTitle className="text-[20px] font-mono">
                MarkovStats
              </CardTitle>
            </Card>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </a>

          <a
            href="https://github.com/mcampo0215/UserAuthentication"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-[250px] cursor-pointer"
          >

            <Card className="flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:border-white/30">
              <CardTitle className="font-mono text-[20px]">User Authentication</CardTitle>
            </Card>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </a>

           <a
            href="https://github.com/mcampo0215/Penalty-Kick-Analyzer"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-[250px] cursor-pointer"
          >
            <Card className="relative flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:border-white/30">
              <CardTitle className="font-mono text-[20px]">Penalty Kick Analyzer</CardTitle>
            </Card>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
