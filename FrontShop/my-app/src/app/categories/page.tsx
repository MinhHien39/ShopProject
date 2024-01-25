/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useState, useEffect } from "react";
import "@/app/categories/category.css";

export interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}

const ListCategory: React.FC<{
  onCategorySelected: (category: Category) => void;
}> = ({ onCategorySelected }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://localhost:8080/api/Category", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul>
      {categories.map((itemCategory) => (
        <li
          key={itemCategory.categoryId}
          onClick={() => onCategorySelected(itemCategory)}
          className={
            selectedCategory?.categoryId === itemCategory.categoryId
              ? "selected"
              : ""
          }
        >
          {itemCategory.categoryName}
        </li>
      ))}
    </ul>
  );
};

export default ListCategory;
