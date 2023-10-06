import React from "react";

const Navbar = () => {
  const links = [
    {
      links: "/",
      name: "home",
    },
    {
      links: "/posts",
      name: "posts",
    },
  ];
  return (
    <nav>
      <link className="hover:underline" href="/">
        Home
      </link>
      <link className="hover:underline" href="/posts">
        Home
      </link>
    </nav>
  );
};

export default Navbar;
