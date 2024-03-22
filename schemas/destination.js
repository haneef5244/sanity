// schemas/pet.js
export default {
    name: 'destination',
    type: 'document',
    title: 'destination',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'image_url',
            type: 'string',
            title: 'Image URL'
        }
    ]
}