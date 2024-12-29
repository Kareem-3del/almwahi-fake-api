import { _mock } from 'src/_mock';

// ----------------------------------------------------------------------

export const JWT_SECRET = 'minimal-secret-key';

export const JWT_EXPIRES_IN = '3 days';

export const _users = [
  {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'Kareem Adel',
    photoURL: _mock.image.avatar(24),
    phoneNumber: _mock.phoneNumber(1),
    country: _mock.countryNames(1),
    address: '90210 Broadway Blvd',
    state: 'Cairo',
    city: 'Cairo',
    zipCode: '94116',
    about: 'I love reading and traveling.',
    role: 'admin',
    isPublic: true,
    //
    email: 'demo@leggeratechs.com',
    password: '@demo1',
  },
];
