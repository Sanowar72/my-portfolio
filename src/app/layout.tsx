import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Sanowar Alam | Frontend Developer",
  description: "Frontend Developer specializing in React Native & React.js. 3+ years building scalable mobile and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
