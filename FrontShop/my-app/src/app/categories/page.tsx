

const CategoryPage = async () => {
  try {
    const response = await fetch("https://localhost:7026/api/Category", {
      method: "GET",
      cache: "no-store",
      mode: "no-cors",
    });
    if (!response.ok) {
      throw new Error("API request failed");
    }
    const data = await response.json();
    console.log("API is Called ", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return(
    <h1>Check</h1>
  )
  
  
};
export default CategoryPage;
