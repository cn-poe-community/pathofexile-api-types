import { AbyssJewel, Equipped, Jewel } from "./item";

export interface JewelData { [key: string]: JewelDatum }

export interface JewelDatum {
    type: string;
    radius?: number;
    radiusMin?: number;
    radiusVisual?: string;
    subgraph?: Subgraph;
}

export interface ClusterJewelDatum extends JewelDatum {
    subgraph: Subgraph;
}

export interface Subgraph {
    groups: Groups;
    nodes: { [key: string]: Node };
}

export interface Groups {
    [key: string]: Expansion;
}

export interface Expansion {
    proxy: string;
    nodes: string[];
    x: number;
    y: number;
    orbits: number[];
}

export interface Node {
    skill: string;
    name: string;
    icon: string;
    isMastery?: boolean;
    stats: string[];
    group: string;
    orbit: number;
    orbitIndex: number;
    out: string[];
    in: string[];
    isJewelSocket?: boolean;
    expansionJewel?: ExpansionJewel;
    reminderText?: string[];
    isNotable?: boolean;
}

export interface ExpansionJewel {
    size: number;
    index: number;
    proxy: string;
    parent: string;
}

export interface SkillOverride {
    name: string;
    icon: string;
    activeEffectImage: string;
    isKeystone?: boolean;
    isTattoo: boolean;
    stats: string[];
    reminderText?: string[];
    flavorText?: string;
}

export interface MasteryEffects { [key: string]: number }

export interface SkillOverrides { [key: string]: SkillOverride }

export type PassiveItem = Equipped & (Jewel | AbyssJewel);

export type GetPassiveSkillsResult = {
    character: number;
    ascendancy: number;
    alternate_ascendancy: number;
    hashes: number[];
    hashes_ex: number[];
    mastery_effects: MasteryEffects;
    skill_overrides: SkillOverrides;
    items: PassiveItem[];
    jewel_data: JewelData;
}
