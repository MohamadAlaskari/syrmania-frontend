// utils/getFallbacks.ts
import type { TFunction } from "i18next";

import { Project } from "@/types/project";
import { TeamMember } from "@/types/TeamMember";
import { Goal } from "@/types/goal";

export const getProjectFallback = (t: TFunction): Project => ({
  title: t("projects.noName"),
  description: t("projects.noDescription"),
  image: "/images/placeholder.jpg",
  button: t("projects.button") || "Mehr erfahren",
});

export const getTeamFallback = (t: TFunction): TeamMember => ({
  name: t("teams.noName"),
  role: t("teams.noRole"),
  description: t("teams.noDescription"),
  image: "/images/placeholder.jpg",
});

export const getGoalFallback = (t: TFunction): Goal => ({
  title: t("goals.noName"),
  description: t("goals.noDescription"),
  image: "/images/placeholder.jpg",
});
