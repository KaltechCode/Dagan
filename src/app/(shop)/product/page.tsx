// "use client";

// import { useAddToCartMutation } from "@/redux/api/cartApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// export default asyncfunction ProductCard() {
//   const dispatch = useAppDispatch();

//   const [addToCart] = useAddToCartMutation();

//   await addToCart({
//     productId: product.id,
//     quantity,
//     variationId,
//     attributes,
//   }).unwrap();

//   return (
//     <>

//       <button
//         onClick={() =>
//           dispatch(
//             addToCart({
//               productId: 1,

//               name: "Nike",

//               slug: "nike",

//               price: 200,

//               regularPrice: 250,

//               quantity: 1,

//               image: "",

//               stockQuantity: 5,

//               stockStatus: "instock",
//             }),
//           )
//         }
//       >
//         Add To Cart
//       </button>
//     </>
//   );
// }
