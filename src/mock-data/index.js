export const ingredientsInfo = [
    { name: 'bread', emoji: '🍞', price: 2 },
    { name: 'lettuce', emoji: '🥬', price: 1.5 },
    { name: 'tomato', emoji: '🍅', price: 1 },
    { name: 'pickle', emoji: '🥒', price: 1.75 },
    { name: 'meat', emoji: '🥩', price: 5 }
]

export const wholefoodsIngredientsInfo = [
    { name: 'bread', emoji: '🍞', price: 2.6 },
    { name: 'lettuce', emoji: '🥬', price: 1.75 },
    { name: 'tomato', emoji: '🍅', price: 1.23 },
    { name: 'pickle', emoji: '🥒', price: 2 },
    { name: 'meat', emoji: '🥩', price: 6 }
]
export const bjsIngredientsInfo = [
    { name: 'bread', emoji: '🍞', price: 2.8 },
    { name: 'lettuce', emoji: '🥬', price: 2 },
    { name: 'tomato', emoji: '🍅', price: 1.56 },
    { name: 'pickle', emoji: '🥒', price: 2.20 },
    { name: 'meat', emoji: '🥩', price: 4.5 }
]
export const targetIngredientsInfo = [
    { name: 'bread', emoji: '🍞', price: 2.8 },
    { name: 'lettuce', emoji: '🥬', price: 1.5 },
    { name: 'tomato', emoji: '🍅', price: 1 },
    { name: 'pickle', emoji: '🥒', price: 2.5 },
    { name: 'meat', emoji: '🥩', price: 5 }
]


export const favStoresInfo = [
    {
        name: 'wholefoods',
        image: 'https://upload.wikimedia.org/wikipedia/commons/archive/a/a2/20200709125950%21Whole_Foods_Market_201x_logo.svg',
        locations: [
            {city: 'Bellingham', state: 'MA', hours: 2},
            {city: 'Framingham', state: 'MA', hours: 1},
            {city: 'Hopkinton', state: 'MA', hours: 3},
            {city: 'Ashland', state: 'MA', hours: 1}
        ],
        ingredients: wholefoodsIngredientsInfo
    },
    {
        name: 'bjs',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/BJs_Wholesale_Club_Logo.svg',
        locations: [
            {city: 'Framingham', state: 'MA', hours: 1},
            {city: 'Hopkinton', state: 'MA', hours: 3},
            {city: 'Ashland', state: 'MA', hours: 1}
        ],
        ingredients: bjsIngredientsInfo
    },
    {
        name: 'target',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg',
        locations: [
            {city: 'Bellingham', state: 'MA', hours: 2},
            {city: 'Framingham', state: 'MA', hours: 1}
        ],
        ingredients: targetIngredientsInfo
    }
]