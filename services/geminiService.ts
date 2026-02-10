
import { GoogleGenAI, Type } from "@google/genai";
import { AppArchitecture } from "../types";

export const getAppArchitecture = async (prompt: string): Promise<AppArchitecture> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `You are an expert Flutter & Mobile Architect. The developer, Muhammad Akmal, specializes in:
    - Frontend: Flutter with GetX state management.
    - Data: REST API (JSON), Hive, Shared Preferences, Secure Storage.
    - Backend: Jython middleware and MySQL database.
    - Workflow: GitHub team collaboration with branching.

    Analyze this app idea: "${prompt}". 
    Provide a professional technical architecture. Focus on how a GetX frontend would interact with a Jython/MySQL backend via REST. Include a GetXController snippet (starterCode) showing a data fetch from a JSON API.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          appName: { type: Type.STRING },
          coreConcept: { type: Type.STRING },
          recommendedStack: {
            type: Type.OBJECT,
            properties: {
              stateManagement: { type: Type.STRING },
              backend: { type: Type.STRING },
              localDatabase: { type: Type.STRING },
            },
            required: ["stateManagement", "backend", "localDatabase"]
          },
          features: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          packages: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          roadmap: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          starterCode: { 
            type: Type.STRING, 
            description: "A GetXController snippet fetching JSON data from a REST API."
          }
        },
        required: ["appName", "coreConcept", "recommendedStack", "features", "packages", "roadmap", "starterCode"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  return JSON.parse(text) as AppArchitecture;
};
