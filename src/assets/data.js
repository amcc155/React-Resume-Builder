// mockData.js
const mockData = {
  
    personalInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
  
    },

    education:[
      
    {
      school:'Indiana University',
      major:'Informatics',
      minor:'Web Design',
      gpa: '4.0',
      startDate: new Date().toLocaleDateString(),
      endDate: new Date().toLocaleDateString()
    }
    ],

    projects:[
    {
      title:'Web App',
      skills:'React/HTML/CSS',
      description: [
        'Did this',
        'Also did this',
        'And This'
      ]
    }

  ],
  
    skills: {
      skill1: 'React',
      skill2: 'JavaScript',
    },
    experience: [
      {
        title: 'Software Developer',
        company: 'Tech Inc',
        duration: '2018 - Present',
        description:[
          'led the team',
          'did some stuff'
        ]
      
      },
      {
        title: 'Intern',
        company: 'ABC Corp',
        duration: '2017 - 2018',
        description:[
          'led the team',
          'did some stuff'
        ]
     
      },
     
    ],
  };
  
  export default mockData;
  