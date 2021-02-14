const Users = [
    {
        user_id: 1,
        name:'User1',
        role: 'lecturer',
        email: 'lecturer@bits-pilani.com',
        dob: '04/10/1995',
        password:'Abc@12345'
    },
    {
        user_id: 2,
        name:'User2',
        role: 'student',
        email: 'student@bits-pilani.com',
        dob: '05/11/2006',
        password:'Abc@12345'
    }
];

const courseDetails = [
    {
      key: '1',
      courseName: 'Web Development',
      startDate: '01-Jan-2022',
      seatsAvailable: '10',
      duration: '10 weeks',
      lecturerName: 'Prof. ABC',
      courseDescription: 'A basic course on Web Development',
      credits: '4',
      enrolled: 'Yes'
    },
    {
        key: '2',
        courseName: 'Mobile Development',
        startDate: '01-Mar-2022',
        seatsAvailable: '7',
        duration: '4 weeks',
        lecturerName: 'Prof. XYZ',
        courseDescription: 'A basic course on Mobile Development',
        credits: '3',
        enrolled: 'No'
    },
    {
        key: '3',
        courseName: 'Cloud Development',
        startDate: '01-April-2022',
        seatsAvailable: '0',
        duration: '6 weeks',
        lecturerName: 'Prof. LMN',
        courseDescription: 'A basic course on Cloud Development',
        credits: '4',
        enrolled: 'Yes'
    },
    {
        key: '4',
        courseName: 'Web Development',
        startDate: '01-May-2022',
        seatsAvailable: '15',
        duration: '10 weeks',
        lecturerName: 'Prof. DEF',
        courseDescription: 'An advanced course on Web Development',
        credits: '4',
        enrolled: 'No'
    },
    {
        key: '5',
        courseName: 'Mobile Development',
        startDate: '01-July-2022',
        seatsAvailable: '20',
        duration: '4 weeks',
        lecturerName: 'Prof. UVW',
        courseDescription: 'An advanced course on Mobile Development',
        credits: '3',
        enrolled: 'Yes'
    },
    {
        key: '6',
        courseName: 'Cloud Development',
        startDate: '01-September-2022',
        seatsAvailable: '0',
        duration: '10 weeks',
        lecturerName: 'Prof. MNO',
        courseDescription: 'An advanced course on Cloud Development',
        credits: '4',
        enrolled: 'No'
    }
];
     
export {Users, courseDetails}