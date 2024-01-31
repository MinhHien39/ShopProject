"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/products/[id]/productdetail.css";

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
  const params = useParams();
  const getProductId = params.id;
  console.log("Product Id From ListProduct", getProductId);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    console.log("Get Product Id ", getProductId);
    const fetchProduct = async () => {
      const response = await fetch(
        `https://localhost:8080/api/Product/${getProductId}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        console.log("Error fetching Product");
        return;
      }
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  });
  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img src={product?.imageUrl} alt={product?.productName} />
        </div>
        <div className="product-info">
          <h2>{product?.productName}</h2>
          <p>{product?.productDescription}</p>
          <p>{product?.price}</p>
          <p>{product?.quantity}</p>
        </div>
        <div className="product-action">
            <button type="button" onClick={() => {}}>
              Add Your Favorite
            </button>
            <button type="button" onClick={() => {}}>
              Buy
            </button>
          </div>
      </div>
    </>
  );
};

export default DetailProduct;
