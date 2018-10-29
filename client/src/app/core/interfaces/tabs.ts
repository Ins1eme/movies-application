import { Film } from "./film";

export interface Tabs {
    latests: Film[],
    topRated: Film[],
    resentlyReleased: Film[]
}