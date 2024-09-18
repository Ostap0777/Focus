import React from 'react';
import { getPostId } from '../../../Service/Service';
import Link from 'next/link';

const BlogPostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPostId(params.id);

  if (!post) {
    return <div className="text-center text-red-600">Error loading post</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center space-x-4 mb-8">
        <Link href="/">
          <img 
            src="/img/free-icon-left-arrow-271218 (2).png" 
            alt="Left arrow" 
            width="50" 
            height="50" 
            className="cursor-pointer transition duration-300 hover:scale-110"
          />
        </Link>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          {post.title}
        </h1>
        <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPostPage;
