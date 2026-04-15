
import SpinLoader from "../components/SpinLoader";
import { Suspense } from "react";

import PostFeatured from "../components/PostFeatured";
import PostList from "../components/PostList";



export default function Home() {
  return (
    <div >
      <Suspense fallback={<SpinLoader classeName="min-h-60 "/>}>
        <PostFeatured/>
      </Suspense>
      <Suspense fallback={<SpinLoader classeName=" min-h-60 "/>}>
        <PostList/>
        </Suspense>
    </div>
  );
}
