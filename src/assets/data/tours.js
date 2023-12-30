import tourImg01 from "../images/TourImages/tour-img01.jpg";
import tourImg02 from "../images/TourImages/tour-img02.jpg";
import tourImg03 from "../images/TourImages/tour-img03.jpg";
import tourImg04 from "../images/TourImages/tour-img04.jpg";
import tourImg05 from "../images/TourImages/tour-img05.jpg";
import tourImg06 from "../images/TourImages/tour-img06.jpg";
import tourImg07 from "../images/TourImages/tour-img07.jpg";
import tourImg08 from "../images/TourImages/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Bird market",
    city: "Kabul",
    distance: 300,
    price: 8,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Blue Mosque",
    city: "Mazar-e-sharif",
    distance: 400,
    price: 427,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Herat citadel",
    city: "Herat",
    distance: 500,
    price: 861,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Panjsher Mountians",
    city: "Panjsher",
    distance: 500,
    price: 122,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Green Villages",
    city: "Nuristan",
    distance: 500,
    price: 182,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Band-Amir Park",
    city: "Bamyan",
    distance: 500,
    price: 253,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Wazir akbar khan hill",
    city: "Kabul",
    distance: 500,
    price: 4,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Mausoleum of Durrani",
    city: "Kandahar",
    distance: 500,
    price: 498,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
