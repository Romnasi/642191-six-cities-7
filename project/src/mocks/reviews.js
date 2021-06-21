const AVATAR_URL = 'https://i.pravatar.cc/108';

export const reviews = [
  {
    comment: 'I had a great stay and the hosts were amazing. Excellent location and a very comfortable place to stay. If you’re looking for a spot in Amsterdam this is a very safe choice.',
    date: '2020-02-04T12:11:00.569Z',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 55,
      isPro: true,
      name: 'Mike',
    },
  },
  {
    comment: 'Really nice little studio for one or two people.',
    date: '2021-07-02T11:11:07.569Z',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 88,
      isPro: false,
      name: 'Alex',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 21,
      isPro: false,
      name: 'Max',
    },
  },
];
