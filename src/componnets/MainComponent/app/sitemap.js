// import { Blogs } from "@/constant/blog";
// import { Products } from "@/data";
import { courses } from "@/constant/data";

export default async function Sitemap(){
  // const reversedBlogs = Blogs.slice().reverse();
  // const blogEntries = reversedBlogs.map(({ id }) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${id}`,
  // }));
  // const productsEntries = Products.map(({ id }) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
  // }));

  const courseEntries = courses.map(({ id }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${id}`,
  }));

  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/interview` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/internship` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/placement` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/refer` },
    // ...blogEntries,
    // ...productsEntries,
    ...courseEntries,
  ];
}
