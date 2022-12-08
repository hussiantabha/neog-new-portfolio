import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around pt-6">
      <h1 className="text-2xl font-[700]">Hussain Mustafa</h1>
      <Link href="/" className="text-lg font-semibold">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
