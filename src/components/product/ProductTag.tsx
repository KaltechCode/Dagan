import Link from "next/link";

// interface Props {
//   tags: ProductTag[];
// }

// export default function ProductTags({ tags }: Props) {
//   if (!tags.length) {
//     return null;
//   }

//   return (
//     <div>
//       <span className="font-medium">Tags:</span>

//       <div className="mt-2 flex flex-wrap gap-2">
//         {tags.map((tag) => (
//           <Link
//             key={tag.id}
//             href={`/shop?tag=${tag.id}`}
//             className="rounded-full border px-3 py-1 text-sm"
//           >
//             {tag.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
