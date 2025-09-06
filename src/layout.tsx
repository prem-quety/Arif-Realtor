import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Arif Realtor",
  description: "Real estate made simple",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
