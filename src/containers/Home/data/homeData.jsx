import { faker } from '@faker-js/faker';
export const shoesTrending = [
  {
    _id: faker.datatype.uuid(),
    name: 'Adidas Prophere',
    alias: 'adidas-prophere',
    price: 350,
    description: 'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    shortDescription: 'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    image: 'https://shop.cyberlearn.vn/images/adidas-prophere.png',
  },
  {
    _id: faker.datatype.uuid(),
    name: 'Adidas Prophere Black White',
    alias: 'adidas-prophere-black-white',
    price: 450,
    description: 'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.',
    shortDescription: 'The midsole contains 20% more Boost for an amplified Boost feeling.',
    image: 'https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png',
  },
  {
    _id: faker.datatype.uuid(),
    name: 'Adidas Super Star Red',
    alias: 'adidas-super-star-red',
    price: 465,
    description: 'The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n',
    shortDescription: 'The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n',
    quantity: 542,
    image: 'https://shop.cyberlearn.vn/images/adidas-super-star-red.png',
  },
];
