// src/contexts/ResumeContext.tsx

import { useQuery } from '@tanstack/react-query'
import React, { createContext, useContext } from 'react'

import { getResume } from '../data/Resume'
import { ResumeModel } from '../models/Resume'

type ResumeProviderProps = {
  children: React.ReactNode
}

type ResumeContextType = {
  resumeData: ResumeModel | undefined
  isResumeDataLoading: boolean
  resumeError: Error | null
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export const ResumeProvider: React.FC<ResumeProviderProps> = ({ children }) => {
  const {
    data: resumeData,
    isLoading: isResumeDataLoading,
    error: resumeError
  } = useQuery<ResumeModel, Error>({
    queryKey: ['resume'],
    queryFn: getResume
  })

  return (
    <ResumeContext.Provider
      value={{ resumeData, isResumeDataLoading, resumeError }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export const useResume = () => {
  const context = useContext(ResumeContext)
  /* istanbul ignore next */
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
