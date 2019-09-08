const SHOP_DATA = [
    {
        id: 1,
        title: 'תכני הקורס',
        routeName: 'java',
        items: [
            {
                id: 1,
                name: 'מבוא לתכנות מונחה עצמים',
                imageUrl: 'data:image/jpeg;base64,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',
                time: '6 דקות'
            },
            {
                id: 2,
                name: 'הורשה חלק א',
                imageUrl: 'https://i.vimeocdn.com/video/670448287_640.jpg',
                time: '5 דקות'
            },
            {
                id: 3,
                name: 'הורשה חלק ב',
                imageUrl: 'https://i.vimeocdn.com/video/670448287_640.jpg',
                time: '6 דקות'
            },
            {
                id: 4,
                name: 'פולימורפיזם',
                imageUrl: 'https://stackify.com/wp-content/uploads/2017/07/OOP-Concepts-CSharp-Header-793x397.jpg',
                time: '7 דקות'
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                time: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                time: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                time: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                time: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                time: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                time: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                time: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                time: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                time: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                time: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                time: 160
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                time: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                time: 200
            }
        ]
    },
    {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                time: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                time: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                time: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                time: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                time: 185
            }
        ]
    },
    {
        id: 4,
        title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 23,
                name: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                time: 25
            },
            {
                id: 24,
                name: 'Floral Blouse',
                imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                time: 20
            },
            {
                id: 25,
                name: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                time: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                time: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                time: 45
            },
            {
                id: 28,
                name: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                time: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                time: 20
            }
        ]
    },
    {
        id: 5,
        title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 30,
                name: 'Camo Down Vest',
                imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                time: 325
            },
            {
                id: 31,
                name: 'Floral T-shirt',
                imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                time: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                time: 25
            },
            {
                id: 33,
                name: 'Pink T-shirt',
                imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                time: 25
            },
            {
                id: 34,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                time: 40
            },
            {
                id: 35,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                time: 25
            }
        ]
    }
];

export default SHOP_DATA;