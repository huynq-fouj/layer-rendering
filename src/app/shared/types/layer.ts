export type LayerItem = {
    id: number;
    img: string;
}

export type LayerGroup = {
    layers: LayerItem[];
    options: {
        x: number;
        y: number;
        scale: number;
    }
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