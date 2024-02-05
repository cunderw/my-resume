import { ResumeModel } from '../models/Resume'

const dummyResume: ResumeModel = {
  name: 'Carson Underwood',
  email: 'cunderw@gmail.com',
  phone: '4173798016',
  address: 'Ozark, MO',
  linkedinProfile: 'cunderw',
  githubProfile: 'cunderw',
  aboutMe:
    'My extensive experience in software development, encompassing roles in project management, QA Automation supervision, and software engineering, has equipped me with a diverse skill set and a unique perspective that I am eager to bring to any team.\n At the core of my career is a deep-rooted passion for creating impactful software solutions. My journey in the field has been marked by a series of challenging roles, each contributing to my comprehensive understanding of the software development lifecycle. This experience is further enhanced by my background in QA and automation, granting me the ability to foresee potential issues and proactively address them, ensuring a robust and user-centric product.\nMy career has been characterized by versatility, having worked in teams ranging from small groups of 3-5 to large-scale collaborations of over 200 members. This experience has not only honed my technical abilities but has also developed my skills in communication, leadership, and collaboration. I have had the privilege of mentoring and supervising other engineers, delivering talks, and driving projects to successful completion. These experiences have instilled in me the value of teamwork, innovation, and user-focused development, principles that drive me to create the best software possible.',
  summary:
    'A software engineer with the required and a strong desire to produce high quality software. Focused on reducing time to feedback by creating strong, reliable and maintainable applications.',
  experience: [
    {
      title: 'Software Engineer III',
      company: 'World Wide Technology',
      location: 'Springfield, MO',
      otherRoles: ['Software Engineer II', 'Sr. QA Engineer', 'QA Engineer'],
      from: 'Oct. 2021',
      to: 'Feb. 2024',
      description: 'Developed full stack applications for various clients.',
      projects: [
        {
          name: 'VCRx',
          description: 'React Native Mobile Application',
          duties: [
            'Developed and shipped cross platform (iOS and Android) React Native app',
            'Integration with third party APIs for prescription drug information and home delivery services',
            'Integrated with Firebase, Google Analytics, Airship',
            'Implemented push notifications and deep-linking',
            'Jest Unit testing with react native testing library',
            'Detox and WebdriverIO w/ Appium E2E tests',
            'Containerized HapiJS / Postgres backend deployed to GCP kubernetes cluster',
            'Implemented CI/CD for both backend and app using Github Actions, Bitrise and Concourse'
          ]
        },
        {
          name: 'Bayer',
          description: 'GoLang API & Java Dataflow Pipeline',
          duties: [
            'Created and updated APIs in Golang',
            'Created E2E integration tests using docker and spanner emulator to stand up local instances of services',
            'Implemented data flow jobs for Google Cloud using Java and Apache Beam'
          ]
        },
        {
          name: 'Nipper',
          description: 'React / Electron Realtime Chat Application',
          duties: [
            'Implemented UI enhancements and features using Electron and React',
            'Integration with Firebase (Auth, Firestore, Realtime DB)',
            'Integration with Zoom SDK',
            'Create POCs for using alternate SDKs for the voice / video implementations',
            'Created and maintained a full E2E suite of GUI and API tests for Windows and macOS electron app using WebdriverIO',
            'Maintained and enhanced the CI pipelines and distributions for the application'
          ]
        }
      ]
    },
    {
      title: 'Sr. QA Automation Engineer',
      company: 'Netsmart',
      location: 'Springfield, MO',
      from: 'Jan. 2021',
      to: 'Oct. 2021',
      description:
        'Developed and maintained automated test frameworks for web, mobile and desktop applications.',
      duties: [
        'Evaluated, generated, executed, and maintained a full test automation library with test scenarios to ensuring requirements coverage and regression coverage with positive and negative testing',
        'Worked collaboratively with the Engineering team to identify critical or high priority gaps in coverage and coordinated lessening the gap',
        'Conducted software compatibility tests against changing programs, hardware, operating systems, or network environments',
        'Identified, installed, configured, and maintained test lab environments to allow simulated and comparable testing',
        'Performed various types of testing including: Functional, Regression, Integration, Portability, UX, and Smoke testing',
        'Wrote End User Release Notes and Technical Documentation',
        'Created and maintained several Node.JS applications for running test automation scenarios',
        'Created and maintained a custom WebdriverIO / Appium based automation framework',
        'Managed CI/CD pipelines for all QA Automation applications',
        'Managed multiple Linux VMs and docker containers to support QA Automation'
      ]
    },
    {
      title: 'QA Automation Supervisor',
      otherRoles: [
        'QA Developer',
        'Sr. QA Developer',
        'Sr. QA Automation Engineer'
      ],
      company: "O'Reilly Auto Parts",
      location: 'Springfield, MO',
      from: 'Feb. 2015',
      to: 'Jan. 2021',
      description:
        'Managed a team of QA Automation Engineers and developed and maintained automated tests for web, mobile and desktop applications.',
      duties: [
        'Previous roles include QA Developer, Sr. QA Developer and QA Engineer',
        'Created and maintained Automation Frameworks for Retail, eCommerce and internal web applications (Web, API, Java, Mobile)',
        'Implemented and maintained API tests for retail and corporate services',
        'Created tools and distributed test environments for automated tests',
        'Reviewed functional specifications, business requirements, and use cases',
        'Designed and implemented automated test cases/scripts using O’Reilly’s defined framework',
        'Executed automated test cases/scripts to confirm a given application’s functional requirements.',
        'Maintained detailed documentation of test results',
        'Enforced defect management procedures within the project team using Jira',
        'Provided assessment of product quality at key milestones to project stakeholders'
      ]
    },
    {
      title: 'Associate Producer',
      otherRoles: [
        'Game Designer',
        'Level Scripter',
        'QA Tester',
        'Audio Engineer'
      ],
      company: 'Black Lantern Studios',
      location: 'Springfield, MO',
      from: 'Sept. 208',
      to: 'Feb. 2015',
      description:
        'Lead teams of programmers, artists, and others in the production of titles',
      duties: [
        'Worked with leads to track progress and ensure milestone deliveries are made',
        'Served as a point of contact with external QA, developers and publishers',
        'Coordinated external feedback and reviews between external parties',
        'Define milestone dates and requirements',
        'Performed Game/Level Design and Scripting'
      ]
    }
  ],
  education: [
    {
      institution: 'Missouri State University',
      location: 'Springfield, MO',
      year: '2009',
      description: 'Bachelor of Science in Computer Science'
    }
  ],
  skills: [
    'Javascript / Typescript',
    'Java',
    'Powershell',
    'Bash',
    'Python',
    'C#',
    'SQL',
    'Swift',
    'Kotlin',
    'Golang',
    'Web',
    'Mobile (iOS, Android)',
    'Desktop (macOS, Windows, Linux)',
    'Test Complete',
    'ReadyAPI Suite',
    'NodeJS',
    'WebdriverIO',
    'Appium',
    'Postman',
    'Git',
    'Docker',
    'Kubernetes',
    'Ansible',
    'Flutter/Dart',
    'React',
    'React Native'
  ]
}

const getResume = (): Promise<ResumeModel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyResume)
    }, 1000)
  })
}

export { dummyResume, getResume }
