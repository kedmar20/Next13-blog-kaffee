import { notFound } from "next/navigation";

export const dynamicParams = true; // default val = true

export async function generateStaticParams() {
   const res = await fetch("http://localhost:4000/kaffeeposts");

   const posts = await res.json();

   return posts.map((post) => ({
      id: post.id,
   }));
}

async function getPosts(id) {
   const res = await fetch(`http://localhost:4000/kaffeeposts/${id}`, {
      next: {
         revalidate: 60,
      },
   });

   if (!res.ok) {
      notFound();
   }

   return res.json();
}

export default async function PostDetails({ params }) {
   // const id = params.id
   const post = await getPost(params.id);

   return (
      <main>
         <nav>
            <h2>Post Details</h2>
         </nav>
         <div className="card">
            <h3>{post.title}</h3>
            <small>Created by {post.user_email}</small>
            <p>{post.body}</p>
            <div className={`pill ${post.priority}`}>Author: {post.priority}</div>
         </div>
      </main>
   );
}
