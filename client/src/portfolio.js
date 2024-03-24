const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
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
    name: 'Project 1',
    description:
      'bhai bhai',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'bhai bhai',
    stack: ['java', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'bhai bhai',
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
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'DevHelp@mail.com',
}

export { header, about, projects, skills, contact }
