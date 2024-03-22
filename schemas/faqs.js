// schemas/pet.js
export default {
    name: 'faqs',
    type: 'document',
    title: 'faqs',
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
            name: 'faqs',
            type: 'array',
            title: 'Faqs',
            of: [
                {
                    name: 'component',
                    title: 'Component',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'contents',
                            type: 'array',
                            title: 'Contents',
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
                                                    { title: 'Image', value: 'images' }, // done
                                                    { title: 'Bullet Point Text', value: 'bullet_point_text' }
                                                ]
                                            },
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
                                            validation: (Rule) => Rule.max(3),
                                            options: {
                                                layout: 'grid'
                                            },
                                            hidden: ({ parent }) => parent?.type != 'images'
                                        },
                                        {
                                            name: 'text',
                                            title: 'Text',
                                            rows: false,
                                            type: 'text',
                                            hidden: ({ parent }) => parent?.type != 'text'
                                        },
                                        {
                                            name: 'bullet_point_text',
                                            title: 'Bullet Point Text',
                                            rows: false,
                                            type: 'text',
                                            hidden: ({ parent }) => parent?.type != 'bullet_point_text'
                                        }
                                    ]
                                }
                            ],
                        },
                    ]
                }
            ]
        }
    ]
}