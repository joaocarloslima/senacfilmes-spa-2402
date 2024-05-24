"use client"

import { Bookmark, BookmarkCheck, Star } from "lucide-react"
import { useFavorito} from "@/app/hooks/useFavorito"
import { useEffect } from "react"

interface CardProps {
    filme: Filme
}

export function Card({ filme }: CardProps) {

    const { carregarFavoritos, favorito, desfavoritar, favoritar  } = useFavorito(filme)
  
    useEffect( () => carregarFavoritos(), [] )

    return (
        <div className="flex flex-col gap-2 items-center w-40 relative">
            {favorito ?
                <BookmarkCheck onClick={desfavoritar} className="absolute right-2 top-2 cursor-pointer text-amber-300" /> :
                <Bookmark onClick={favoritar} className="absolute right-2 top-2 cursor-pointer" />
            }
            <img className="rounded-lg" src={"https://image.tmdb.org/t/p/w500/" + filme.poster_path} alt="poster do filme" />
            <span className="text-lg font-medium line-clamp-1">
                {filme.title}
            </span>
            <div className="flex items-center gap-2">
                <Star className="text-amber-400" />
                <span className="opacity-80">
                    {filme.vote_average.toFixed(1)}
                </span>
            </div>
            <a href={"/filme/" + filme.id} className="bg-blue-700 py-1 px-6 rounded">
                detalhes
            </a>
        </div>
    )
}