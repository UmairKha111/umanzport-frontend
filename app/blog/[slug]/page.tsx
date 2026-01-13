import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="pt-32 px-6 text-red-600">
        Blog file not found: {slug}
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-24">
      
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition"
      >
        ← Back to articles
      </Link>

      {/* ✅ COVER IMAGE (THIS WAS MISSING) */}
      {blog.metadata.cover && (
        <div className="mt-10 mb-10">
          <img
            src={blog.metadata.cover}
            alt={blog.metadata.title}
            className="w-full h-[340px] sm:h-[360px] object-cover "
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
        {blog.metadata.title}
      </h1>

      {/* Meta */}
      <p className="mt-4 text-gray-500 text-base">
        {blog.metadata.date} · {blog.metadata.author}
      </p>

      {/* Content */}
<article
  className="
    prose
    prose-lg
    lg:prose-xl
    mt-14
    max-w-none

    prose-headings:font-sm
    prose-headings:tracking-tight

    prose-h2:text-[#F58220]
    prose-h2:mt-16
    prose-h2:mb-6

    prose-p:text-gray-700
    prose-p:leading-relaxed
    prose-p:mb-6

    prose-ul:mt-6
    prose-ul:mb-6
    prose-li:mb-3
    prose-li:text-gray-700
    prose-li:marker:text-gray-400

    prose-strong:text-black

    prose-hr:my-16
    prose-hr:border-gray-300
  "
>
  
 <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </main>
  );
}
