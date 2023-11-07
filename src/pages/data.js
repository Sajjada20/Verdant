import { fruit, aardbei, blueberries, kiwi, orange, orang, watermelon } from "../assets/assets";
import {brocollip, carrotp, grapsp, kiwip, letucep, orangep, pineapplep, potatop, strawberriesp, watermelonp} from '../assets/fruitP/fruit'



export const HomeInfo = {
    UpperSection: {
        tittleMini: "Imaginary Fruit Market",
        MainTittle: "Verdant",
        paragraaf: "Welcome to Verdant, your destination for imaginary fruit fun! Explore our virtual fruit aisles and enjoy the colorful world of fruity imagination. Shop, have fun, and let your creativity run wild!",
        button: "buy now",
        image: fruit,
    },
    MiddleSection: {
        fruits: [
            {
                name: "Strawberries",
                image: aardbei,
                fact: 'Strawberries are the only fruit with their seeds on the outside.',
                color: "#b91c1c",
            },
            {
                name: "kiwi",
                image: kiwi,
                fact: 'Kiwi skin is edible and nutritious.',
                color: "#166534",
            },
            {
                name: "orange",
                image: orang,
                fact: 'Oranges can float in water.',
                color: "#ea580c",
            },
        ]
    },
    LowerSection: {
        MainTittle: 'Eat a bannana for a healty snack',
        paragraaf: 'You should eat at least five serves of vegetables and two serves of fruit each day. Choose differebt colours and varieties.',
        image: orange,
        
        section: [
            {
                number: '150+',
                text: 'global franchises',
                color: "#15803d",
            },
            {
                number: '150%',
                text: 'orgnic product',
                color: "#15803d",
            },
            {
                number: '97%',
                text: 'happy customer',
                color: "#15803d",
            },
            {
                number: '10M',
                text: 'monthly sales',
                color: "#15803d",
            },
        ],
        second: {
            MainTittle: "Enjoy some blueberries for a burst of flavor",
            paragraaf: 'Blueberries are a delicious and nutritious snack, known for their antioxidant properties and sweet taste.',
            image: blueberries,
            section: [
                {
                    number: '120+',
                    text: 'blueberry farms',
                    color: "#1d4ed8",
                },
                {
                    number: '190%',
                    text: 'natural goodness',
                    color: "#1d4ed8",
                },
                {
                    number: '88%',
                    text: 'satisfied customers',
                    color: "#1d4ed8",
                },
                {
                    number: '12M',
                    text: 'annual harvest',
                    color: "#1d4ed8",
                },
            ],
        },        
        third: {
            MainTittle: "Refresh with a slice of juicy watermelon",
            paragraaf: "Watermelon is a hydrating and sweet fruit that's perfect for staying cool and refreshed, especially on a hot day.",
            image: watermelon,
            section: [
                {
                    number: '100+',
                    text: 'watermelon farms',
                    color: "#059669",
                },
                {
                    number: '220%',
                    text: 'natural hydration',
                    color: "#059669",
                },
                {
                    number: '95%',
                    text: 'delighted consumers',
                    color: "#1d4ed8",
                },
                {
                    number: '20M',
                    text: 'annual harvest',
                    color: "#ff4a57",
                },
            ],
        }
        
    }
}



export const ShopInfo = [
    {
        id: 0,
        name: "watermelon",
        price: '7.99',
        image: watermelonp,
        description: "Watermelons are a delicious and refreshing fruit that's perfect for staying hydrated. They are low in calories and high in vitamins A and C. Watermelons also contain antioxidants that can help protect your cells from damage."
    },
    {
        id: 1,
        name: "strawberry",
        price: '2.99',
        image: strawberriesp,
        description: "Strawberries are packed with vitamin C and antioxidants. They are known for their sweet and juicy flavor. Strawberries can support heart health, boost the immune system, and provide essential nutrients for overall well-being."
    },
    {
        id: 2,
        name: "orange",
        price: '4.49',
        image: orangep,
        description: "Oranges are a great source of vitamin C, which is essential for a strong immune system. They are also rich in dietary fiber, helping with digestion, and they contain antioxidants that promote healthy skin."
    },
    {
        id: 3,
        name: "broccoli",
        price: '1.99',
        image: brocollip,
        description: "Broccoli is a nutrient powerhouse. It's high in fiber, vitamins, and minerals. Broccoli can help reduce the risk of chronic diseases, support digestion, and contribute to overall health and well-being."
    },
    {
        id: 4,
        name: "lettuce",
        price: '2.49',
        image: letucep,
        description: "Lettuce is a low-calorie vegetable that's a staple in salads. It's a good source of vitamins and minerals, such as vitamin K, which is important for bone health. Lettuce can help you maintain a healthy diet."
    },
    {
        id: 5,
        name: "grapes",
        price: '6.99',
        image: grapsp,
        description: "Grapes are rich in antioxidants, including resveratrol, which may have various health benefits. They are a sweet and convenient snack, and their nutrients support heart health and may help protect against certain diseases."
    },
    {
        id: 6,
        name: "carrot",
        price: '1.49',
        image: carrotp,
        description: "Carrots are a great source of beta-carotene, which is converted into vitamin A in the body. Vitamin A is essential for good vision, a healthy immune system, and skin health. Carrots are a nutritious addition to your diet."
    },
    {
        id: 7,
        name: "potato",
        price: '3.29',
        image: potatop,
        description: "Potatoes are a versatile and filling vegetable. They provide carbohydrates, fiber, and a variety of vitamins and minerals. Potatoes can be a nutritious part of balanced meals and offer sustained energy."
    },
    {
        id: 8,
        name: "kiwi",
        price: '4.99',
        image: kiwip,
        description: "Kiwis are a rich source of vitamin C and dietary fiber. They support the immune system, aid digestion, and contribute to healthy skin. Kiwis have a unique, sweet-tart flavor that makes them a delightful addition to your diet."
    },
    {
        id: 9,
        name: "pineapple",
        price: '5.79',
        image: pineapplep,
        description: "Pineapples are a tropical fruit known for their sweet and tangy taste. They contain bromelain, an enzyme with potential anti-inflammatory and digestive benefits. Pineapples are also rich in vitamin C and manganese."
    },
];







