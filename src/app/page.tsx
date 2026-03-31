"use client";

import { useState } from "react";
import { PortfolioView } from "@/components/portfolio/PortfolioView";
import { IntroPanel } from "@/components/portfolio/IntroPanel";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { aboutMe, courses, projects } from "@/components/portfolio/data";
import type { Project } from "@/components/portfolio/types";

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "achievements" | "player build" | "arenas"
  >(
    "achievements"
  );
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const currentLevel = projects.length;

  const handleStart = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowContent(true);
      setIsFlipping(false);
    }, 800);
  };

  const handleBack = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowContent(false);
      setIsFlipping(false);
    }, 800);
  };

  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center p-0 m-0 animate__animated animate__fadeInUp"
        style={{ background: "transparent", boxSizing: "border-box" }}
      >
        <style>{`
          .press-start-blink {
            animation: pressStartBlink 1.1s steps(2, start) infinite;
          }

          @keyframes pressStartBlink {
            to { visibility: hidden; }
          }

          .flip-card {
            perspective: 2000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s cubic-bezier(.4,2,.6,1);
            transform-style: preserve-3d;
          }

          .flip-card.flipped .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          @keyframes softGlimmerDiagonal {
            0% { background-position: -200% -200%; }
            100% { background-position: 200% 200%; }
          }

          @keyframes controllerGlowWhite {
            0% {
              filter: drop-shadow(0 0 0 #e3f0fc) drop-shadow(0 0 8px #e3f0fc) drop-shadow(0 0 16px #ffffff);
            }
            50% {
              filter: drop-shadow(0 0 8px #e3f0fc) drop-shadow(0 0 24px #e3f0fc) drop-shadow(0 0 32px #ffffff);
            }
            100% {
              filter: drop-shadow(0 0 0 #e3f0fc) drop-shadow(0 0 8px #e3f0fc) drop-shadow(0 0 16px #ffffff);
            }
          }
        `}</style>

        <div
          className={`flip-card${isFlipping || showContent ? " flipped" : ""}`}
          style={{
            width: "99vw",
            maxWidth: 1200,
            minHeight: "80vh",
            height: "80vh",
            maxHeight: "92vh",
          }}
        >
          <div className="flip-card-inner" style={{ width: "100%", height: "100%" }}>
            <div className="flip-card-front">
              {!isFlipping && !showContent && (
                <IntroPanel aboutMe={aboutMe} onStart={handleStart} />
              )}
            </div>

            <div className="flip-card-back">
              {(showContent || isFlipping) && (
                <PortfolioView
                  activeTab={activeTab}
                  courses={courses}
                  currentLevel={currentLevel}
                  onBack={handleBack}
                  onProjectSelect={setModalProject}
                  onTabChange={setActiveTab}
                  projects={projects}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
}
