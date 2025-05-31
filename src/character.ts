export interface Character {
    name: string;
    realm: string;
    class: string;
    league: string;
    level: number;
    /**
     * Only present in get-characters response
     */
    pinnable?: boolean;
}

export type GetCharactersResult = Character[];
