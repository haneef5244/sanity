// schemas/pet.js
export default {
    name: 'yachts',
    type: 'document',
    title: 'yachts',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
                {
                    type: 'image',
                }
            ],
            options: {
                layout: 'grid'
            }
        },
    ]
}