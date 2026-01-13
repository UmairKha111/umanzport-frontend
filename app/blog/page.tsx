import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
   <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">

      
      {/* Page Heading */}
      <div className="mb-14">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Insights & <span className="text-[#F58220]">Articles</span> 
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Ideas, processes, and case studies from the team at Umanz Technology.
        </p>
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <p className="text-gray-500">No blog posts published yet.</p>
      )}

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: any) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex flex-col justify-between  border border-gray-200 bg-white p-6 min-h-[260px] transition-all hover:-translate-y-1 hover:shadow-xl"
>
            <span className="text-sm font-medium text-gray-500">
              {blog.category}
            </span>

            <h2 className="mt-3 text-xl text-[#F58220] font-semibold leading-snug group-hover:underline">
              {blog.title}
            </h2>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {blog.description}
            </p>

            <div className="mt-6 text-sm text-gray-400">
              {blog.date} · {blog.author}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
