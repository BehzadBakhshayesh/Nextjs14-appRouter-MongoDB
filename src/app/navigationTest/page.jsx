"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const page = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParam = useSearchParams();
  console.log({ pathName, query: searchParam.get("qqqq") });
  return (
    <div>
      <Link href="/" prefetch={false}>
        click here
      </Link>
      <button
        onClick={() => {
          console.log("clicked");
          //   router.push("/");
          //   router.replace("/");
          //   router.back();
          //   router.forward();
        }}
      >
        write and redirect
      </button>
    </div>
  );
};

export default page;
