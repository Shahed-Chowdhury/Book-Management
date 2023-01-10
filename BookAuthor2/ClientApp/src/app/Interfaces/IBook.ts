export interface IBook
{
    Id?: number
    Title: string,
    Type: number,
    Author: {
        Name: string
    }
}