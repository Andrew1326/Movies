import { TBaseItem } from "../../../appTypes"

export type TBoxOfficeItem = TBaseItem & {
    rank: string,
    weekend: string,
    weeks: string
    gross: string
}

export type TBoxOfficeItems = { items: TBoxOfficeItem[] }