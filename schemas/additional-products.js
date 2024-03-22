// schemas/pet.js
export default {
    name: 'additional-products',
    type: 'document',
    title: 'additional-products',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                layout: 'grid'
            }
        },
    ]
}