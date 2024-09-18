// app/page.tsx

import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../Service/Service';
import { Post } from '@/Models/models';

const HomePage = async () => {
  let posts: Post[] = [];

  try {
    const data = await getAllPosts();
    posts = Object.keys(data).map(key => ({
      id: key,
      title: data[key].title,
      excerpt: data[key].excerpt,
		description: data[key].description
    }));
  } catch (error) {
    console.error('Error loading posts:', error);
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Posts</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md shadow-black p-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-black hover:scale-105"
            >
              <Link href={`/Posts/${post.id}`}>
                <span className="text-2xl font-medium text-black hover:text-blue-800">
                  {post.title}
						{post.description}
                </span>
              </Link>
              <p className="mt-2 text-black">{post.excerpt}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-black">No posts available.</p>
      )}
    </div>
  );
};

export default HomePage;
