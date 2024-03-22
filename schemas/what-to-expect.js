// schemas/pet.js
export default {
    name: 'what-to-expect',
    type: 'document',
    title: 'what-to-expect',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Planyo Resource Id'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Resource name (optional)',
        },
        {
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [
                {
                    name: 'component',
                    title: 'Component',
                    type: 'object',
                    fields: [
                        {
                            name: 'type',
                            title: 'Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Text', value: 'text', }, // done
                                    { title: 'Image', value: 'image' }, // done
                                ]
                            },
                        },
                        {
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            hidden: ({ parent }) => parent?.type != 'image'
                        },
                        {
                            name: 'text',
                            title: 'Text',
                            rows: false,
                            type: 'text',
                            hidden: ({ parent }) => parent?.type != 'text'
                        }
                    ]
                }


            ],
        },
    ]
}