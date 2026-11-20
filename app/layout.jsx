import "./globals.css";

export const metadata = {
  title: "ENAMEL Orthodontics — Braces & Clear Aligners",
  description:
    "Explore orthodontic care at ENAMEL Orthodontics, from braces and clear aligners to retainers. Learn what to expect at your first visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&family=Syne:wght@600;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
