import "./globals.css";

export const metadata = {
  title: "Pricing Component with Toggle | Frontend Mentor Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
