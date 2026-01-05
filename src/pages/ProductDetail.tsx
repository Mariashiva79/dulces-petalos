import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../types/product';
import { productService } from '../services/productService';
import Breadcrumbs from '../components/Breadcrumbs';
import waterIcon from '../assets/water-icon.svg';
import fertilizerIcon from '../assets/fert-icon.svg';
import './ProductDetail.css';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error cargando el detalle:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <div className="loader">Cargando detalles...</div>;
  if (!product) return <div className="error">No se encontró el producto.</div>;

  return (
    <main className="main-page-container">
      <div className='product-container-wrapper'>
        <Breadcrumbs productName={product.name} />
        
        <section className="product-detail-layout">
          <div className="detail-image-container">
            <img src={product.imgUrl} alt={product.name} className="detail-image" />
          </div>

          <div className="detail-content">
            <header className="detail-heading">
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-subtitle">{product.binomialName}</p>
            </header>

            <p className="detail-price">€{product.price}</p>

            <div className="detail-requirements">
              <div className="requirement-item">
                <img src={waterIcon} alt="" className="requirement-icon" /> 
                <span>Regar {product.wateringsPerWeek} vez por semana</span>
              </div>
              <div className="requirement-item">
                <img src={fertilizerIcon} alt="" className="requirement-icon" />
                <span>Fertilizar con {product.fertilizerType}</span>
              </div>
            </div>

            <button className="add-to-cart-btn">
              Añadir al carrito
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};