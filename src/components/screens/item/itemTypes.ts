import { TKeyValue, TIdName, TMostPopular, TItem } from "../../../appTypes"
import { TComingSoonItem } from "../comingSoon/comingSoonTypes"

type TActor = TIdName & {
    image: string,
    asCharacter: string
}

type TRatings = Pick<TMostPopular, 'title' | 'fullTitle' | 'year'> & {
    imDbId: string,
    type: string,
    imDb: string,
    metacritic: string,
    theMovieDb: string,
    rottenTomatoes: string,
    filmAffinity: string,
}

type TTrailer = Pick<TMostPopular, 'title' | 'fullTitle' | 'year'> & {
    imDbId: string,
    type: string,
    videoId: string,
    videoTitle: string,
    videoDescription: string,
    thumbnailUrl: string,
    link: string,
    linkEmbed: string
}

type TBoxOffice = {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
}

type TSimilar = Pick<TMostPopular, 'id' | 'title' | 'image' | 'imDbRating'>

export type TItemData = Omit<TComingSoonItem, 'fullTitle' | 'crew' | 'rank' | 'imDbRatingCount' | 'releaseState'> & {
    originalTitle: string,
    type: string,
    releaseDate: string,
    plotLocal: string,
    plotLocalIsRtl: boolean,
    awards: string,
    writers: string,
    writerList: TIdName[],
    actorList: TActor[],
    companies: string,
    companyList: TIdName[],
    languages: string,
    languageList: TKeyValue[],
    imDbRatingVotes: string,
    ratings: TRatings,
    trailer: TTrailer,
    boxOffice: TBoxOffice,
    tagline: string,
    keywords: string,
    keywordList: string[],
    similars: TSimilar[],
    countries: string,
    countryList: TKeyValue[]
}

export type TData = TItemData | TItem