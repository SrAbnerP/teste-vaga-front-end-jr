import React, { useState } from "react";

import AppContext from "./AppContext";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const initialProduct: Product = {
  productName: "Product Name",
  descriptionShort: "Product Description",
  photo: "Product Image",
  price: 10.99,
};

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [product, setProduct] = useState<Product>(initialProduct);

  const value = {
    selectedProduct,
    setSelectedProduct,
    product,
    setProduct,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default Provider;
