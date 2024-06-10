import "./globals.css";
import type { Metadata } from "next";
import RecoilRootWrapper from "./RecoilRootWrapper";
import { FontClassNames } from "@/styles/fonts";
import AuthProvider from "./AuthProviders";

export const metadata: Metadata = {
    title: "yogiyo admin",
    description: "test app",
    keywords: ["yogiyo", "clone"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={FontClassNames}>
                <AuthProvider>
                    <RecoilRootWrapper>{children}</RecoilRootWrapper>
                </AuthProvider>
            </body>
        </html>
    );
}
