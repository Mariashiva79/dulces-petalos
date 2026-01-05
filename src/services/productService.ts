
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const productService = {
  getAllProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product`); //
    if (!response.ok) throw new Error('Error al cargar productos');
    return response.json();
  },

  getProductById: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/product/${id}`); //
    if (!response.ok) throw new Error('Error al cargar el detalle');
    return response.json();
  }
};