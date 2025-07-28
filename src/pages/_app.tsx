import type { AppProps } from "next/app";
import { type NextRouter } from "next/router";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.variable}>
            <RouteProvider>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </RouteProvider>
        </div>
    );
}