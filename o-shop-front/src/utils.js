

export const getProductsById = (products, id) => (
  
    products.filter(product => product.category == id)
);