export const EachItemSection = {
    0: [
        {
            number: '100+',
            text: 'watermelon farms',
            color: "#059669",
        },
        {
            number: '220%',
            text: 'natural hydration',
            color: "#059669",
        },
        {
            number: '95%',
            text: 'delighted consumers',
            color: "#1d4ed8",
        },
        {
            number: '20M',
            text: 'annual harvest',
            color: "#ff4a57",
        },
    ],
    1: [
        {
            number: '50+',
            text: 'strawberry farms',
            color: "#ff5733",
        },
        {
            number: '150%',
            text: 'sweetness level',
            color: "#ff5733",
        },
        {
            number: '75%',
            text: 'redness factor',
            color: "#ff5733",
        },
        {
            number: '10K',
            text: 'pints picked daily',
            color: "#ff5733",
        },
    ],
    2: [
        {
            number: '30+',
            text: 'orange orchards',
            color: "#ffa500",
        },
        {
            number: '120%',
            text: 'vitamin C content',
            color: "#ffa500",
        },
        {
            number: '50%',
            text: 'juiciness rating',
            color: "#ffa500",
        },
        {
            number: '5M',
            text: 'oranges sold annually',
            color: "#ffa500",
        },
    ],
    3: [
        {
            number: '15+',
            text: 'broccoli fields',
            color: "#228b22",
        },
        {
            number: '90%',
            text: 'nutrient-rich',
            color: "#228b22",
        },
        {
            number: '60%',
            text: 'greenness factor',
            color: "#228b22",
        },
        {
            number: '1M',
            text: 'pounds harvested yearly',
            color: "#228b22",
        },
    ],
    4: [
        {
            number: '60+',
            text: 'lettuce farms',
            color: "#33cc33",
        },
        {
            number: '85%',
            text: 'freshness rating',
            color: "#33cc33",
        },
        {
            number: '40%',
            text: 'crispiness index',
            color: "#33cc33",
        },
        {
            number: '1B',
            text: 'leaves served annually',
            color: "#33cc33",
        },
    ],
    5: [
        {
            number: '40+',
            text: 'grape vineyards',
            color: "#9933ff",
        },
        {
            number: '110%',
            text: 'sweetness level',
            color: "#9933ff",
        },
        {
            number: '70%',
            text: 'bunches harvested yearly',
            color: "#9933ff",
        },
        {
            number: '500K',
            text: 'gallons of wine produced',
            color: "#9933ff",
        },
    ],
    6: [
        {
            number: '25+',
            text: 'carrot fields',
            color: "#ff9933",
        },
        {
            number: '70%',
            text: 'crunchiness',
            color: "#ff9933",
        },
        {
            number: '45%',
            text: 'orange factor',
            color: "#ff9933",
        },
        {
            number: '500K',
            text: 'pounds sold yearly',
            color: "#ff9933",
        },
    ],
    7: [
        {
            number: '70+',
            text: 'potato farms',
            color: "#996633",
        },
        {
            number: '75%',
            text: 'starchiness',
            color: "#996633",
        },
        {
            number: '50%',
            text: 'earthiness factor',
            color: "#996633",
        },
        {
            number: '2M',
            text: 'potatoes harvested annually',
            color: "#996633",
        },
    ],
    8: [
        {
            number: '20+',
            text: 'kiwi orchards',
            color: "#33cc99",
        },
        {
            number: '130%',
            text: 'vitamin C content',
            color: "#33cc99",
        },
        {
            number: '55%',
            text: 'fuzziness index',
            color: "#33cc99",
        },
        {
            number: '100K',
            text: 'kiwis picked each season',
            color: "#33cc99",
        },
    ],
    9: [
        {
            number: '35+',
            text: 'pineapple plantations',
            color: "#ffcc00",
        },
        {
            number: '90%',
            text: 'tropical sweetness',
            color: "#ffcc00",
        },
        {
            number: '65%',
            text: 'tanginess factor',
            color: "#ffcc00",
        },
        {
            number: '500K',
            text: 'pineapples sold yearly',
            color: "#ffcc00",
        },
    ],
};





export const  ShopTitle = {
    title: "our purpose is to deliver fresh fruit to you",
    paragraaf: 'fruits and vegetables contain many vitamins and minerals that are good for your health. these include vitamins',
    items: [
        {
            title: "Order your fruit",
            paragraaf: "A serve of fruit is about one medium piece",
        },
        {
            title: "delivery and pickup",
            paragraaf: "a serve of vegetables is about one cup of raw",
        },
    ]
}






export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "/content",
        },
        {
          name: "How it Works",
          link: "/how-it-works",
        },
        {
          name: "Create",
          link: "/create",
        },
        {
          name: "Explore",
          link: "/explore",
        },
        {
          name: "Terms & Services",
          link: "/terms-and-services",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "/help-center",
        },
        {
          name: "Partners",
          link: "/partners",
        },
        {
          name: "Suggestions",
          link: "/suggestions",
        },
        {
          name: "Blog",
          link: "/blog",
        },
        {
          name: "Newsletters",
          link: "/newsletters",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "/our-partner",
        },
        {
          name: "Become a Partner",
          link: "/become-a-partner",
        },
        {
          name: "Sajjad",
          link: "/sajjad",
        },
      ],
    },
  ];



export const Website_Name = 'Sajjad' /* name (string) */