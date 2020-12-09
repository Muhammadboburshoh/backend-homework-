const users = [
  { id: 1, username: 'MuhammadSiddiq' },
  { id: 2, username: 'Ilhomjon' },
  { id: 3, username: 'Muhammadbobur' },
  { id: 4, username: 'Shuhratbek' },
  { id: 5, username: 'Jahongir' },
  { id: 6, username: 'Abdulaziz' },
  { id: 7, username: 'Abdulatifxon' },
  { id: 8, username: 'Umar' }
];

const data = [
  { id: 2, getUserId: 1, visitDay: '04-12-2020', visit: false, score: 0 },
  { id: 3, getUserId: 1, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 4, getUserId: 1, visitDay: '06-12-2020', visit: true, score: 4 },
  { id: 5, getUserId: 1, visitDay: '07-12-2020', visit: false, score: 0 },
  { id: 6, getUserId: 1, visitDay: '08-12-2020', visit: true, score: 5 },
  { id: 7, getUserId: 1, visitDay: '09-12-2020', visit: true, score: 5 },

  { id: 9, getUserId: 2, visitDay:  '04-12-2020', visit: true, score: 4 },
  { id: 10, getUserId: 2, visitDay: '05-12-2020', visit: false, score: 0 },
  { id: 11, getUserId: 2, visitDay: '06-12-2020', visit: true, score: 5 },
  { id: 12, getUserId: 2, visitDay: '07-12-2020', visit: true, score: 3 },
  { id: 13, getUserId: 2, visitDay: '08-12-2020', visit: true, score: 5 },
  { id: 14, getUserId: 2, visitDay: '09-12-2020', visit: false, score: 0 },

  { id: 16, getUserId: 3, visitDay: '04-12-2020', visit: false, score: 0 },
  { id: 17, getUserId: 3, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 18, getUserId: 3, visitDay: '06-12-2020', visit: true, score: 4 },
  { id: 19, getUserId: 3, visitDay: '07-12-2020', visit: false, score: 0 },
  { id: 20, getUserId: 3, visitDay: '08-12-2020', visit: true, score: 5 },
  { id: 21, getUserId: 3, visitDay: '09-12-2020', visit: false, score: 0 },

  { id: 23, getUserId: 4, visitDay: '04-12-2020', visit: true, score: 5 },
  { id: 24, getUserId: 4, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 25, getUserId: 4, visitDay: '06-12-2020', visit: true, score: 5 },
  { id: 26, getUserId: 4, visitDay: '07-12-2020', visit: false, score: 0 },
  { id: 27, getUserId: 4, visitDay: '08-12-2020', visit: false, score: 0 },
  { id: 28, getUserId: 4, visitDay: '09-12-2020', visit: true, score: 3 },

  { id: 29, getUserId: 5, visitDay: '04-12-2020', visit: false, score: 5 },
  { id: 30, getUserId: 5, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 31, getUserId: 5, visitDay: '06-12-2020', visit: true, score: 5 },
  { id: 32, getUserId: 5, visitDay: '07-12-2020', visit: true, score: 0 },
  { id: 33, getUserId: 5, visitDay: '08-12-2020', visit: false, score: 0 },
  { id: 34, getUserId: 5, visitDay: '09-12-2020', visit: true, score: 3 },

  { id: 35, getUserId: 6, visitDay: '04-12-2020', visit: false, score: 5 },
  { id: 36, getUserId: 6, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 37, getUserId: 6, visitDay: '06-12-2020', visit: true, score: 0 },
  { id: 38, getUserId: 6, visitDay: '07-12-2020', visit: false, score: 1 },
  { id: 39, getUserId: 6, visitDay: '08-12-2020', visit: true, score: 5 },
  { id: 40, getUserId: 6, visitDay: '09-12-2020', visit: true, score: 3 },

  { id: 40, getUserId: 7, visitDay: '04-12-2020', visit: true, score: 5 },
  { id: 41, getUserId: 7, visitDay: '05-12-2020', visit: true, score: 0 },
  { id: 42, getUserId: 7, visitDay: '06-12-2020', visit: true, score: 5 },
  { id: 43, getUserId: 7, visitDay: '07-12-2020', visit: true, score: 5 },
  { id: 44, getUserId: 7, visitDay: '08-12-2020', visit: false, score: 0 },
  { id: 45, getUserId: 7, visitDay: '09-12-2020', visit: true, score: 3 },

  { id: 46, getUserId: 8, visitDay: '04-12-2020', visit: false, score: 5 },
  { id: 47, getUserId: 8, visitDay: '05-12-2020', visit: true, score: 4 },
  { id: 48, getUserId: 8, visitDay: '06-12-2020', visit: false, score: 5 },
  { id: 49, getUserId: 8, visitDay: '07-12-2020', visit: true, score: 0 },
  { id: 50, getUserId: 8, visitDay: '08-12-2020', visit: false, score: 0 },
  { id: 51, getUserId: 8, visitDay: '09-12-2020', visit: true, score: 3 },
];
