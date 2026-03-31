import { Download, ExternalLink, FileText } from "lucide-react";
import { SectionBanner } from "./SectionBanner";

const RESUME_PATH = "/resume.pdf";

export function PlayerBuildSection() {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <SectionBanner title="Player Build" />

      <div
        className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] gap-6 items-start"
      >
        <div
          style={{
            borderRadius: 14,
            border: "1px solid rgba(163, 212, 255, 0.36)",
            background:
              "linear-gradient(155deg, rgba(17,36,72,0.98) 0%, rgba(26,54,103,0.96) 58%, rgba(20,44,88,0.98) 100%)",
            boxShadow:
              "0 16px 28px rgba(8, 18, 42, 0.32), inset 0 0 0 1px rgba(255,255,255,0.03)",
            padding: "1.25rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(140deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.06) 100%)",
              opacity: 0.55,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(135deg, rgba(103, 184, 255, 0.22), rgba(255, 224, 102, 0.14))",
                border: "1px solid rgba(173, 223, 255, 0.28)",
                boxShadow:
                  "0 0 18px rgba(103, 184, 255, 0.16), inset 0 0 12px rgba(255,255,255,0.04)",
              }}
            >
              <FileText size={28} color="#d9f3ff" strokeWidth={2.1} />
            </div>

            <div>
              <h3
                style={{
                  color: "#f7fbff",
                  fontSize: "1.2rem",
                  fontWeight: 900,
                  margin: 0,
                  marginBottom: "0.45rem",
                }}
              >
                Build Loadout
              </h3>
              <p
                style={{
                  color: "#c9e7ff",
                  lineHeight: 1.65,
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Preview the current player build or download the full build as a
                PDF.
              </p>
            </div>

            <a
              href={RESUME_PATH}
              download="Matthew-Campoverde-Resume.pdf"
              className="flex items-center justify-center gap-2"
              style={{
                minHeight: 50,
                borderRadius: 10,
                background: "linear-gradient(90deg, #4477d2 0%, #67b8ff 100%)",
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 0.3,
                textDecoration: "none",
                boxShadow: "0 10px 20px rgba(72, 128, 220, 0.26)",
              }}
            >
              Download Player Build <Download className="w-4 h-4" />
            </a>

            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
              style={{
                minHeight: 46,
                borderRadius: 10,
                border: "1px solid rgba(143, 214, 255, 0.26)",
                background: "rgba(8, 23, 47, 0.45)",
                color: "#dff3ff",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Open Full Preview <ExternalLink className="w-4 h-4" />
            </a>

            <div
              style={{
                color: "#9fcfff",
                fontSize: "0.84rem",
                lineHeight: 1.6,
                borderTop: "1px solid rgba(143, 214, 255, 0.14)",
                paddingTop: "0.9rem",
              }}
            >

            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: 14,
            border: "1px solid rgba(163, 212, 255, 0.36)",
            background:
              "linear-gradient(155deg, rgba(17,36,72,0.98) 0%, rgba(26,54,103,0.96) 58%, rgba(20,44,88,0.98) 100%)",
            boxShadow:
              "0 16px 28px rgba(8, 18, 42, 0.32), inset 0 0 0 1px rgba(255,255,255,0.03)",
            padding: "1rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(140deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.06) 100%)",
              opacity: 0.55,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                color: "#8fd6ff",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: 0.9,
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Live Preview
            </div>

            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid rgba(143, 214, 255, 0.18)",
                background: "rgba(7, 20, 43, 0.5)",
                minHeight: 620,
              }}
            >
              <iframe
                title="Resume Preview"
                src={`${RESUME_PATH}#view=FitH`}
                style={{
                  width: "100%",
                  height: 620,
                  border: "none",
                  display: "block",
                  background: "#ffffff",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
