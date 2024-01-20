import type { Metadata } from "next";

export const metadata : Metadata = {
  title : {
    absolute: "",
    default: "NextJs . Tutorial",
    template:" ",
  },
  description:"Generate by NextJs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header> */}
        
        {children}
      </body>
      {/* <footer
        style={{ backgroundColor: "ghostwhite", padding: "1rem" }}
      >Footer</footer> */}
    </html>
  );
}
