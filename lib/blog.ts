import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const filePath = path.join(blogsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        ...data,
        _date: new Date(data.date), // ✅ INTERNAL DATE OBJECT
      };
    });

  // ✅ SORT BY DATE (NEWEST FIRST)
  return blogs.sort(
    (a: any, b: any) => b._date.getTime() - a._date.getTime()
  );
}

export function getBlogBySlug(slug: string) {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
  };
}
