// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { HiBookOpen } from "react-icons/hi2";

function Blog({ blogs }) {
  return (
    <div id='blogs' className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400">
          <HiBookOpen size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Latest <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Articles</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 6).map((blog, i) => (
          blog?.cover_image && <BlogCard blog={blog} key={i} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full p-[1px] font-medium text-sm"
          href="/blog"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 group-hover:opacity-100" />
          <span className="relative flex items-center gap-2 rounded-full bg-neutral-900 dark:bg-black/90 px-6 py-3 text-white transition-all duration-300 group-hover:bg-neutral-800 dark:group-hover:bg-black/60">
            <span>View All Articles</span>
            <FaArrowRight size={14} className="text-pink-400 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
