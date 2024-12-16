import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.jpeg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-300 text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl hover:scale-105 duration-500">
            <img src={logo} className="w-24" />
          </Link>
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
          <ul className="hidden lg:flex space-x-4 font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="hover:text-zinc-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && (
          <ul className="mt-4 space-y-2 lg:hidden font-bold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="block py-2 hover:text-zinc-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
