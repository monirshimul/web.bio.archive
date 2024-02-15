import Landing from "@/components/section/home/Home";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="overflow-hidden dark:bg-slate-800">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Landing />
      </Suspense>
    </div>
  );
}
