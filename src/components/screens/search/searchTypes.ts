export type TFormValues = {
    title: string,
    minRating: string,
    maxRating: string,
    genres: string[],
    companies: string[],
    country: string,
    plot: string
}

export type TParams = Pick<TFormValues, 'title' | 'plot' | 'country'> & {
    user_rating: string,
    genres: string,
    companies: string
}