import Link from "next/link";

export default function NotFound() {
   return (
      <main className="text-center">
         <h2 className="text-3xl">Sorry.</h2>
         <p>Wir konnten nicht finden, was Sie gesucht haben.</p>
         <p>
            Gehen Sie zurück zu allen <Link href="/tickets">Beiträgen</Link>.
         </p>
      </main>
   );
}
