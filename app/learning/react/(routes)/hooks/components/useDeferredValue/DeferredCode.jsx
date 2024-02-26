"use client";
import Headings from "@/app/learning/react/ui/components/Headings";
import deferred from "@/public/img/deferred.PNG";
import Image from "next/image";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ShowList from "./ShowList";
const DeferredCode = () => {
  const [textInput, setTextInput] = useState("");

  const mainComp = ``;

  const deferredCom = `import { useDeferredValue, useMemo } from "react";

  const ShowList = ({ inputData }) => {
    const deferredInput = useDeferredValue(inputData);
    const size = 5000;
    const list = useMemo(() => {
      const newList = [];
      for (let i = 0; i < size; i++) {
        newList.push(
          <div
            className="m-1 p-2 border border-dashed dark:border-slate-500"
            key={i}
          >
            <h3 className="dark:text-slate-400 font-bold font-catamaran">
              {deferredInput}
            </h3>
          </div>
        );
      }
      return newList;
    }, [deferredInput]);
    return list;
  };
  
  export default ShowList;`;

  const handelChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-3 justify-center items-start">
        <div className="bg-slate-50 rounded-2xl p-3 dark:bg-slate-700/40 w-11/12 lg:w-6/12">
          <div className="">
            <input
              className="block w-full px-3 py-3 bg-white dark:border-slate-500 dark:bg-slate-700/40  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500
              dark:text-slate-300 font-bold
              "
              type="text"
              value={textInput}
              onChange={handelChange}
              placeholder="Enter Some Text"
            />
          </div>
          <div
            className={`${
              textInput ? "h-56" : "h-fit"
            } overflow-y-scroll flex flex-row flex-wrap gap-2 border border-dashed dark:border-slate-500 my-5`}
          >
            <ShowList inputData={textInput} />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-2 justify-center items-center">
            <Image
              src={deferred}
              alt="console"
              height="500"
              width="500"
              className="object-contain h-[250px] w-[350px]"
            />
            <p className="text-wrap text-md text-slate-600 dark:text-slate-300 font-normal font-catamaran antialiased p-2">
              <Headings title={"Explaination from Doc"} />
              <br />
              useDeferredValue is a React Hook that lets you defer (বিলম্ব করা)
              updating a part of the UI.
              <br />
              <br />
              During the initial render, the returned deferred value will be the
              same as the value you provided. During updates, React will first
              attempt a re-render with the old value (so it will return the old
              value), and then try another re-render in background with the new
              value (so it will return the updated value).
              <br />
            </p>
          </div>
          <p className="text-wrap text-md text-slate-600 dark:text-slate-300 font-normal font-catamaran antialiased p-2">
            The values you pass to useDeferredValue should either be primitive
            values (like strings and numbers) or objects created outside of
            rendering. If you create a new object during rendering and
            immediately pass it to useDeferredValue, it will be different on
            every render, causing unnecessary background re-renders.
            <br />
            <br />
            When useDeferredValue receives a different value (compared with
            Object.is), in addition to the current render (when it still uses
            the previous value), it schedules a re-render in the background with
            the new value. The background re-render is interruptible: if there’s
            another update to the value, React will restart the background
            re-render from scratch. For example, if the user is typing into an
            input faster than a chart receiving its deferred value can
            re-render, the chart will only re-render after the user stops
            typing.
            <br />
            <br />
            useDeferredValue is integrated with Suspense. If the background
            update caused by a new value suspends the UI, the user will not see
            the fallback. They will see the old deferred value until the data
            loads.
            <br />
            <br />
            useDeferredValue does not by itself prevent extra network requests.
            <br />
            There is no fixed delay caused by useDeferredValue itself. As soon
            as React finishes the original re-render, React will immediately
            start working on the background re-render with the new deferred
            value. Any updates caused by events (like typing) will interrupt the
            background re-render and get prioritized over it.
            <br />
            <br />
            The background re-render caused by useDeferredValue does not fire
            Effects until it’s committed to the screen. If the background
            re-render suspends, its Effects will run after the data loads and
            the UI updates.
          </p>
        </div>
        <div className="p-5 w-72 sm:w-11/12 overflow-hidden lg:w-6/12 bg-slate-100 rounded-2xl dark:bg-slate-700/40">
          <SyntaxHighlighter language="javascript" style={gruvboxDark}>
            {deferredCom}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default DeferredCode;
