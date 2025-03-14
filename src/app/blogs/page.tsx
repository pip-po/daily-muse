// "use client";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// import { Input } from "@/components/ui/input";
// import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
// import { Atom } from "lucide-react";
// import { useState } from "react";
// import { useDebounceValue } from "usehooks-ts";
// import BlogCard from "./_components/BlogCard";
// import Jumbotron from "./_components/Jumbotron";

// const LIMIT = 6;

// const BlogList = () => {
//   const [page, setPage] = useState<number>(1);
//   const [search, setSearch] = useState<string>("");
//   const [category, setCategory] = useState<string>("all");

//   const [debounceValue] = useDebounceValue(search, 700);
//   const { data: blogs, isPending } = useGetBlogs({
//     title: debounceValue,
//     category: category === "all" ? undefined : category, // Jika "all", hapus filter kategori
//     limit: LIMIT,
//     offset: (page - 1) * LIMIT,
//   });

//   const handlePrev = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   const handleNext = () => {
//     const totalPages = Math.ceil((blogs?.count || 0) / LIMIT);
//     if (page < totalPages) setPage(page + 1);
//   };

//   //   bagian ini juga bisa dihapus karna udah ada di pagination section misal impor dari saan

//   return (
//     <main className=" bg-[#fafafa] mx-auto p-8">
//       <Jumbotron />

//       {/* Header & Search Filter */}
//       <section className="container mx-auto px-6 mt-8">
//         <div className="flex flex-col md:flex-row justify-center items-center gap-4">
//           <Input
//             placeholder="Discover new insights..."
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-2/3"
//           />
//           <Select value={category} onValueChange={setCategory}>
//             <SelectTrigger className="w-full md:w-[200px]">
//               <SelectValue placeholder="Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All</SelectItem>
//               <SelectItem value="food">Food</SelectItem>
//               <SelectItem value="tips">Tips</SelectItem>
//               <SelectItem value="life">Life</SelectItem>
//               <SelectItem value="book">Book</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </section>

//       {/* Blog List */}
//       <section className="container mx-auto md:px-6 mt-12">
//         {isPending ? (
//           <div className="flex justify-center items-center h-[50vh]">
//             <Atom size={40} className="animate-spin text-gray-500" />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
//             {blogs?.data && blogs.data.length > 0 ? (
//               blogs.data.map((blog) => (
//                 <BlogCard key={blog.objectId} blog={blog} />
//               ))
//             ) : (
//               <p className="text-gray-500 text-center col-span-3">
//                 No blogs found. Try a different search or category.
//               </p>
//             )}
//           </div>
//         )}
//       </section>

//       {/* Pagination */}
//       <section className="mt-10 flex justify-center">
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious onClick={handlePrev} />
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink>{page}</PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationNext onClick={handleNext} />
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </section>
//     </main>
//   );
// };

// export default BlogList;

"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Input } from "@/components/ui/input";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { Atom } from "lucide-react";
import { useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import BlogCard from "./_components/BlogCard";
import Jumbotron from "./_components/Jumbotron";

const LIMIT = 6;

const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");

  const [debounceValue] = useDebounceValue(search, 700);
  const { data: blogs, isPending } = useGetBlogs({
    title: debounceValue,
    category: category === "all" ? undefined : category, // Jika "all", hapus filter kategori
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  });

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    const totalPages = Math.ceil((blogs?.count || 0) / LIMIT);
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <main className="bg-[#fafafa] w-full space-y-4 md:space-y-5">
      {/* <Jumbotron /> */}

      <section className="container mx-auto mt-20 md:mt-28">
        <div className="flex  flex-col gap-1 px-4 md:px-10 mb-12 justify-center items-center ">
          <h1 className="text-6xl text-center text-gray-800 font-bold mb-3">
            Explore Inspiring Stories & Insights
          </h1>
          <p className="text-lg max-w-4xl text-center">
            Dive into a world of thought-provoking articles, expert insights,
            and the latest trends across various topics. Stay curious, stay
            informed, and explore new perspectives with every post.
          </p>
        </div>
      </section>

      {/* Header & Search Filter */}
      <section className="container mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Input
            placeholder="Discover new insights..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3"
          />
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="food">Food</SelectItem>
              <SelectItem value="tips">Tips</SelectItem>
              <SelectItem value="life">Life</SelectItem>
              <SelectItem value="book">Book</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Blog List */}
      <section className="container mx-auto px-4 sm:px-6 mt-12">
        {isPending ? (
          <div className="flex justify-center items-center ">
            <Atom size={40} className="animate-spin text-gray-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
            {blogs?.data && blogs.data.length > 0 ? (
              blogs.data.map((blog) => (
                <BlogCard key={blog.objectId} blog={blog} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-1 sm:col-span-2 lg:col-span-3">
                No blogs found. Try a different search or category.
              </p>
            )}
          </div>
        )}
      </section>

      {/* Pagination */}
      <section className="mt-10 flex justify-center pb-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePrev} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
};

export default BlogList;
