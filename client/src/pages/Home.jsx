import React from "react";
import PostList from "../components/PostList";
import EmailCapture from "../components/EmailCapture";
import Hero from "../components/Hero";

const Home = () => {
  // Your list of posts (assuming it's fetched or available)
  const posts = [
    /* Your list of posts */
  ];

  return (
    <div className="sm:text-center">
      {/* <Hero /> */}
      <h1 className="text-3xl font-extrabold sm:pl-12 sm:pt-12 sm:pb-4 sm:text-left text-center">
        HOME
      </h1>
      <PostList posts={posts} />
      <EmailCapture />
      <div className="flex ml-24">
        <div className="mx-4 py-8">
          <h2 className="text-2xl font-bold uppercase">
            The number one fictional blogs! so read our Blogs .
          </h2>
          <p className="text-lg mt-8 max-w-1/2">
            This blog is dedicated purely to showcasing the Blogs.
          </p>
        </div>
        <img className="scale-75" />
      </div>
    </div>
  );
};

export default Home;
