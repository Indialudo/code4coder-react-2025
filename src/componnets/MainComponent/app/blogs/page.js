'use client'
import { useState } from 'react';
import LeftSideBlog from '@/components/blog/LeftSideBlog';
import RightSideBlog from '@/components/blog/RightSideBlog';
import { blogs } from '@/constant/blog/data';
import React from 'react';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>

        {/* Search Box */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-2/3 ml-6"
          />
        </div>

        <div className="container mx-auto p-4 flex">
          {/* Left Side - Cards */}
          <div className="flex-1 overflow-x-auto">
            {filteredBlogs.length === 0 ? (
              <div className="text-red-500">
                <p>Sorry, nothing matched your search. Please try again.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {filteredBlogs.map((blog, index) => (
                  <LeftSideBlog key={index} title={blog.title} slug={blog.slug} content={blog.content} imgurl={blog.imgurl} />
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Fixed Content */}
          <RightSideBlog />
        </div>
      </div>
    </>
  );
};

export default Page;
