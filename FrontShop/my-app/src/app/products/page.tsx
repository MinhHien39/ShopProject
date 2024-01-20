import Link from "next/link"

export default function ProductList() {
  const productId = 100;
  return (
    <>
    <Link href ='/'>Home</Link>
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  )
} 