/* eslint-disable @typescript-eslint/no-explicit-any */
import { DocumentData } from 'firebase/firestore/lite'

export type ProjectModel = {
  name: string
  description: string
  duties: string[]
}

export type ExperienceModel = {
  title: string
  company: string
  location: string
  from: string
  to: string
  description: string
  projects?: ProjectModel[]
  duties?: string[]
  otherRoles?: string[]
}

export type EducationModel = {
  institution: string
  location: string
  year: string
  description: string
}

export type ResumeModel = {
  name: string
  email: string
  phone: string
  address: string
  linkedinProfile: string
  githubProfile: string
  aboutMe: string
  summary: string
  experience: ExperienceModel[]
  education: EducationModel[]
  skills: string[]
  pdfStorageLoc: string
}

export const mapResumeData = (data: DocumentData): ResumeModel => {
  return {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    linkedinProfile: data.linkedinProfile,
    githubProfile: data.githubProfile,
    aboutMe: data.aboutMe,
    summary: data.summary,
    experience: data.experience.map((exp: any) => ({
      title: exp.title,
      company: exp.company,
      location: exp.location,
      from: exp.from,
      to: exp.to,
      description: exp.description,
      projects: exp.projects?.map((proj: any) => ({
        name: proj.name,
        description: proj.description,
        duties: proj.duties
      })),
      duties: exp.duties,
      otherRoles: exp.otherRoles
    })),
    education: data.education.map((edu: any) => ({
      institution: edu.institution,
      location: edu.location,
      year: edu.year,
      description: edu.description
    })),
    skills: data.skills,
    pdfStorageLoc: data.pdfStorageLoc
  }
}
