export type Project = {
  title: string;
  badge?: {
    kind: "algorithm" | "graph" | "security" | "goal" | "music";
    name: string;
  };
  description: string;
  tech: string[];
  url: string;
  summary: string;
  features: string[];
  metrics: {
    completion: number;
    frontend: number;
    backend: number;
    difficulty: number;
  };
};

export type Course = {
  name: string;
};
