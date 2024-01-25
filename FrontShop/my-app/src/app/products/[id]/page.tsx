'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  quantity: number;
  categoryId: number;
  imageUrl: string;
}

const DetailProduct: React.FC<{}> = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null); // Store single product
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:8080/api/Product/${productId}` , {
          method: 'GET',
        });
        if (!response.ok) {
          //throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data); // Set the fetched product
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading product...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product ? (
        <div>
          {/* Display product details using product.property */}
          <h2>{product.productName}</h2>
          <p>{product.productDescription}</p>
          {/* ... other product details ... */}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default DetailProduct;