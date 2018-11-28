export class Search
{
    constructor(
        public filter: string,
        public value: string,
        public match: string,
        public year_start: number,
        public year_end: number
    ){}
}
