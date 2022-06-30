export type TNews = {
    page: number,
    nbPages: number,
    hits: THit[],
}

export type THit = {
    author: string,
    created_at: Date,
    title: string,
    story_title: string,
    story_text: string,
    url: string,
}
