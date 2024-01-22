//import ListCategory from "./categories/page";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ListCategory from "./categories/page";

interface Item {
  categoryName: string;
  categoryDescription: string;
}
const CategoryPage = async () => {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://localhost:7026/api/Category", {
  //       method: "GET",
  //       cache: "no-store",
  //       mode: "no-cors",
  //     });
  //     if (!response.ok) {
  //       throw new Error("API request failed");
  //     }
  //     const data = await response.json();
  //     console.log("API is Called ", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  console.log("Check Call API");
  return (
    <div>
      <div className="flex justify-between items-center ">
        <Header />
      </div>
      <div className="flex">
        <ListCategory />
      </div>
      <div></div>
    </div>
  );
};
export default CategoryPage;
