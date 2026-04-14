import "./globals.css";

export const metadata = {
  title: "Andry Rakotonjanabelo | AI/ML Software Engineer",
  description:
    "Portfolio of Andry Rakotonjanabelo, AI/ML software engineer building accessible, data-driven products and hackathon-winning projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
