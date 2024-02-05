import { mapResumeData } from './Resume'

describe('mapResumeData', () => {
  it('should map resume data', () => {
    const data = {
      name: 'John Doe',
      email: 'test@test.com',
      phone: '5555555',
      address: '123 Testing St',
      linkedinProfile: 'test',
      githubProfile: 'test',
      aboutMe: 'test',
      summary: 'test',
      experience: [
        {
          title: 'Software Engineer',
          company: 'Google',
          location: 'Mountain View, CA',
          from: '2020',
          to: '2021',
          description: 'Worked on the search team',
          projects: [
            {
              name: 'Search',
              description: 'Worked on the search team'
            }
          ]
        }
      ],
      education: [
        {
          institution: 'University of California, Berkeley',
          location: 'Berkeley, CA',
          description: 'B.S. in Computer Science'
        }
      ],
      skills: []
    }
    const result = mapResumeData(data)
    expect(result).toEqual({
      ...data
    })
  })
})
