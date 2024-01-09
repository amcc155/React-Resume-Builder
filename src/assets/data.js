// mockData.js
const mockData = {
  
    personalInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      // Other personal information fields
    },

    education:[
      
    {
      school:'Indiana University',
      major:'Informatics',
      gpa: '4.0',
      startDate: new Date(),
      endDate: new Date()
    }
    ],
  
    skills: {
      skill1: 'React',
      skill2: 'JavaScript',
      // Other skill fields
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
        // Other fields for the first job experience
      },
      {
        title: 'Intern',
        company: 'ABC Corp',
        duration: '2017 - 2018',
        description:[
          'led the team',
          'did some stuff'
        ]
        // Other fields for the second job experience
      },
      // Other job experiences as objects in the array
    ],
  };
  
  export default mockData;
  