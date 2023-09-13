import Link from "next/link";

async function getPosts() {
   const res = await fetch("http://localhost:4000/kaffeeposts", {
      next: {
         revalidate: 0, // use 0 to opt out of using cache
      },
   });

   return res.json();
}

export default async function PostList() {
   const posts = await getPosts();

   return (
      <>
         {posts.map((post) => (
            <div key={post.id} className="card my-5">
               <Link href={`/tickets/${post.id}`}>
                  <h3>{post.title}</h3>
                  <p>{post.body.slice(0, 200)}...</p>
                  <div className={`pill ${post.author}`}> Author: {post.author}</div>
               </Link>
            </div>
         ))}
         {posts.length === 0 && <p className="text-center">No Posts!</p>}
      </>
   );
}
