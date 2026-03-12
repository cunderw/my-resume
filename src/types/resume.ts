export type ProjectData = {
  name: string
  description: string
  duties: string[]
}

export type ExperienceData = {
  title: string
  company: string
  location: string
  from: string
  to: string
  description: string
  projects?: ProjectData[]
  duties?: string[]
  otherRoles?: string[]
}

export type EducationData = {
  institution: string
  location: string
  year: string
  description: string
}

export type ResumeData = {
  name: string
  email: string
  linkedinProfile: string
  githubProfile: string
  aboutMe: string
  summary: string
  experience: ExperienceData[]
  education: EducationData[]
  skills: string[]
  pdfPath?: string
}
