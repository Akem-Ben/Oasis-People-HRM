// import jwt from 'jsonwebtoken';
import { http, HttpResponse } from "msw";

// A Map of existing Employees kept in memory.
const allEmployees = {
  results: [
    {
      url: '/api/user/employee/1',
      id: 1,
      firstName: "Jane",
      lastName: "Doe",
      middleName: 'Yusuf',
      profile: [
        {
          employeeId: '34343445353',
          nextOfKin: 'Akemini',
          gender: "female",
          Company: 'Tea Estate Company',
          username: "random_guess",
          mobileNumber: "1234567890",
          email: 'janed@yahoo.com',
          workEmail: "janed@campany.com",
          birthDate: '2019-02-02',
          maritalStatus: 'Divorced',
          nationality: 'Alien',
          homeAddress: '2617 South Robinson Avenue, Oklahoma City',
          city: 'Nairobi',
          district: 'Kairo',
          zipCode: '0345',
          department: 'Design',
          designation: 'UI/UX Designer',
          employeeType: 'Remote',
          contractType: 'Permanent',
          workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          hireDate: '2019-02-02',
          officeLocation: 'America',
          socialAccounts: { slackId: '1234567890', twitterId: '@janedElone', skypeId: 'GoodYesu', githubId: '@rayJane' },
          bankBranch: "Axis Bank/Gachibowli",
          bankAccountNumber: "1234567890",
          accountName: 'Janed-Elone',
          isManager: false
        }
      ],
      attendance: [
        { id: 5, userId: 1, clockIn: '2024-05-16T13:34:22.731923+03:00', clockOut: '2024-05-16T22:35:26.241943+03:00' },
        { id: 9, userId: 1, clockIn: '2024-05-17T12:34:22.731923+03:00', clockOut: '2024-05-17T23:35:26.241943+03:00' },
        { id: 11, userId: 1, clockIn: '2024-05-18T08:34:22.731923+03:00', clockOut: '2024-05-18T18:35:26.241943+03:00' }
      ],
      leave: [
        {
          id: 10,
          userId: 1,
          requestDate: '2024-05-16T13:34:22.731923+03:00',
          startDate: '2024-06-17T13:34:22.731923+03:00' ,
          endDate: '2024-07-16T13:34:22.731923+03:00',
          ManagerUrl: '/api/user/employee/3',
          totalLeaveDays: 22,
          leaveBalance: 21,
        }
      ]

    },
    {
      url: '/api/user/employee/2',
      id: 2,
      firstName: "Akemini",
      lastName: "Arinitwe",
      middleName: 'Bonny',
      profile: [
        {
          employeeId: '02323244',
          nextOfKin: 'Fuuto',
          gender: "male",
          Company: 'Tea Estate Company',
          username: "random_guess",
          mobileNumber: "1234567890",
          email: 'janed@yahoo.com',
          workEmail: "janed@campany.com",
          birthDate: '2019-02-02',
          maritalStatus: 'Divorced',
          nationality: 'Alien',
          homeAddress: '2617 South Robinson Avenue, Oklahoma City',
          city: 'Nairobi',
          district: 'Kairo',
          zipCode: '0345',
          department: 'Design',
          designation: 'UI/UX Designer',
          employeeType: 'Remote',
          contractType: 'Permanent',
          workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          hireDate: '2011-12-22',
          officeLocation: 'Uganda',
          socialAccounts: { slackId: '1234567890', twitterId: '@janedElone', skypeId: 'GoodYesu', githubId: '@rayJane' },
          bankBranch: "Axis Bank/Gachibowli",
          bankAccountNumber: "1234567890",
          accountName: 'Janed-Elone',
          isManager: false
        }
      ],
      attendance: [
        { id: 2, userId: 2, clockIn: '2024-05-16T13:34:22.731923+03:00', clockOut: '2024-05-16T22:35:26.241943+03:00' },
        { id: 6, userId: 2, clockIn: '2024-05-17T12:34:22.731923+03:00', clockOut: '2024-05-17T23:35:26.241943+03:00' },
        { id: 4, userId: 2, clockIn: '2024-05-18T08:34:22.731923+03:00', clockOut: '2024-05-18T18:35:26.241943+03:00' }
      ],
      leave: [
        {
          id: 9,
          userId: 2,
          requestDate: '2024-05-16T13:34:22.731923+03:00',
          startDate: '2024-06-17T13:34:22.731923+03:00' ,
          endDate: '2024-07-16T13:34:22.731923+03:00',
          ManagerUrl: '/api/user/employee/3',
          totalLeaveDays: 22,
          leaveBalance: 9,
        },
        {
          id: 20,
          userId: 2,
          requestDate: '2024-05-16T13:34:22.731923+03:00',
          startDate: '2024-06-17T13:34:22.731923+03:00' ,
          endDate: '2024-07-16T13:34:22.731923+03:00',
          ManagerUrl: '/api/user/employee/3',
          totalLeaveDays: 22,
          leaveBalance: 5,
        }
      ]

    },
    {
      url: '/api/user/employee/3',
      id: 3,
      firstName: "Kasito",
      lastName: "Jovan",
      middleName: '',
      profile: [
        {
          employeeId: '9087437483',
          nextOfKin: 'bomber',
          gender: "male",
          Company: 'Tea Estate Company',
          username: "random_guess",
          mobileNumber: "1234567890",
          email: 'janed@yahoo.com',
          workEmail: "janed@campany.com",
          birthDate: '2019-02-02',
          maritalStatus: 'Divorced',
          nationality: 'Alien',
          homeAddress: '2617 South Robinson Avenue, Oklahoma City',
          city: 'Nairobi',
          district: 'Kairo',
          zipCode: '0345',
          department: 'Design',
          designation: 'UI/UX Designer',
          employeeType: 'Remote',
          contractType: 'Permanent',
          workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          hireDate: '2019-02-02',
          officeLocation: 'America',
          socialAccounts: { slackId: '1234567890', twitterId: '@janedElone', skypeId: 'GoodYesu', githubId: '@rayJane' },
          bankBranch: "Axis Bank/Gachibowli",
          bankAccountNumber: "1234567890",
          accountName: 'Yes',
          isManager: true
        }
      ],
      attendance: [
        { id: 5, userId: 3, clockIn: '2024-05-16T13:34:22.731923+03:00', clockOut: '2024-05-16T22:35:26.241943+03:00' },
        { id: 9, userId: 3, clockIn: '2024-05-17T12:34:22.731923+03:00', clockOut: '2024-05-17T23:35:26.241943+03:00' },
        { id: 11, userId: 3, clockIn: '2024-05-18T08:34:22.731923+03:00', clockOut: '2024-05-18T18:35:26.241943+03:00' }
      ],
      leave: [
        {
          id: 10,
          userId: 3,
          requestDate: '2024-05-16T13:34:22.731923+03:00',
          startDate: '2024-06-17T13:34:22.731923+03:00' ,
          endDate: '2024-07-16T13:34:22.731923+03:00',
          ManagerUrl: '/api/user/employee/3',
          totalLeaveDays: 22,
          leaveBalance: 5,
        }
      ]

    }
  ]
};

const hr = {
  firstName: 'Raymond',
  lastName: 'Downey',
  loginKey: 'hr@hrm.com',
  password: 'raymond1234',
  designation: 'HR Manager',
}

const isAuthenticated = async (request) => {
  return request.password === hr.password && request.loginKey === hr.loginKey;
};

export const handlers = [
  http.get('/api/posts', () => {
    return HttpResponse.json({
      data: 'Captured a "GET /posts" request',
    })
  }),
  http.get('/api/user/employees', () => {

    return HttpResponse.json(allEmployees);
  }),
  http.get('/api/user/attendance', () => {
    return HttpResponse.json({
      count: 3,
      createdAt: Date.now(),
      results: [
        {}
      ]
    })
  }),

  http.post('/api/hr/login', async ({request}) => {
    const newtext = await request.json()
    const authenticated = await isAuthenticated(newtext);

    if (authenticated) {
      return HttpResponse.json({
          status: 200,
          message: 'login succcessfull',
          hr
    });
    } else {
      return HttpResponse.json({
          status: 401,
          message: 'check email and password and try again'
    });
    }
  })
]