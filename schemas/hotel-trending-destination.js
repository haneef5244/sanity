// schemas/pet.js
export default {
    name: 'hotel-trending-destination',
    type: 'document',
    title: 'hotel-trending-destination',
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
            name: 'redirect_url',
            type: 'string',
            title: 'Redirect URL'
        }
    ]
}