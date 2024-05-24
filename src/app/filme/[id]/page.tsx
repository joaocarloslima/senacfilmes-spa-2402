import { getDetails } from "@/app/actions/getDetails";
import { NavBar } from "@/app/components/navbar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default async function Sobre({params}: Params) {
    const filme = await getDetails(params.id)

    return (
        <main className="flex min-h-screen flex-col">
            <NavBar />
            
            <div className="flex gap-8 p-8 bg-cover" >
                <img className="max-w-60 rounded" src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} alt="poster do filme" />

                <div className="flex flex-col gap-4 w-3/5">
                    <h2 className="text-4xl font-bold">{filme.title}</h2>
                    <p>{filme.overview}</p>
                </div>
            </div>

        </main>
    );
}