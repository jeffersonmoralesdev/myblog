"use client"
import Link from "next/link";
import React, { ReactNode } from "react";

type ErrorMessageProps={
    pageTitle:string;
    contentTitle:string;
    content:React.ReactNode;
}

export default function ErrorMessage({pageTitle, contentTitle, content}:ErrorMessageProps) {
    
  return (
    <>
      <title>{pageTitle}</title>
      <div className="min-h-[380px] flex items-center justify-center bg-slate-900 text-slate-100 rounded-xl">
        <div>
          <span className="text-2xl px-3 font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
            {contentTitle}
          </span>
          <div className="px-3 sm:text-2xl">
            {content}
          </div>
          <br />

          <p className="px-3 text-center ">
            <Link
              className="hover:text-slate-400 transition duration-200"
              href={"/"}
            >
              <u>Home Page</u>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
