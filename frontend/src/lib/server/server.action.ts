"use server"

import { SurveyFormData, WaitlistTypes } from "@/lib/types/app.types";
import prisma from "../prisma"
import { toast } from "sonner";
import { auth } from "../auth";
import { headers } from "next/headers";

export const submitSurvey = async ({userId, role, consent}: SurveyFormData) => {
    const survey = await prisma.survey.create({
        data: {
            userId,
            role,
            consent
        }
    })

    if(!survey) {
        toast.error("Failed to submit survey")
        return {success: false}
    }
    if(survey) {
        toast.success("Survey submitted successfully")
        return {success: true}
    }
}

export const surveyCount = async (userId: string) => {
    const surveyCount = await prisma.survey.count({
      where: {
        userId,
      },
    });
    return surveyCount
}

export const addWaitlist = async ({name, email}: WaitlistTypes) => {
  const result = await prisma.waitlist.create({
    data: { name, email },
  });

  if(!result) {
    toast.error("Failed to add to waitlist")
    return {success: false}
  }
  if(result) {
    toast.success("Waitlist added successfully!")
    return {success: true}
  }
}

export const getMyProjects = async () => {
  const session = await auth.api.getSession({headers: await headers()})
  const user = session?.user
  if(!user) {
    toast.error("Please login to access your projects")
    return {success: false}
  }
  const projects = await prisma.project.findMany({
    where: {
      ownerId: user?.id,
    },
  });
  return projects
}

export const projectCount = async () => {
  const session = await auth.api.getSession({headers: await headers()})
  const user = session?.user
  if(!user) {
    toast.error("Please login to access your projects")
    return {success: false}
  }
  const projectCount = await prisma.project.count({
    where: {
      ownerId: user?.id,
    },
  });
  return projectCount
}