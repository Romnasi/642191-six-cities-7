const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'apartment-01.jpg',
    price: 120,
    rating: 4.6,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'I live on a lovely street that is a 15-min bike- or tram ride into the heart of Amsterdam, local shops and cafes within short walking distance, the serene Westerpark just around the corner',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Patio or balcony', 'Coffee machine', 'Hair dryer'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Iris',
    },
    id: 2,
    images: ['room.jpg', 'studio-01.jpg', 'apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'studio-photos.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'apartment-02.jpg',
    price: 80,
    rating: 4.9,
    title: 'Welcome to my cosy, spacious, plant-filled home',
    type: 'hotel',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'This small but cosy studio offers all amenities you need for a stay in Amsterdam! It\'s located in the heart of the famous Jordaan district, in the old city center and within the most beautiful area of the canal belt.',
    goods: ['Waterfront', 'Kitchen', 'Microwave', 'Patio or balcony', 'Coffee machine', 'Wifi'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: false,
      name: 'Elisabeth',
    },
    id: 3,
    images: ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'apartment-02.jpg',
    price: 150,
    rating: 4.6,
    title: 'Private room in guest suite hosted by Elisabeth',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Beautiful and characteristic 1-room B&B studio with private bathroom, toilet and kitchenette on the second floor of an old Dutch building (1886) in vibrant neighbourhood De Pijp, central Amsterdam.',
    goods: ['Dedicated workspace', 'Refrigerator', 'Cable TV', 'Patio or balcony', 'Coffee machine', 'Microwave'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 88,
      isPro: true,
      name: 'Patrick',
    },
    id: 4,
    images: ['studio-01.jpg', 'studio-photos.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'apartment-03.jpg',
    price: 230,
    rating: 4.4,
    title: 'Private room in condominium hosted by Patrick',
    type: 'room',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very bright apartment located on the Da Costakade canal with amazing views. The apartment is located between the Jordaan and Oud-West, and has all you need.',
    goods: ['TV', 'Wifi', 'Washer', 'Patio or balcony', 'Waterfront'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 14,
      isPro: true,
      name: 'Caspar',
    },
    id: 5,
    images: ['studio-01.jpg', 'studio-photos.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'apartment-03.jpg',
    price: 140,
    rating: 4.4,
    title: 'Entire apartment hosted',
    type: 'house',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very bright apartment located on the Da Costakade canal with amazing views. The apartment is located between the Jordaan and Oud-West, and has all you need.',
    goods: ['TV', 'Wifi', 'Washer', 'Patio or balcony', 'Waterfront'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 15,
      isPro: true,
      name: 'Caspar',
    },
    id: 55,
    images: ['studio-01.jpg', 'studio-photos.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'apartment-02.jpg',
    price: 170,
    rating: 4.4,
    title: 'Very bright apartment',
    type: 'house',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Very bright apartment located on the Da Costakade canal with amazing views. The apartment is located between the Jordaan and Oud-West, and has all you need.',
    goods: ['TV', 'Wifi', 'Washer', 'Patio or balcony', 'Waterfront'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 344,
      isPro: true,
      name: 'Caspar',
    },
    id: 67,
    images: ['studio-01.jpg', 'studio-photos.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'apartment-01.jpg',
    price: 190,
    rating: 4.4,
    title: 'Cool apartment hosted',
    type: 'room',
  },
];
