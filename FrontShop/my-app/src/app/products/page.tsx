"use client";
import React, { useEffect, useState } from "react";
import "@/app/products/product.css";
import { useRouter } from "next/router";
import DetailProduct from "./[id]/page";
interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  quantity: number;
  categoryId: number;
  imageUrl: string;
}
interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}

const ListProduct: React.FC<{ categorySelected: any }> = (categorySelected) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const id = categorySelected;

  // const handleProductClick = (product: Product) => {
  //   router.push(`/detail-product/${product.productId}`);
  // };
  const fetchProduct = async (id: any) => {
    console.log(`Fetching`, id);
    let url = `https://localhost:8080/api/Product`;
    if (typeof id !== "undefined" && typeof id === "number") {
      console.log(`Fetching ASD `, url);
      url += `/categoryId?categoryId=${id}`;
      
    }
    try {
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      
      const data = await response.json();
      console.log("Producdt", data);
      if(data.categoryId === id){
        console.log("Fetch Product " , data.categoryId);
        setProducts(data);
      }
      

      // const data = await response.json();
      // setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("category", categorySelected);
    if (categorySelected) {
      fetchProduct(categorySelected);
    }
  }, [categorySelected]);

  return (
    <>
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.productId}
              className="product-item"
              // onClick={() =>
              //   console.log(
              //     "product is " + product.productId,
              //     product.categoryId
              //   )
              // }
            >
              <div className="product-image">
                <img src={product.imageUrl} alt={product.productName} />
              </div>
              <div className="product-info">
                <h2>{product.productName}</h2>
                <p>{product.productDescription}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ListProduct;
