import { ResumeModel } from '../models/Resume'

const dummyResume: ResumeModel = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, AN 12345',
  summary:
    'Experienced software engineer with a passion for developing innovative programs...',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions',
      location: 'San Francisco, CA',
      from: 'Jan 2020',
      to: 'Present',
      description: 'Lead a team of software engineers...',
      projects: [
        {
          name: 'Project Alpha',
          description: 'A web-based application designed to...',
          duties: [
            'Developed the front-end using React',
            'Implemented RESTful APIs'
          ]
        }
      ],
      duties: ['Led daily stand-ups', 'Reviewed pull requests']
    }
  ],
  education: [
    {
      institution: 'University of Technology',
      location: 'Anytown, AN',
      year: '2019',
      description: 'Bachelor of Science in Computer Science'
    }
  ],
  skills: ['JavaScript', 'React', 'Node.js']
}

const getResume = (): Promise<ResumeModel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyResume)
    }, 1000)
  })
}

export { getResume }
