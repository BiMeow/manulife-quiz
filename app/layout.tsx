import type { Metadata } from "next";
import "./globals.css";
import { ComposeProviders } from "@/utils/ComposeProviders";

export const metadata: Metadata = {
  title: "Manulife | Bao tử bao tuổi",
  description: "Manulife | Bao tử bao tuổi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-dvh antialiased`}>
        <ComposeProviders>{children}</ComposeProviders>
      </body>
    </html>
  );
}
