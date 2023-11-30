import { AuthContextProvider } from "@/context/context";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "@/jotai/jotai";
import Container from "@/components/containers/container";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Datareum",
  description: "The next-gen storage solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthContextProvider>
          <Providers>
            <Container>{children}</Container>
          </Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
