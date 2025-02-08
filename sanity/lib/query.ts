export const queries = `
{
  "products": *[_type == "products"]{
    _id,
    title,
    description,
    price,
    inventory,
    badge,
    "imageUrl": image.asset->url,
    "dimensions": dimensions { 
      height,
      width,
      depth
    }
  },
  "categories": *[_type == "categories"]{
    _id,
    title,
    "productsCount": count(*[_type == "product" && references(^._id)])
  }
}
`;
