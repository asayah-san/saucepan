type Sauce = {
    _id: number,
    question: string,
    answer: string
}

type Pan = {
    _id: number,
    name: string,
    sauces: Sauce[]
}

export type { Sauce, Pan }