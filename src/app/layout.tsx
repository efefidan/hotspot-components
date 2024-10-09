import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "../components/MainLayout"; // MainLayout componentini buraya import ediyoruz

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout> {/* MainLayout burada çağırılıyor */}
          {children} {/* Diğer bileşenler MainLayout içinde */}
        </MainLayout>
      </body>
    </html>
  );
}
