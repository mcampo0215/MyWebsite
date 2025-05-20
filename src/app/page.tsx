import * as React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black p-6 overflow-hidden">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-70">
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
            Hello! My name is Matthew and I am an aspiring software engineer studying computer science at NYIT. I have gained my experience so far building projects using React Native & Expo Go, in addition to working with several backend services such as Spring Boot, Firebase, and MySQL. I have different side projects as well that can be accessible below.
          </CardDescription>
        </CardHeader>

        <CardFooter className="mt-auto flex justify-end items-center gap-4 px-6 pb-6">
          <a
            href="https://github.com/mcampo0215"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 97.707 97.707"
              className="w-5 h-5 text-white"
            >
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69..." />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/matthew-campoverde-aa4bb4256"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="w-5 h-5 text-white"
            >
              <path
                fill="#ffffff"
                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z..."
              />
            </svg>
          </a>
        </CardFooter>
      </Card>

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
            <Card className="flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white">
              <CardTitle className="text-[20px] font-serif">
                AlgoVisualization
              </CardTitle>
            </Card>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </a>

          <a
            href="https://github.com/mcampo0215/MarkovStats"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[460px] h-[250px] cursor-pointer"
          >
            <Card className="flex items-center justify-center text-center w-full h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white">
              <CardTitle className="text-[20px] font-serif">
                MarkovStats
              </CardTitle>
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
