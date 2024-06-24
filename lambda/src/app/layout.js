import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>lambda</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
