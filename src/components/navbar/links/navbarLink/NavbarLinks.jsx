"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbarLinks.module.css";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ item: { title, path = "" } }) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavbarLinks;
