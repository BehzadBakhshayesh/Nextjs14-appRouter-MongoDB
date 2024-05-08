"use client";

import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
import NavbarLinks from "./navbarLink/NavbarLinks";
import { handleLogOut } from "@/lib/action";

const links = [
  { title: "HomePage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((item) => (
          <NavbarLinks key={item.title} item={item} />
        ))}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && (
              <NavbarLinks item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogOut}>
              <button className={styles.logout}>logout</button>
            </form>
          </>
        ) : (
          <NavbarLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen((s) => !s)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((item) => (
            <NavbarLinks key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
