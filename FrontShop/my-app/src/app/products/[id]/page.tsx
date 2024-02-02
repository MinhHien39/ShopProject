"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "@/app/products/[id]/productdetail.css";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

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
      <div className="container">
        {product && (
          <Card
            shadow="sm"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="d-flex justify-content-center">
              <Image
                shadow="sm"
                radius="lg"
                width="350px"
                height="250px"
                alt={product.productName}
                className="w-full object-cover border border-gray-300 justify-content-center"
                src={product.imageUrl}
              />
            </CardBody>
            <CardBody className="p-0">
              <b>{product.productName}</b>
              <p className="text-default-500 mt-2">{product.price}</p>
              <p className="text-sm text-gray-500 mt-2">
                {product.productDescription}
              </p>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <p>Amout: {product.quantity}</p>
              
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
};

export default DetailProduct;
