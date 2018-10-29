import { Review } from "./review";

export interface Film {
    title: string;
    description: string;
    imageUrl: string;
    imageBackgroundUrl: string,
    year: number,
    duration: string,
    rating: number,
    language: string,
    country: string,
    genre: Array<string>,
    review: Review[]
}