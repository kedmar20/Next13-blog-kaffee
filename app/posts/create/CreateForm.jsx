"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
   const router = useRouter();

   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("john");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);

      const newPost = { title, body, author, user_email: "" };

      const res = await fetch("http://localhost:4000/kaffeeposts", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newPost),
      });

      if (res.status === 201) {
         router.refresh();
         router.push("/posts");
      }
   };

   return (
      <form onSubmit={handleSubmit} className="w-1/2">
         <label>
            <span>Title:</span>
            <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
         </label>
         <label>
            <span>Details:</span>
            <textarea required onChange={(e) => setBody(e.target.value)} value={body} />
         </label>
         <label>
            <span>Author:</span>
            <select onChange={(e) => setAuthor(e.target.value)} value={author}>
               <option value="john">John</option>
               <option value="maria">Maria</option>
               <option value="steve">Steve</option>
            </select>
         </label>
         <button className="btn-primary" disabled={isLoading}>
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add New Post</span>}
         </button>
      </form>
   );
}
