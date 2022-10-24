export interface Environment {
    apiKey: string;
    production: boolean;
};

export interface Post {
    title: string;
    id?: string;
    author: string;
    date: Date;
}