"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="pt-16 pb-8 sm:pt-20">
      <div className="text-center">
        <Link href="/" className="inline-block">
          <h1 className="mb-6 whitespace-nowrap text-3xl font-extrabold tracking-wider text-black">BEVERLY QIN</h1>
        </Link>

        <nav className="mb-10 flex flex-wrap justify-center gap-x-10 gap-y-3 sm:gap-x-14">
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
