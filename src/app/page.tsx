"use client";

import { useState } from "react";
import { PortfolioView } from "@/components/portfolio/PortfolioView";
import { IntroPanel } from "@/components/portfolio/IntroPanel";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { aboutMe, courses, projects } from "@/components/portfolio/data";
import type { Project } from "@/components/portfolio/types";

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showIntroFace, setShowIntroFace] = useState(true);
  const [showPortfolioFace, setShowPortfolioFace] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "achievements" | "player build" | "arenas"
  >(
    "achievements"
  );
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const currentLevel = projects.length;

  const handleStart = () => {
    if (isTransitioning || showContent) {
      return;
    }

    setShowPortfolioFace(true);
    setIsTransitioning(true);
    setShowContent(true);
  };

  const handleBack = () => {
    if (isTransitioning || !showContent) {
      return;
    }

    setShowIntroFace(true);
    setIsTransitioning(true);
    setShowContent(false);
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
            transform-style: preserve-3d;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.8s cubic-bezier(.4,2,.6,1);
            transform-style: preserve-3d;
            will-change: transform;
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
            -webkit-backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transform-style: preserve-3d;
            will-change: transform;
          }

          .flip-card-front {
            transform: rotateY(0deg) translateZ(1px);
          }

          .flip-card-back {
            transform: rotateY(180deg) translateZ(1px);
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
          className={`flip-card${showContent ? " flipped" : ""}`}
          style={{
            width: "99vw",
            maxWidth: 1200,
            minHeight: "80vh",
            height: "80vh",
            maxHeight: "92vh",
          }}
        >
          <div
            className="flip-card-inner"
            style={{ width: "100%", height: "100%" }}
            onTransitionEnd={() => {
              setIsTransitioning(false);

              if (showContent) {
                setShowIntroFace(false);
              } else {
                setShowPortfolioFace(false);
              }
            }}
          >
            <div className="flip-card-front">
              {showIntroFace && (
                <IntroPanel aboutMe={aboutMe} onStart={handleStart} />
              )}
            </div>

            <div className="flip-card-back">
              {showPortfolioFace && (
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
