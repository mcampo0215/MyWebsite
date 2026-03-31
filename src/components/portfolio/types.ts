export type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string;
  summary: string;
  impact: string;
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
