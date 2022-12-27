import admin from "./assets/admin.webp";
import lit from "./assets/literary.webp";
import instaJam from "./assets/instaJam.png";
import eCom from "./assets/eCommerce.png";
import fight from "./assets/fight.webp";
import realEstate from "./assets/real-estate.png";
import hotel from "./assets/hotel.webp";
import memory from "./assets/memory.png";

export const navigation = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "portfolio",
  },
  {
    id: 4,
    name: "contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "Admin Dashboard",
    img: admin,
    languages: "",
    code: "https://github.com/jimjamesjimathy/admin-dashboard",
    demo: "https://admin-dashboard-murex-iota.vercel.app/",
  },
  {
    id: 2,
    title: "Restauraunt Site",
    img: lit,
    code: "https://github.com/jimjamesjimathy/LIT",
    demo: "https://restaurant-site-one.vercel.app/",
  },
  {
    id: 3,
    title: "Social Media App",
    img: instaJam,
    code: "https://github.com/jimjamesjimathy/instaJam",
    demo: "",
  },
  {
    id: 4,
    title: "2 Player Fighting Game",
    img: fight,
    code: "https://github.com/jimjamesjimathy/fightMania",
    demo: "https://fight-mania.vercel.app/",
  },
  {
    id: 5,
    title: "Ecommerce Site",
    img: eCom,
    code: "https://github.com/jimjamesjimathy/e-commerce",
    demo: "",
  },
  {
    id: 6,
    title: "Hotel Booking Site",
    img: hotel,
    code: "https://github.com/jimjamesjimathy/hotel-fullstack",
    demo: "",
  },
  {
    id: 7,
    title: "Memory Game",
    img: memory,
    code: "https://github.com/jimjamesjimathy/memoryJam",
    demo: "https://memory-jam-oqo7.vercel.app/",
  },
];
