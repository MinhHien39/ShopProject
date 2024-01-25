import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "NextJs . Tutorial",
    template: " ",
  },
  description: "Generate by NextJs",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
        {children}
      </body>
      
    </html>
  );
}
