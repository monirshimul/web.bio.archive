"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export function DarkThemeProviders({ children }) {
  const data = useSelector((state) => state.themeChange.themeName);
  useEffect(() => {
    if (data === "light") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#1e293b";
    }
  }, [data]);
  console.log("dark provider", data);
  return <div className={`${data} dark:bg-slate-800`}>{children}</div>;
}
