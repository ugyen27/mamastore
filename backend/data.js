import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'ugyen',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'sonam',
      email: 'sonam@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Vitamin Axions',
      slug: 'vitamin-axions',
      category: 'vitamins',
      image: '/images/v1.png',
      price: 120,
      countInStock: 10,
      brand: 'HighQuality',
      rating: 4.5,
      numReviews: 5,
      description:
        'The Recommended Dietary Allowance (RDA) for vitamin A is 900 mcg and 700 mcg per day for men and women, respectively. This intake level is easy to reach if you consume plenty of whole foods ( 28 ).',
    },
    {
      // _id: '2',
      name: 'N10-Capsule',
      slug: 'N10capsule',
      category: 'tablets',
      image: '/images/t3.jpg',
      price: 250,
      countInStock: 0,
      brand: 'HighQuality',
      rating: 4.0,
      numReviews: 12,
      description:
        'TMeet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    },
    {
      // _id: '3',
      name: 'Paracetomol',
      slug: 'paracetomol',
      category: 'tablets',
      image: '/images/t7.png',
      price: 25,
      countInStock: 15,
      brand: 'HighQuality',
      rating: 4.5,
      numReviews: 7,
      description:
        'Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever).Its typically used to relieve mild or moderate pain, such as headaches, toothache or sprains, and reduce fevers caused by illnesses',
    },
    {
      // _id: '4',
      name: 'Pond Lotion',
      slug: 'pond-lotion',
      category: 'tablets',
      image: '/images/l1.jpg',
      price: 100,
      countInStock: 20,
      brand: 'HighQuality',
      rating: 4.5,
      numReviews: 15,
      description:
        'The Recommended Dietary Allowance (RDA) for vitamin A is 900 mcg and 700 mcg per day for men and women, respectively. This intake level is easy to reach if you consume plenty of whole foods ( 28 ).',
    },
  ],
};

export default data;
