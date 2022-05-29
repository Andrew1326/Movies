import { TKeyValue, TIdName, TTop250 } from "../../../appTypes";

export type TComingSoonItem = TTop250 & {
    releaseState: string,
    runtimeMins: string,
    runtimeStr: string,
    plot: string,
    contentRating: string,
    metacriticRating: string,
    genres: string,
    genreList: TKeyValue[],
    directors: string,
    directorList: TIdName[],
    stars: string,
    starList: TIdName[],
}

export type TComingSoonItems = { items: TComingSoonItem[] }