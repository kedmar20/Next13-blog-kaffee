import Link from "next/link";

export default function NotFound() {
   return (
      <main className="text-center">
         <h2 className="text-3xl">Es gab ein Problem.</h2>
         <p>Wir konnten die von Ihnen gesuchte Seite nicht finden.</p>
         <p>
            Gehen Sie zurück zum <Link href="/">Hauptseite</Link>.
         </p>
      </main>
   );
}
