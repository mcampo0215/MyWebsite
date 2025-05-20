import * as React from "react";
import { Card, CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card";
export default function Page() {

  return (
    /* Name description card */
    <div className="relative flex flex-col items-center min-h-screen bg-black p-6 overflow-hidden">
      <Card className="w-[600px] h-[700px] flex flex-col bg-white/1 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white
      before:absolute before:inset-0 before:rounded-xl
      before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-100">
        <CardHeader>
          <CardTitle className="text-center text-[30px] font-bold font-serif">
            Matthew Campoverde
          </CardTitle>

          <CardDescription className="flex justify-center mt-2">
            <div className="border border-gray-600 px-4 py-1 rounded-full text-sm text-gray-300">
              CS Student @ NYIT
            </div>
          </CardDescription>

          <CardDescription className = "mt-35 text-center text-gray-400 text-sm animate-pulse-slow font-serif">
            Hello! My name is Matthew and I am an aspiring software engineer studying computer science at NYIT. I have gained my experience so far building projects using React Native & Expo Go, in addition to working with several backend services such as Spring Boot, Firebase, and MySQL. I have different side projects as well that can be accessible below.
          </CardDescription>
        </CardHeader>

        {/* Code for github link */}
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
              <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          </a>

          {/* Code for linkedn link */}
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
              fill = "#ffffff"
              d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
            </svg>
          </a>
        </CardFooter>
      </Card>
      <hr className = "w-full max-w-5xl my-6 border-t border-white/20"></hr>
      <section
      id = "projects"
      className = "w-full max-w-3xl text-white flex flex-col items-center">
        <h2 className = "text-2xl font-bold mb-4 font-serif">Projects</h2>

        <div className = "flex flex-row gap-20">
            <a
            href = "https://github.com/mcampo0215/AlgoVisualization"
            target = "_blank"
            rel = "noopener noreferrer">
            <div className = "relative group w[480px] h-[250px] cursor-pointer">
        <Card className = " animate-pulse-slow flex items-center justify-center text-center w-[480px] h-[250px] bg-white/1 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-100">
        <CardTitle className = "text-[20px] font-serif">
            AlgoVisualization
        </CardTitle>
        </Card>
        <div className = "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
        <span className = "text-white font-semibold text-lg">View</span>
        </div>
            </div>
            </a>
        <div className = "relative group w-[480px] h-[250px] cursor-pointer">
        <Card className = " animate-pulse-slow flex items-center justify-center text-center w-[480px] h-[250px] bg-white/1 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl text-white before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-100">
        <CardTitle className = "text-[20px] font-serif">
            MarkovStats
        </CardTitle>
        </Card>
        <div className = "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl z-20">
        <span className = "text-white font-semibold text-lg">View</span>
        </div>
        </div>
        </div>
      </section>
    </div>
  );
}
