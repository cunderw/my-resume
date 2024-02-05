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
}
