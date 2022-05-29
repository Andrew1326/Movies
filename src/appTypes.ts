import { TBoxOfficeItem } from "./components/screens/boxOffice/boxOfficeTypes"
import { TComingSoonItem } from "./components/screens/comingSoon/comingSoonTypes"

export type TRoute = {
    path: string,
    element: JSX.Element,
    link?: string
}

export type TBaseItem = {
    id: string,
    title: string,
    image: string
}

export type TMostPopular = TBaseItem & {
    rank: string,
    fullTitle: string,
    year: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: string,
    rankUpDown: string
}

export type TTop250 = Omit<TMostPopular, 'rankUpDown'>

export type TItem = TMostPopular | TTop250 | TBoxOfficeItem | TComingSoonItem | TBaseItem

export type TMostPopularItems = { items: TMostPopular[] }

export type TTop250Items = { items: TTop250[] }

export type TSelectOption = {
    name: string,
    value: string
}

export type TIdName = {
    id: string,
    name: string
}

export type TKeyValue = {
    key: string,
    value: string
}