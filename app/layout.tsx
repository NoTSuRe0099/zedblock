import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#272727] text-white relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
