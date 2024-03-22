// schemas/pet.js
export default {
    name: 'website-banner',
    type: 'document',
    title: 'website-banner',
    fields: [
        {
            name: 'header',
            type: 'string',
            title: 'Header Name'
        },
        {
            name: 'subheader',
            type: 'string',
            title: 'Subheader Name'
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