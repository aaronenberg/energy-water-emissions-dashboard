export class Search
{
    constructor(
        public criteria: string,
        public value: string,
        public match: string,
        public start_year: number,
        public end_year:   number
    ){}
}
