import type {Metadata} from "next";
import NextAuthProvider from "@/app/components/authprovider";
import "./globals.css";
import Header from "@/app/components/header";

export const metadata: Metadata = {
    title: "Workout app",
    description: "Developed by Buerdel development",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header/>
                <main>{children}</main>

            </body>
        </html>
    );
}
