import { ITrending } from "@/types/content/Trending";
import { Product } from "@/types/product";
import { HeroSectionData } from "@/types/ui";

export const trendingData: ITrending[] = [
  {
    category: "T-shirt",
    image: "/images/category/t-shirt.png",
  },
  {
    category: "Sweater",
    image: "/images/category/sweater.png",
  },
  {
    category: "Top",
    image: "/images/category/top.png",
  },
  {
    category: "Dress",
    image: "/images/category/dress.png",
  },
  {
    category: "Swimwears",
    image: "/images/category/swimwear.png",
  },
];

// export const ProductData: Product[] = [
//   {
//     id: 1,
//     name: "Akara Labubu",
//     slug: "akara-labubu",
//     price: 36.0,
//     regularPrice: 36.0,
//     salePrice: 28.0,
//     stockStatus: "avaliable",
//     averageRating: 4.5,
//     description: "Quality akara materials for labubu design and upgrade",
//     shortDescription: "Quality akara materials for labubu design ",
//     images: [
//       {
//         id: 1,
//         src: "/images/product/Vertical-product.png",
//         alt: "ankara title",
//       },
//       {
//         id: 2,
//         src: "/images/product/Vertical.png",
//         alt: "Trouser title",
//       },
//     ],
//     categories: [
//       {
//         id: 1,
//         name: "Native Dress",
//         slug: "Native dress",
//         description: "",
//         parent: 0,
//         count: 0,
//         menuOrder: 0,
//         image: null,
//       },
//     ],
//     type: "simple",
//     featured: false,
//     onSale: false,
//     ratingCount: 0,
//   },
//   {
//     id: 1,
//     name: "Akara Labubu",
//     slug: "akara-labubu",
//     price: 36.0,
//     regularPrice: 36.0,
//     salePrice: 28.0,
//     stockStatus: "avaliable",
//     averageRating: 4.5,
//     description: "Quality akara materials for labubu design and upgrade",
//     shortDescription: "Quality akara materials for labubu design ",
//     images: [
//       {
//         id: 1,
//         src: "/images/product/native-4.png",
//         alt: "ankara title",
//       },
//       {
//         id: 2,
//         src: "/images/product/Vertical.png",
//         alt: "Trouser title",
//       },
//     ],
//     categories: [
//       {
//         id: 1,
//         name: "Native Dress",
//         slug: "Native dress",
//         description: "",
//         parent: 0,
//         count: 0,
//         menuOrder: 0,
//         image: null,
//       },
//     ],
//     type: "simple",
//     featured: false,
//     onSale: false,
//     ratingCount: 0,
//   },
//   // {
//   //   id: 1,
//   //   name: "Akara Labubu",
//   //   slug: "akara-labubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-6.svg",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/Vertical.png",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 1,
//   //   name: "Akara Labubu",
//   //   slug: "akara-labubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-1.png",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/Vertical.png",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 1,
//   //   name: "Akara Labubu",
//   //   slug: "akara-labubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-5.png",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/native-6.svg",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 1,
//   //   name: "Akara Bubu",
//   //   slug: "akara-bubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-3.svg",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/native-4.png",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 1,
//   //   name: "Akara Labubu",
//   //   slug: "akara-labubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-1.png",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/native-2.png",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 1,
//   //   name: "Akara Labubu",
//   //   slug: "akara-labubu",
//   //   price: "36.00",
//   //   regular_price: "36.00",
//   //   sale_price: "28.00",
//   //   stock_status: "avaliable",
//   //   average_rating: "4.5",
//   //   description: "Quality akara materials for labubu design and upgrade",
//   //   short_description: "Quality akara materials for labubu design ",
//   //   images: [
//   //     {
//   //       id: 1,
//   //       src: "/images/product/native-2.png",
//   //       alt: "ankara title",
//   //     },
//   //     {
//   //       id: 2,
//   //       src: "/images/product/native-6.svg",
//   //       alt: "Trouser title",
//   //     },
//   //   ],
//   //   categories: [
//   //     {
//   //       id: 1,
//   //       name: "Native Dress",
//   //       slug: "Native dress",
//   //       description: "",
//   //       parent: 0,
//   //       count: 0,
//   //       menuOrder: 0,
//   //       image: null,
//   //     },
//   //   ],
//   // },
// ];

export const heroSectionData: HeroSectionData = {
  id: 1,

  title: "The Online Grocery Store",

  image: ["/images/banners/hero.png"],

  linkText: "Shop Now",

  link: "/shop",
};
