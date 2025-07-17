import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Projects - CP Kukreja Architects',
  description: 'Explore our diverse portfolio of architectural projects spanning over five decades of excellence in design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold text-black">CP Kukreja Architects</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <a href="/" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">Home</a>
                  <a href="/projects" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">Projects</a>
                  <a href="/expertise" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">Expertise</a>
                  <a href="/media" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">News</a>
                  <a href="/about-us" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">About Us</a>
                  <a href="/contact" className="text-black hover:text-gray-700 px-3 py-2 text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © CPKA 2021. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
