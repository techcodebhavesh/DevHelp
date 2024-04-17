const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://techcodebhavesh.github.io',
  title: 'DevHelp.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'DevHelp',
  role: 'Coding Assistant',
  description:
    'DevHelp is a concise and efficient assistant designed to aid developers in their coding endeavors. With DevHelp, programmers can quickly access documentation, troubleshoot errors, and find solutions to common coding challenges within the. Its user-friendly interface and comprehensive resources streamline the development process, empowering users to write clean, robust, and efficient code with ease.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Smart Code Editor',
    description:
      'Smart Autocomplete, Syntax Highlighting, and Error Detection for a variety of programming languages.',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Interactive Chatbot',
    description:
      'A chatbot that provides real-time assistance and answers to common coding questions.',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Dashboard Analytics',
    description:
      'A dashboard that provides insights into coding performance, productivity, and efficiency.',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Intuitive Assignment List',
    description:'A simple and intuitive task list that helps users organize and manage their coding assignments.',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Electron',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'DevHelp@mail.com',
}

export { header, about, projects, skills, contact }
