// import React from 'react';
// import Image from 'next/image';

// interface CategoryProps {
//   image: string;
//   name: string;
//   productCount: string;
// }

// export default function Category() {
//   const categories: CategoryProps[] = [
//     {
//       image: '/c1.png',
//       name: 'Wing Chair',
//       productCount: '3584',
//     },
//     {
//       image: '/c2.png',
//       name: 'Wooden Chair',
//       productCount: '157',
//     },
//     {
//       image: '/c3.png',
//       name: 'Desk Chair',
//       productCount: '154',
//     },
//   ];

//   return (
//     <div className="px-4 sm:px-8 md:px-48 py-8">
//       <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition duration-300"
//             style={{ height: '300px' }} // Ensuring container has a defined height
//           >
//             {/* Image Section */}
//             <Image
//               src={category.image}
//               alt={category.name}
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full object-cover"
//             />

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

//             {/* Text Always Visible Under the Image */}
//             <div className="absolute bottom-4 left-4 z-10 text-white">
//               <h2 className="font-semibold text-lg">{category.name}</h2>
//               <p className="text-sm">{category.productCount} products</p>
//             </div>

//             {/* Additional Click Hover Effect */}
//             <button className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               Explore
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  image: string;
  name: string;
  productCount: string;
}

export default function Category() {
  const categories: CategoryProps[] = [
    {
      image: '/c1.png',
      name: 'Wing Chair',
      productCount: '3584',
    },
    {
      image: '/c2.png',
      name: 'Wooden Chair',
      productCount: '157',
    },
    {
      image: '/c3.png',
      name: 'Desk Chair',
      productCount: '154',
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-48 py-8">
      <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition duration-300"
            style={{ height: '300px', position: 'relative' }}
          >
            {/* Image Section */}
            <Image
              src={category.image}
              alt={category.name}
              fill // Replaces layout="fill"
              style={{ objectFit: 'cover' }} // Replaces objectFit
              className="rounded-t-lg"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-opacity duration-300"></div>

            {/* Text Always Visible Under the Image */}
            <div className="absolute bottom-4 left-4 z-10 text-white">
              <h2 className="font-semibold text-lg">{category.name}</h2>
              <p className="text-sm">{category.productCount} products</p>
            </div>

            {/* Additional Click Hover Effect */}
            <button className="absolute bottom-4 right-4 bg-sky-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


