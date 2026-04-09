import { CancionModel } from './cancion';
export class DiscoModel {
    constructor(
        public id: number,
        public artist: string,
        public album: string,
        public year: number,
        public cover: string,
        public songs: Array<CancionModel> = []) {
    }
}