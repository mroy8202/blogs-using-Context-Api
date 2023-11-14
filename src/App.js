import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect( () => {
    fetchBlogPosts();
  }, [])


  return (
    <div className="h-screen w-screen flex flex-col justify-between relative">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
