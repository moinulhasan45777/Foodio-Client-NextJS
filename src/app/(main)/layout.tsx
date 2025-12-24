import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-122px)]">{children}</main>
      <Footer></Footer>
    </div>
  );
}
