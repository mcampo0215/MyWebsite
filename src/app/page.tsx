import * as React from "react";
import {Card,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black p-6 overflow-hidden">
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Card className="flex flex-col bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.165c-3.338.724-4.033-1.61-4.033-1.61a3.175 3.175 0 0 0-1.333-1.753c-1.09-.744.082-.73.082-.73a2.52 2.52 0 0 1 1.84 1.237 2.547 2.547 0 0 0 3.485.996 2.548 2.548 0 0 1 .76-1.6c-2.665-.305-5.466-1.335-5.466-5.933a4.61 4.61 0 0 1 1.23-3.195 4.29 4.29 0 0 1 .115-3.15s1.005-.322 3.3 1.23a11.47 11.47 0 0 1 6.002 0c2.29-1.552 3.297-1.23 3.297-1.23a4.288 4.288 0 0 1 .117 3.15 4.6 4.6 0 0 1 1.227 3.194c0 4.61-2.807 5.625-5.48 5.922a2.865 2.865 0 0 1 .815 2.224v3.293c0 .32.216.694.825.576A12.007 12.007 0 0 0 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/matthew-campoverde-aa4bb4256"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7h-4v17zM8.5 7h3.7v2.3h.1c.5-.9 1.6-2.2 3.9-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-8.3c0-2-.03-4.5-2.8-4.5-2.8 0-3.2 2.1-3.2 4.3V24h-4V7z" />
              </svg>
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
