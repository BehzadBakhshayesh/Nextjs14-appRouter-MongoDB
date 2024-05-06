"use client";

import Link from "next/link";
import React from "react";
import styles from "./links.module.css";
import NavbarLinks from "./navbarLink/NavbarLinks";

const links = [
  { title: "HomePage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((item) => (
          <NavbarLinks key={item.title} item={item} />
        ))}
        {session ? (
          <>
            {isAdmin && (
              <NavbarLinks item={{ title: "Admin", path: "/admin" }} />
            )}
            <button className={styles.logout}>logout</button>
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
