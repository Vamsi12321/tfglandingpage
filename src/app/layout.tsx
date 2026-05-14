import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TFG BGV - Background Verification & Hiring Platform",
  description: "AI-powered Background Verification and Hiring Management Platform. Connect seamlessly with candidates, manage interviews, and verify backgrounds effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-500/30">
        {children}
      </body>
    </html>
  );
}
