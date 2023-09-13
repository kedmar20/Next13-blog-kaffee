import { Suspense } from "react";
import TicketList from "./PostList";
import Loading from "../loading";
import Link from "next/link";

export default function Posts() {
   return (
      <main>
         <nav>
            <div>
               <h2>Einige interessante Fakten über Kaffee:</h2>
               <p>
                  <small>Beiträge</small>
               </p>
            </div>
            <Link href="/posts/create" className="ml-auto">
               <button className="btn-primary">Add Kaffee-Fakt</button>
            </Link>
         </nav>
         <Suspense fallback={<Loading />}>
            <TicketList />
         </Suspense>
      </main>
   );
}
