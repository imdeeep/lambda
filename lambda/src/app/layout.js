import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>lambda</title>
        <link rel="icon" href="icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
