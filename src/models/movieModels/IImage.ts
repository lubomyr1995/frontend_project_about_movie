export interface IImageInfo {
    aspect_ratio: number
    height: number
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface IImage {
    backdrops: IImageInfo[];
    logos: IImageInfo[];
    posters: IImageInfo[];
}