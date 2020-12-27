type Sauce = {
    id: number,
    question: string,
    answer: string
}

type Pan = {
    id: number,
    name: string,
    sauces: Sauce[]
}

export type { Sauce, Pan }