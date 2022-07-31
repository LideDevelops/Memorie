import { MemorieCardModel } from "./memorie.dto";

export interface MemorieDeckModel {
    cardsWithoutDoubles: MemorieCardModel[];
    lastModified: string;
    identidfier: number;
}
