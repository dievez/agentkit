import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";
import type { LanguageModel } from "ai";

export type ModelProvider = "openai" | "anthropic";

export interface ModelConfig {
  provider: ModelProvider;
  modelId: string;
  displayName: string;
}

// Free tier: only OpenAI gpt-4o-mini (cheapest, best value)
export const FREE_MODELS: ModelConfig[] = [
  {
    provider: "openai",
    modelId: "gpt-4o-mini",
    displayName: "GPT-4o Mini",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getModel(config: ModelConfig): any {
  switch (config.provider) {
    case "openai":
      return openai(config.modelId);
    case "anthropic":
      return anthropic(config.modelId);
    default:
      throw new Error(`Unsupported provider: ${config.provider}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getDefaultModel(): any {
  return getModel(FREE_MODELS[0]);
}
