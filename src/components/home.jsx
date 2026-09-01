import Navbar from "./navbar";
import Footer from "./footer";
import Hero from "./hero";
import { useState, useEffect } from "react";
import FeatureCard from "./card";
function Home() {
  const [posts, setPostes] = useState([]);
  useEffect(() => {
    console.log(posts);
    const getPost = async () => {
      try {
        const respons = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await respons.json();
        setPostes(data);
      }
      catch (error) {
        console.log("error", error);
      }
    }
    getPost();
    console.log("calling...");
  }, [])
  return (
    <><Navbar />
      <Hero />
      <section className="py-5 bg-gray-100">
        <div className="max-w-7xl px-4 mx-auto ">
          <h2 className="font-bold  text-center text-3xl mb-8  ">latest course</h2>
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post) => (
              <FeatureCard
                key={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
