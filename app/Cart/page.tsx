import Image from 'next/image';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // Heart icon
import { FiTrash } from 'react-icons/fi'; // Delete icon

export default function Cart() {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:px-24 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
        {/* Products Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl md:text-xl font-bold mb-6">Bags</h1>
          <div className="flex flex-col gap-6">
            {/* Product Item */}
            <div className="flex flex-col md:flex-row items-center md:justify-between p-4  shadow rounded-lg">
              <div className="flex items-center gap-6">
                <Image
                  src="/c3.png"
                  alt="Product Image"
                  className="rounded-lg"
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, 150px"
                />
                <div>
                  <h1 className="font-semibold text-xl md:text-lg">Library Stool Chair</h1>
                  <h2 className="text-base md:text-sm text-gray-700 mt-1">Asthen Slate / Cobait Bliss</h2>
                  <div className="text-sm md:text-xs text-gray-600 mt-2">
                    <p>Size: L</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4 text-gray-800">
                    <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                    <FiTrash className="text-2xl cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-xl md:text-lg font-semibold mt-4 md:mt-0">MRP: $99</div>
            </div>

            {/* Duplicate Product Item */}
            <div className="flex flex-col md:flex-row items-center md:justify-between p-4  shadow rounded-lg">
              <div className="flex items-center gap-6">
                <Image
                  src="/p3.png"
                  alt="Product Image"
                  className="rounded-lg"
                  width={150}
                  height={150}
                  sizes="(max-width: 768px) 100px, 150px"
                />
                <div>
                  <h1 className="font-semibold text-xl md:text-lg">Library Stool Chair</h1>
                  <h2 className="text-base md:text-sm text-gray-700 mt-1">Asthen Slate / Cobait Bliss</h2>
                  <div className="text-sm md:text-xs text-gray-600 mt-2">
                    <p>Size: L</p>
                    <p>Quantity: 1</p>
                  </div>
                  <div className="flex gap-4 mt-4 text-gray-800">
                    <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                    <FiTrash className="text-2xl cursor-pointer hover:text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-xl md:text-lg font-semibold mt-4 md:mt-0">MRP: $99</div>
            </div>
          </div>
        </div>

    {/* Summary Section */}
    <div className="lg:w-[400px] h-fit rounded-lg border text-gray-900 shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-6">Summary</h2>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">$198.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Estimated Delivery & Handling</span>
        <span className="text-cyan-600">Free</span>
      </div>
      <div className="h-[1px] w-full bg-gray-200" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>$198.00</span>
      </div>
    </div>
    <button className="w-full mt-6 h-12 text-base bg-cyan-600 hover:bg-cyan-700 text-white rounded-full inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
      Member Checkout
    </button>
  </div>
      </div>
    </div>
  );
}





// "use client"

// import Image from "next/image"
// import { Heart, Trash2 } from 'lucide-react'

// export default function ShoppingCart() {
//   return (
//     <div className="min-h-screen bg-gray-50/50 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Products Section */}
//           <div className="flex-1">
//             <h1 className="text-2xl font-semibold mb-6">Bag</h1>
//             <div className="space-y-4">
//               {[1, 2].map((item) => (
//                 <div key={item} className="rounded-lg border bg-white text-gray-900 shadow-sm p-6">
//                   <div className="flex flex-col md:flex-row md:items-center gap-6">
//                     <div className="relative w-24 h-24 md:w-32 md:h-32">
//                       <Image
//                         src="/placeholder.svg?height=128&width=128"
//                         alt="Product"
//                         fill
//                         className="rounded-lg object-cover"
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h3 className="font-medium text-lg">Library Stool Chair</h3>
//                           <p className="text-gray-600 mt-1">Asthen Slate / Cobalt Bliss</p>
//                           <div className="mt-2 space-y-1 text-sm text-gray-500">
//                             <p>Size: L</p>
//                             <p>Quantity: 1</p>
//                           </div>
//                         </div>
//                         <p className="font-medium">MRP: $99.00</p>
//                       </div>
//                       <div className="flex gap-4 mt-4">
//                         <button className="p-2 hover:text-cyan-600 transition-colors">
//                           <Heart className="w-5 h-5" />
//                         </button>
//                         <button className="p-2 hover:text-red-600 transition-colors">
//                           <Trash2 className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Summary Section */}
//           <div className="lg:w-[400px] h-fit rounded-lg border bg-white text-gray-900 shadow-sm p-6">
//             <h2 className="text-xl font-semibold mb-6">Summary</h2>
//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Subtotal</span>
//                 <span className="font-medium">$198.00</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Estimated Delivery & Handling</span>
//                 <span className="text-cyan-600">Free</span>
//               </div>
//               <div className="h-[1px] w-full bg-gray-200" />
//               <div className="flex justify-between text-lg font-semibold">
//                 <span>Total</span>
//                 <span>$198.00</span>
//               </div>
//             </div>
//             <button className="w-full mt-6 h-12 text-base bg-cyan-600 hover:bg-cyan-700 text-white rounded-full inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none">
//               Member Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

