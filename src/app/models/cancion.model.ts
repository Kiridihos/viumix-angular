export class CancionModel {
    constructor(
        public id: number,
        public title: string,
        public artist: string,
        public album: string,
        public year: number,
        public path: string,
        public discoId: number
    ) {}
}
