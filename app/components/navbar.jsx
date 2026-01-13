// @flow strict
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/5">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-void-blue to-void-purple rounded-lg flex items-center justify-center">
            <HiOutlineSparkles className="text-white text-sm" />
          </div>
          <Link
            href="/"
            className="text-white text-xl font-bold tracking-tight hover:text-void-blue transition-colors">
            ANIKET
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <Link className="block px-4 py-2 text-sm text-void-gray-400 hover:text-white transition-colors" href="/#about">
              About
            </Link>
          </li>
          <span className="nav-dot"></span>
          <li>
            <Link className="block px-4 py-2 text-sm text-void-gray-400 hover:text-white transition-colors" href="/#experience">
              Experience
            </Link>
          </li>
          <span className="nav-dot"></span>
          <li>
            <Link className="block px-4 py-2 text-sm text-void-gray-400 hover:text-white transition-colors" href="/#skills">
              Skills
            </Link>
          </li>
          <span className="nav-dot"></span>
          <li>
            <Link className="block px-4 py-2 text-sm text-void-gray-400 hover:text-white transition-colors" href="/#projects">
              Projects
            </Link>
          </li>
          <span className="nav-dot"></span>
          <li>
            <Link className="block px-4 py-2 text-sm text-void-gray-400 hover:text-white transition-colors" href="/blog">
              Blog
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/#contact"
          className="void-btn text-xs md:text-sm"
        >
          <span>Contact</span>
          <HiOutlineSparkles className="text-void-blue" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
