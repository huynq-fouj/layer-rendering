import { LayerFormType } from "../types/layer";

export const LAYER: LayerFormType = {
    width: 800,
    height: 800,
    layerGroups: {
        body: {
            id: 1,
            name: "Body",
            group: {
                layers: [{
                    id: 1,
                    img: 'assets/images/body/female-body.png',
                }],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1,
                }
            }
        },
        face: {
            id: 2,
            name: "Faces",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/faces/face1.webp'
                    },
                    {
                        id: 2,
                        img: 'assets/images/faces/face2.webp'
                    }
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1
                }
            }
        },
        hair: {
            id: 3,
            name: "Hairs",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/hairs/hair1.webp'
                    },
                    {
                        id: 2,
                        img: 'assets/images/hairs/hair2.webp'
                    },
                    {
                        id: 3,
                        img: 'assets/images/hairs/hair3.webp'
                    },
                    {
                        id: 4,
                        img: 'assets/images/hairs/hair4.webp'
                    },
                    {
                        id: 5,
                        img: 'assets/images/hairs/hair5.webp'
                    },
                    {
                        id: 6,
                        img: 'assets/images/hairs/hair6.webp'
                    },
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1
                }
            }
        },
        scrub: {
            id: 4,
            name: "Scrubs",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/scrubs/scrub1.webp',
                    },
                    {
                        id: 2,
                        img: 'assets/images/scrubs/scrub2.webp',
                    },
                    {
                        id: 3,
                        img: 'assets/images/scrubs/scrub3.webp',
                    },
                    {
                        id: 4,
                        img: 'assets/images/scrubs/scrub4.webp',
                    },
                    {
                        id: 5,
                        img: 'assets/images/scrubs/scrub5.webp',
                    },
                    {
                        id: 6,
                        img: 'assets/images/scrubs/scrub6.webp',
                    },
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1
                }
            }
        },
        tShirt: {
            id: 5,
            name: "T-Shirt",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/t-shirts/t-shirt1.webp',
                    },
                    {
                        id: 2,
                        img: 'assets/images/t-shirts/t-shirt2.webp',
                    },
                    {
                        id: 3,
                        img: 'assets/images/t-shirts/t-shirt3.webp',
                    },
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1
                }
            }
        },
        blouse: {
            id: 6,
            name: "Blouse",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/blouses/blouse1.webp'
                    }
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1,
                }
            }
        },
        shoes: {
            id: 7,
            name: "Shoes",
            group: {
                layers: [
                    {
                        id: 1,
                        img: 'assets/images/shoes/shoes1.webp'
                    },
                    {
                        id: 2,
                        img: 'assets/images/shoes/shoes2.webp'
                    },
                    {
                        id: 3,
                        img: 'assets/images/shoes/shoes3.webp'
                    },
                    {
                        id: 4,
                        img: 'assets/images/shoes/shoes4.webp'
                    },
                ],
                options: {
                    x: 0,
                    y: 0,
                    scale: 1,
                }
            }
        }
    }
}