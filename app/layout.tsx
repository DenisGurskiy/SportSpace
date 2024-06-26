import type { Metadata } from "next";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthContext";
import { Loader } from "@/components/ui/loader";

export const metadata: Metadata = {
  title: "SportSpace",
  description: "Service for booking sports grounds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-rubik">
        <div className="mx-auto min-h-dvh flex flex-col min-w-[375px]">
          <AuthProvider>
            <Header />
            <Suspense fallback={<Loader />}>
              <main className="w-full mx-auto flex-grow md:mt-[80px] mt-[56px]">
                {children}
              </main>
            </Suspense>
            <Footer />
            <Toaster />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
