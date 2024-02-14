"use client";
import { logoutPrivateAccess } from "@/redux/features/setting/SettingSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavData } from "../data";
import SingleNavItem from "./SingleNavItem";
const MobileNav = ({ closeSideMenu }) => {
  const navItems = useNavData();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const access = useSelector((state) => state.themeChange.privateAccess);

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full min-h-screen w-full justify-end bg-gray-800/60 md:hidden">
      <div className=" h-full w-[65%] bg-slate-50 dark:bg-slate-800 z-50 px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-gray-500 dark:text-slate-300 mt-5"
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
              access={d.access}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex flex-col gap-8 mt-4 items-center">
          {access ? (
            <>
              <button className="rounded-2xl w-fit z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-1 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm">
                <Link
                  href="/login"
                  onClick={() => dispatch(logoutPrivateAccess())}
                >
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              {pathname !== "/login" ? (
                <button className="rounded-2xl w-fit z-10 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-1 text-white transition-all cursor-pointer hover:scale-90 shadow-lg shadow-orange-600 hover:shadow-sm">
                  <Link href="/login">Login</Link>
                </button>
              ) : (
                ""
              )}
            </>
          )}
        </section>
        <section className="">
          <footer className="bg-slate-50/80 flex flex-col dark:bg-slate-800 pt-5">
            {/* <Image
              src={Profile}
              alt="profile"
              width={60}
              height={80}
              className="rounded-full mx-auto mt-3"
            /> */}

            <Link className="text-center" href="/">
              <h1 className="text-5xl px-5 py-3 transition-all hover:scale-105 font-extralight text-slate-500 dark:text-orange-500 hover:text-slate-600 font-yesteryear">
                MonirShimul
              </h1>
            </Link>
            <div className="max-w-sm mx-auto py-3">
              <p className="text-sm antialiased text-slate-500 dark:text-slate-300">
                Self-driven, focused and dedicated Software Developer with 4+
                years of Industrial Experience.
              </p>
              <p className="text-sm antialiased text-slate-500 mt-2 dark:text-slate-300">
                Fully passionate about programming, developing new products and
                exploring new Technologies.
              </p>
            </div>

            <div className="flex flex-col gap-5 justify-between border-t dark:border-slate-500 py-8">
              <div className="flex items-center mx-auto space-x-4 sm:mt-0 z-20">
                <a
                  target="_blank"
                  href="https://www.facebook.com/monir.shimul/"
                >
                  <MdFacebook className="w-7 h-fit text-slate-400 hover:text-sky-600 duration-300" />
                </a>
                <a target="_blank" href="https://github.com/monirshimul">
                  <FaGithub className="w-7 h-fit text-slate-400 hover:text-sky-500 duration-300" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@monirshimul/videos"
                >
                  <AiFillYoutube className="w-7 h-fit text-slate-400 hover:text-orange-600 duration-300" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mohammed-monirul-islam-a88263135/"
                >
                  <FaLinkedin className="w-7 h-fit text-slate-400 hover:text-sky-600 duration-300" />
                </a>
              </div>
              <p className="text-sm text-slate-500 z-20 mx-auto text-center">
                © Copyright {new Date().getFullYear()}{" "}
                <a
                  href="#"
                  className="text-sky-900 dark:text-sky-400 font-bold hover:text-orange-500 dark:hover:text-orange-500"
                >
                  {" "}
                  monirshimul
                  <br />
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default MobileNav;
