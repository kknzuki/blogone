import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
AuthProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kenki Blog',
  description: 'blog app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
