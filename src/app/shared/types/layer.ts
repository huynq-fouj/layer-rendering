export type LayerItem = {
    id: number;
    img: string;
}

export type LayerOptions = {
    x: number;
    y: number;
    scale: number;
    duplicate?: boolean;
    gap?: number;
}

export type LayerGroup = {
    layers: LayerItem[];
    options: LayerOptions;
}

export type LayerGroups = {
    [key: string]: {
        id: number;
        name: string;
        group: LayerGroup
    }
}

export type LayerFormType = {
    width: number;
    height: number;
    layerGroups: LayerGroups;
}

export type LayerSelectedItem = {
    id: number;
    img: string;
    options: LayerOptions;
}