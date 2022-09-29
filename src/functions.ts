import { TItem } from "./appTypes";
import { TIdName, TKeyValue } from "./appTypes";

//* remove films duplicates
export const removeSameById = (arr: TItem[]): TItem[] => {
  const ids = arr.map(el => el.id);

  return arr.filter(el => ids.indexOf(el.id) === ids.lastIndexOf(el.id))
} 

//* filter films by title
export const filterByTitle = (arr: TItem[], title: string): TItem[] => arr.filter(el => el.title.toLowerCase().includes(title.toLowerCase()))

//* view actor data
export const viewDataInWikipedia = (actor: string) => () => window.open(`https://en.wikipedia.org/wiki/${actor.replaceAll(' ', '_')}`, 'target=_blank')

//* creating list heading
export const createListHeading = (arr: TIdName[] | TKeyValue[], v1: string, v2: string): string => arr.length > 1 ? v1 : v2

//* create list item
export const createListItem = (item: string, id: number, arr: any[]): string => `${item} ${id < arr.length-1 ? ', ' : ''}`

//* arr converter
export const convertArrToParams = (arr: string[]) => {
  const replaceItems: [string, string][] = [[' ', '_'], ['-', '_']]

  const paramsArr = arr.map(el => {
      if (el.includes(replaceItems[0][0]) && el.includes(replaceItems[1][0])) replaceItems.forEach(elem => el = el.replaceAll(elem[0], elem[1]))

      else if (el.includes(replaceItems[0][0])) el = el.replaceAll(replaceItems[0][0], replaceItems[1][1])

      else if (el.includes(replaceItems[1][0])) el = el.replaceAll(replaceItems[1][0], replaceItems[1][1])

      return el.toLowerCase()
  })

  return paramsArr.join(',')
}