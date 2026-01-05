import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

export const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.binomialName.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="loader">Cargando catálogo...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="main-content">
      <SearchBar value={search} onChange={setSearch} />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="no-results">No se han encontrado resultados para "{search}"</p>
        )}
      </div>
    </main>
  );
};