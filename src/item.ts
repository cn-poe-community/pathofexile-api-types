import { Character } from "./character";

export interface Inventory {
    extra_columns: number;
    /**
     * Only present in 3.25 league characters
     */
    gold?: number;
}

export interface Item {
    verified: boolean;
    w: number;
    h: number;
    icon: string;
    league: string;
    id?: string; // only grafts skills without id
    isRelic?: boolean;
    foilVariation?: number;
    searing?: boolean,
    tangled?: boolean,
    influences?: Influences;
    /**
     * @deprecated by influences.elder
     */
    elder?: boolean;
    /**
     * @deprecated by influences.shaper
    */
    shaper?: boolean;
    sockets?: Socket[];
    name: string;
    typeLine: string;
    baseType: string;
    rarity?: Rarity;
    ilvl: number;
    identified: boolean;
    duplicated?: boolean;
    split?: boolean;
    corrupted?: boolean;
    requirements?: Requirement[];
    scourgeMods?: string[];
    implicitMods?: string[];
    explicitMods?: string[];
    properties?: Property[];
    utilityMods?: string[];
    enchantMods?: string[];
    descrText?: string;
    synthesised?: boolean;
    fractured?: boolean;
    craftedMods?: string[];
    fracturedMods?: string[];
    crucibleMods?: string[];
    crucible?: unknown;
    flavourText?: string[];
    frameType: number;
    x?: number;
    y?: number;
    inventoryId?: string;
    socketedItems?: SocketedItem[];
    incubatedItem?: unknown;
    mutated?: boolean;
    mutatedMods?: string[];
}

export interface Influences {
    redeemer?: boolean;
    shaper?: boolean;
    elder?: boolean;
    crusader?: boolean;
    hunter?: boolean;
    warlord?: boolean;
}

export interface Socket {
    group: number;
    attr: Colour;
    sColour: SColour;
}

/**
 * D: Dex, G: General, I: Int, S: Str, A: Abyssal
 */
export type Colour = "D" | "G" | "I" | "S" | "A";
/**
 * B: Blue, G: Green, R: Red, W: White, A: Abyssal
 */
export type SColour = "B" | "G" | "R" | "W" | "A";

export type Rarity = "Normal" | "Magic" | "Rare" | "Unique";

export interface Requirement {
    name: string;
    values: Array<[string, number]>;
    displayMode: number;
    type?: number;
    suffix?: string;
}

export interface Property {
    name: string;
    values: Array<[string, number]>;
    displayMode: number;
    type?: number;
    progress?: number;
}

export interface Gem extends Item {
    support?: boolean; // only grafts skills without support
    additionalProperties?: Property[];
    secDescrText: string;
    nextLevelRequirements?: Property[];
    hybrid?: Hybrid;
}

export interface Hybrid {
    isVaalGem?: boolean;
    baseTypeName: string;
    properties?: Property[];
    explicitMods: string[];
    secDescrText: string;
}

export interface AbyssJewel extends Item {
    abyssJewel: boolean;
    rarity: Rarity;
}

export interface Jewel extends Item {
    foilVariation?: number;
}

export interface Equipped {
    rarity: Rarity;
    x: number;
    y: number;
    inventoryId: string;
}

export interface Socketed {
    socket: number;
    /**
     * null for abyssal jewels
     */
    colour: Colour | null;
}

export type EquippedItem = Equipped & Item;

export type SocketedGem = Socketed & Gem;
export type SocketedAbyssJewel = Socketed & AbyssJewel;
export type SocketedItem = SocketedGem | SocketedAbyssJewel | Gem; // Gem only for grafts skills

export type GetItemsResult = {
    items: Item[];
    character: Character;
    /**
     * Only present in session owner characters
     */
    inventory?: Inventory;
};
