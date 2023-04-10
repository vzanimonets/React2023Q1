import { rest } from 'msw';

export const handlers = [
  rest.get(`https://dummyjson.com/users`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: 1,
            firstName: 'Terry',
            lastName: 'Medhurst',
            age: 50,
            image: 'https://robohash.org/hicveldicta.png',
          },
          {
            id: 2,
            firstName: 'Sheldon',
            lastName: 'Quigley',
            age: 28,
            image: 'https://robohash.org/doloremquesintcorrupti.png',
          },
          {
            id: 3,
            firstName: 'Terrill',
            lastName: 'Hills',
            age: 38,
            image: 'https://robohash.org/consequunturautconsequatur.png',
          },
          {
            id: 4,
            firstName: 'Miles',
            lastName: 'Cummerata',
            age: 49,
            image: 'https://robohash.org/facilisdignissimosdolore.png',
          },
          {
            id: 5,
            firstName: 'Mavis',
            lastName: 'Schultz',
            age: 38,
            image: 'https://robohash.org/adverovelit.png',
          },
          {
            id: 6,
            firstName: 'Alison',
            lastName: 'Reichert',
            age: 21,
            image: 'https://robohash.org/laboriosamfacilisrem.png',
          },
          {
            id: 7,
            firstName: 'Oleta',
            lastName: 'Abbott',
            age: 31,
            image: 'https://robohash.org/cupiditatererumquos.png',
          },
          {
            id: 8,
            firstName: 'Ewell',
            lastName: 'Mueller',
            age: 29,
            image: 'https://robohash.org/quiaharumsapiente.png',
          },
          {
            id: 9,
            firstName: 'Demetrius',
            lastName: 'Corkery',
            age: 22,
            image: 'https://robohash.org/excepturiiuremolestiae.png',
          },
        ],
        total: 100,
        skip: 0,
        limit: 9,
      })
    );
  }),
  rest.get(`https://dummyjson.com/users/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: 1,
            firstName: 'Terry',
            lastName: 'Medhurst',
            age: 50,
            image: 'https://robohash.org/hicveldicta.png',
          },
          {
            id: 2,
            firstName: 'Sheldon',
            lastName: 'Quigley',
            age: 28,
            image: 'https://robohash.org/doloremquesintcorrupti.png',
          },
          {
            id: 3,
            firstName: 'Terrill',
            lastName: 'Hills',
            age: 38,
            image: 'https://robohash.org/consequunturautconsequatur.png',
          },
          {
            id: 4,
            firstName: 'Miles',
            lastName: 'Cummerata',
            age: 49,
            image: 'https://robohash.org/facilisdignissimosdolore.png',
          },
          {
            id: 5,
            firstName: 'Mavis',
            lastName: 'Schultz',
            age: 38,
            image: 'https://robohash.org/adverovelit.png',
          },
          {
            id: 6,
            firstName: 'Alison',
            lastName: 'Reichert',
            age: 21,
            image: 'https://robohash.org/laboriosamfacilisrem.png',
          },
          {
            id: 7,
            firstName: 'Oleta',
            lastName: 'Abbott',
            age: 31,
            image: 'https://robohash.org/cupiditatererumquos.png',
          },
          {
            id: 8,
            firstName: 'Ewell',
            lastName: 'Mueller',
            age: 29,
            image: 'https://robohash.org/quiaharumsapiente.png',
          },
          {
            id: 9,
            firstName: 'Demetrius',
            lastName: 'Corkery',
            age: 22,
            image: 'https://robohash.org/excepturiiuremolestiae.png',
          },
        ],
        total: 100,
        skip: 0,
        limit: 9,
      })
    );
  }),
  rest.get(`https://dummyjson.com/users/1`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 3,
        firstName: 'Terrill',
        lastName: 'Hills',
        maidenName: 'Hoeger',
        age: 38,
        gender: 'male',
        email: 'rshawe2@51.la',
        phone: '+63 739 292 7942',
        username: 'rshawe2',
        password: 'OWsTbMUgFc',
        birthDate: '1992-12-30',
        image: 'https://robohash.org/consequunturautconsequatur.png',
        bloodGroup: 'A−',
        height: 200,
        weight: 105.3,
        eyeColor: 'Gray',
        hair: {
          color: 'Blond',
          type: 'Very curly',
        },
        domain: 'earthlink.net',
        ip: '205.226.160.3',
        address: {
          address: '560 Penstock Drive',
          city: 'Grass Valley',
          coordinates: {
            lat: 39.213076,
            lng: -121.077583,
          },
          postalCode: '95945',
          state: 'CA',
        },
        macAddress: 'F2:88:58:64:F7:76',
        university: 'University of Cagayan Valley',
        bank: {
          cardExpire: '10/23',
          cardNumber: '3586082982526703',
          cardType: 'jcb',
          currency: 'Peso',
          iban: 'AT24 1095 9625 1434 9703',
        },
        company: {
          address: {
            address: '18 Densmore Drive',
            city: 'Essex',
            coordinates: {
              lat: 44.492953,
              lng: -73.101883,
            },
            postalCode: '05452',
            state: 'VT',
          },
          department: 'Marketing',
          name: 'Lindgren LLC',
          title: 'Mechanical Systems Engineer',
        },
        ein: '48-3951994',
        ssn: '633-89-1926',
        userAgent:
          'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0',
      })
    );
  }),
];
