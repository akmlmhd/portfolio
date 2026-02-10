
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technicalChallenge: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Framework' | 'Language' | 'Backend' | 'Tools';
}

export interface AppArchitecture {
  appName: string;
  coreConcept: string;
  recommendedStack: {
    stateManagement: string;
    backend: string;
    localDatabase: string;
  };
  features: string[];
  packages: string[];
  roadmap: string[];
  starterCode: string;
}
