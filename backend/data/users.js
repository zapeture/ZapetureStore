import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    surname: 'User',
    phone: '978381469387',
    email: 'adminUser@gmail.com',
    password: bcrypt.hashSync('00000000', 10),
    isAdmin: true,
  },
  {
    name: 'Jessica',
    surname: 'Moyo',
    phone: '98172837',
    email: 'jessica@gmail.com',
    password: bcrypt.hashSync('00000000', 10),
  },
  {
    name: 'Fred',
    surname: 'Bannon',
    phone: '625462457',
    email: 'fred@gmail.com',
    password: bcrypt.hashSync('00000000', 10),
  },
];

export default users;
