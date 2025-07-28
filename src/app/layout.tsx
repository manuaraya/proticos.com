import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Proticos",
    description: "Your app description",
};

export const viewport: Viewport = {
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth`}>
            <body className="bg-primary antialiased">
                <RouteProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </RouteProvider>
            </body>
        </html>
    );
}