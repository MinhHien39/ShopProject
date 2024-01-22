/* eslint-disable @next/next/no-async-client-component */
"use client";
import React, { useState, useEffect } from "react";
interface Item {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
}

const ListCategory: React.FC = () => {
  const [categories, setCategories] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const list = [];
  const fetchCategories = async () => {
    try {
      const response = await fetch("https://localhost:8080/api/Category", {
        method: "GET",
      });
      const category = await response.json();
      console.log(category);

      if (!response.ok) {
        console.log(response);
        list.push(response);
        console.log("Second", list.length);
        // throw new Error('Failed to fetch data');
      }

      const data = (await response.json()) as Item[];
      console.log("Data Json", data);
      setCategories(data);
    } catch (error) {
      console.log(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.categoryId}>{category.categoryName}</li>
      ))}
    </ul>
  );
};
export default ListCategory;
