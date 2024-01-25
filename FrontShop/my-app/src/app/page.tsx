"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import ListCategory from "./categories/page";
import "@/app/globals.css";
import { useEffect, useState } from "react";
import ListProduct from "./products/page";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  categoryId: number;
  imageUrl: string;
}
interface Item {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Item | null>(null);
  const [products, setProducts] = useState<Product []>([]);

  const [isLoading, setIsLoading] = useState(false);


  // useEffect(() => {
  //   console.log("Fetching Category Successfully");
  //   if (selectedCategory) {
  //     fetchProducts(selectedCategory.categoryId);
      
  //   }
  // }, [selectedCategory]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="left-main">
          <ListCategory
            onCategorySelected={(category) => setSelectedCategory(category)}
          />
        </div>
        <div className="center-main">
          <ListProduct categorySelected={selectedCategory}
          />
        </div>
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
};

export default CategoryPage;
