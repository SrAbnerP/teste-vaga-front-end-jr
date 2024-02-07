const fetchProducts = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Erro ao carregar os produtos:", error);
    return [];
  }
};

export default fetchProducts;
