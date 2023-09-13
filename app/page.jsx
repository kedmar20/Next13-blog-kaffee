import Link from "next/link";

export default function Home() {
   return (
      <main>
         <h1>Einige interessante Fakten über Kaffee, die man wissen muss!</h1>
         <p>
            Unabhängig davon, ob Sie ein kleines Schwarzes mögen, trinken Sie es aromatischer, leicht schokoladiger Mokka, oder lieber ein milchiger
            Latte – Das sind interessante Fakten, die echte Kaffeeliebhaber wissen sollten!
         </p>
         <div className="flex justify-center my-8"></div>
         <h2> Wo kommt der Name „Kaffee“ her?</h2>

         <div className="card">
            <h3>Der Name Kaffee leitet sich vom...</h3>
            <p>
               Der Name Kaffee leitet sich vom altarabischen Wort „gahwah“ oder dem türkischen „kahweh“ ab, was „Müdigkeit beseitigen“ oder
               „Hebekraft“ bedeutet.
            </p>
         </div>

         <div className="flex justify-center my-8">
            <Link href="/posts">
               <button className="btn-primary">Mehr interessante Fakten...</button>
            </Link>
         </div>
      </main>
   );
}
