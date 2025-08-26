"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { UserData } from "..";
import { fetchuserAsync } from "../redux/user/userSlice";

const Navbar = () => {
  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about" },
    // { name: "Gallery", href: "/pages/contact" },
    // { name: "Services", href: "/pages/courses" },
    // { name: "Blog", href: "/pages/blog" },
    // { name: "FAQ", href: "/pages/faq" },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSession() as {
    data: {
      user: {
        id?: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
    } | null;
  };
  const user = useSelector<RootState>(
    (state) => state.user.currentUser
  ) as UserData;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (data?.user?.id) {
      dispatch(fetchuserAsync({ id: data?.user?.id }));
    }
  }, [data?.user?.id, dispatch]);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`bg-[#F3F4F6] shadow-md sticky top-0 z-10 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-xlmx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Logo
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-blue-800 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition"
            >
              {link.name}
            </Link>
          ))}

          {user && user.role === "ADMIN" && (
            <Link
              href="/pages/admin/users"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Admin
            </Link>
          )}

          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
          )}

        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      <div
        className={`md:hidden bg-blue-500 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col space-y-2 px-6 py-4">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:bg-blue-600 px-4 py-2 rounded-md transition"
            >
              {link.name}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Login
            </Link>
          )}
          {user && user.role === "ADMIN" && (
            <Link
              href="/pages/admin/users"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
