"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="pt-30 pb-12">
      <div className="text-center">
        <Link href="/" className="inline-block">
          <h1 className="text-3xl font-extrabold tracking-wider text-black mb-12">
            <span className="block">BEVERLY</span>
            <span className="block mt-2">QIN</span>
          </h1>
        </Link>

        <nav className="flex justify-center space-x-24 mb-16">
          <Link
            href="/"
            className={
              isActive("/")
                ? "text-sm font-medium text-black"
                : "text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200"
            }
          >
            HOME
          </Link>
          <Link
            href="/computation"
            className={
              isActive("/computation")
                ? "text-sm font-medium text-black"
                : "text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200"
            }
          >
            COMPUTATION+
          </Link>
          <Link
            href="/architecture"
            className={
              isActive("/architecture")
                ? "text-sm font-medium text-black"
                : "text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200"
            }
          >
            ARCHITECTURE
          </Link>
          <Link
            href="/about"
            className={
              isActive("/about")
                ? "text-sm font-medium text-black"
                : "text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors duration-200"
            }
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  );
}


