import { CancionModel } from './cancion.model';
export class DiscoModel {
    constructor(
        public id: number,
        public artist: string,
        public title: string,
        public year: number,
        public image_path: string,
        public songs: Array<CancionModel> = []) {
    }
}