import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "The Spiritual Capital of India",
    city: "Varanasi, Uttar Pradesh",
    distance: 500,
    address: 'Varanasi, Uttar Pradesh, India',
    price: 79,
    maxGroupSize: 10,
    desc: "World's oldest living city, Varanasi - also known as Kashi (City of Life) and Benaras",
    reviews: [
      {
        name: "Mukesh Kumar",
        rating: 4.6,
      },
      {
         name: "Urjit",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Kullu-Manali",
    city: "Kullu District, H.P",
    distance: 400,
    address: 'Himachal Pradesh, India',
    price: 96,
    maxGroupSize: 8,
    desc: "Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh.",
    reviews: [
      {
        name: "Shubham",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Taj Mahal",
    city: "Agra",
    distance: 500,
    address: 'Agra, Uttar Pradesh, India',
    price: 76,
    maxGroupSize: 8,
    desc: "The Taj Mahal is one of the seven wonders of the world.",
    reviews: [
      {
        name: "Jeewant",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "The Scotland of India",
    city: "Coorg, Karnataka",
    distance: 500,
    address: 'Karnataka, India',
    price: 85,
    maxGroupSize: 8,
    desc: "Coorg is a popular coffee producing hill station.",
    reviews: [
      {
        name: "MNQ",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Blue Seas in India",
    city: "Andaman & Nicobar Islands",
    distance: 500,
    address: 'Andaman & Nicobar Islands, India',
    price: 75,
    maxGroupSize: 8,
    desc: "Blue seas, virgin islands and colonial past with sandy beaches.",
    reviews: [
      {
        name: "Bhupendra Jogi",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "The city of Lakes",
    city: "Udaipur, Rajasthan",
    distance: 500,
    address: 'Rajasthan, India',
    price: 88,
    maxGroupSize: 8,
    desc: "Lakes and Palaces of Udaipur are must to Visit and offers experience luxury in India.",
    reviews: [
      {
        name: "Sallu Bhai",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "The Gateway to Sikkim",
    city: "Gangtok",
    distance: 500,
    address: 'Sikkim, India',
    price: 79,
    maxGroupSize: 8,
    desc: "The town during its bright sunny days offers spectacular views of Mt. Kanchenjunga",
    reviews: [
      {
        name: "ZAA",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Kashmir of South India",
    city: "Munnar, Kerala",
    distance: 500,
    address: 'Kerala, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints.",
    reviews: [
      {
        name: "SMZ",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "India's Own Moonland",
    city: "Leh Ladakh",
    distance: 300,
    address: 'Ladakh Union Territory, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Ladakh is a union territory in the Kashmir region of India.It is world's coldest desert.",
    reviews: [
      {
        name: "Shubham",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "10",
    title: "Beaches, Sunsets and Crazy Nights",
    city: "Goa",
    distance: 500,
    address: 'Goa, India',
    price: 99,
    maxGroupSize: 8,
    desc: "Goa is India's smallest state and known for its eclectic seafood, world-heritage listed architecture.",
    reviews: [
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
