"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "@/app/products/product.css";
import { useRouter } from "next/router";
import DetailProduct from "./[id]/page";
import { Category } from "../categories/page";
import { get } from "http";
import Link from "next/link";
interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  quantity: number;
  categoryId: number;
  imageUrl: string;
}

const ListProduct: React.FC<{ categorySelected: Category | null }> = ({
  categorySelected,
}) => {
  //const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const getId = categorySelected?.categoryId;
  const fetchProduct = async (getId: number | undefined) => {
    console.log(`Fetching`, getId);
    try {
      const response = await fetch(
        `https://localhost:8080/api/Product/categoryId?categoryId=${getId}`,
        { method: "GET" }
      );
      const allItem = await fetch(`https://localhost:8080/api/Product`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      const dataAll = await allItem.json();
      console.log("Product", data);
      console.log("Fetch Product ", data.categoryId);
      setProducts(data);
      setAllProducts(dataAll);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchAllProduct = async () => {
    try {
      const response = await fetch(`https://localhost:8080/api/Product`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllProduct();
    console.log("category", categorySelected);
    if (categorySelected) {
      fetchProduct(getId);
      
    }
  }, [categorySelected]);
  return (
    <>
      {categorySelected === null ? (
        <div className="product-list">
          {allProducts.map((item) => (
            <div className="product-item">
              <Link
                href={`/products/${item?.productId}`}
                className="product-image"
              >
                <img src={item.imageUrl} alt={item.productName} />
              </Link>
              <div className="product-info">
                <h2>{item.productName}</h2>
                <p>{item.productDescription}</p>
                {/* <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.productId}
              className="product-item"
              onClick={() =>
                console.log("clickItemProduct ", product.productId)
              }
            >
              <Link
                href={`/products/${product.productId}`}
                className="product-image"
              >
                <img src={product.imageUrl} alt={product.productName} />
              </Link>
              <div className="product-info">
                <h2>{product.productName}</h2>
                <p>{product.productDescription}</p>
                {/* <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ListProduct;
