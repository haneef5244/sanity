// schemas/pet.js
export default {
    name: 'destination_blog',
    type: 'document',
    title: 'destination-blog',
    fields: [
        {
            name: 'destination',
            type: 'string',
            title: 'Destination',
            description: 'Example: Bali, Phuket, Langkawi'
        },
        {
            name: 'country',
            type: 'string',
            title: 'Country',
        },
        {
            name: 'region',
            type: 'string',
            title: 'Region',
            description: 'If is_popular_destination is set to false, this country will appear under its respective region in the header section.',
            options: {
                list: [
                    { title: 'South East Asia', value: 'south_east_asia' },
                    { title: 'East Asia', value: 'east_asia' },
                    { title: 'West Asia', value: 'west_asia' }
                ]
            }
        },
        {
            name: 'is_popular_destination',
            type: 'boolean',
            description: 'If country is a popular destination, it will appear under Popular Destinations under header section, else it will appear under its respective region.',
            title: 'Is Popular Destination?',
        },
        {
            name: 'header_cover_photo',
            type: 'image',
            description: 'This is the photo that will be displayed for the country under the Destinations > Popular Destinations (in header) if is_popular_destination is set to true.',
            title: 'Header Cover Photo',
            hidden: ({ document }) => !document.is_popular_destination
        },

        {
            name: 'header_1',
            type: 'string',
            description: 'This is the start of content creation under /destinations page. Example: Discover Bali',
            title: 'Header 1'
        },
        {
            name: 'sub_header_1',
            type: 'string',
            description: 'Journey through the Island of Gods and Komodo Dragons, your adventure awaits!',
            title: 'Content 1',
        },
        {
            name: 'header_1_background',
            type: 'image',
            description: 'Background image of header_1',
            title: 'Header 1 Background',
        },
        {
            name: 'contents',
            type: 'array',
            description: 'Contents',
            title: 'Contents',
            of: [
                {
                    name: 'content',
                    title: 'Content',
                    type: 'object',
                    fields: [
                        // header
                        {
                            name: 'header',
                            title: 'Header',
                            type: 'object',
                            description: 'Header of content',
                            fields: [
                                { name: 'value', title: 'Value', type: 'string', description: 'Title of the section header, for example: Top things to do in Bali' },
                                { name: 'font_size', title: 'Font Size', type: 'string', default: '18px', description: '10px,12px,13px, etc' },
                                { name: 'font_weight', title: 'Font Weight', type: 'string', default: 'bold', description: '100,200,300,400,500,600 or bold' }
                            ]
                        },
                        {
                            name: 'sub_header',
                            title: 'Sub Header',
                            type: 'object',
                            description: 'Sub header of content',
                            fields: [
                                { name: 'has_sub_header', title: 'Display Subheader?', type: 'boolean', description: 'Set to false if sub header is not required', default: true },
                                { name: 'value', title: 'Value', type: 'string', hidden: ({ parent }) => !parent?.has_sub_header, description: 'Sub header, for example: Dreaming of a Bali getaway? Indonesia\'s Bali offers enchanting experiences for every traveler. From the mesmerizing Tegallalang Rice Terraces to the cultural heart of Ubud, indulge in a relaxing and spiritual trip to Bali. Whether it\'s cultural immersion, relaxation, or thrilling adventures you seek, Bali promises an unforgettable journey.' },
                                { name: 'font_size', title: 'Font Size', type: 'string', default: '16px', description: '10px, 11px, 12px, etc', hidden: ({ parent }) => !parent?.has_sub_header, },
                                { name: 'font_weight', title: 'Font Weight', type: 'string', default: 'bold', description: '100,200,300,400,500,600 or bold', hidden: ({ parent }) => !parent?.has_sub_header, }
                            ],
                            hidden: ({ parent }) => parent && parent._type !== 'content'
                        },
                        {
                            name: 'image_component',
                            title: 'Image Component',
                            type: 'object',
                            fields: [
                                { name: 'has_image_component', title: 'Display image component?', type: 'boolean', },
                                {
                                    name: 'type',
                                    title: 'Component type',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: '1 card', value: 'one_card', }, // done
                                            { title: '3 cards horizontal slider', value: 'three_cards_horizontal_slider' }, // done
                                            { title: '3 cards horizontal with description', value: 'three_cards_horizontal_with_description' }, //done
                                            { title: '4 cards slider', value: 'four_cards' }, // done
                                            { title: 'Split cards', value: 'split_cards', description: '1 on left, 2 on right' }, // done
                                            { title: '9 cards', value: 'nine_cards' },
                                            { title: '6 cards', value: 'six_cards' },
                                        ]
                                    },
                                    hidden: ({ parent }) => !parent?.has_image_component,
                                },
                                // for 1 card
                                {
                                    name: 'one_card',
                                    title: 'Component properties',
                                    type: 'object',
                                    fields: [
                                        { name: 'title', type: 'string', title: 'Title', },
                                        { name: 'image', type: 'image', title: 'Image', },
                                        { name: 'resource_id', type: 'string', title: 'Resource ID', description: 'For navigating to product' }
                                    ],
                                    hidden: ({ parent }) => parent?.type != 'one_card',

                                },
                                {
                                    name: 'three_cards_horizontal_slider',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [
                                                { name: 'resource_id', title: 'Resource ID in Planyo', type: 'string' }
                                            ]
                                        }
                                    ],
                                    validation: (Rule) => Rule.min(3),
                                    hidden: ({ parent }) => parent?.type != 'three_cards_horizontal_slider',
                                },
                                {
                                    name: 'three_cards_horizontal_with_description',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [
                                                { name: 'title', type: 'string', title: 'Title' },
                                                { name: 'image', type: 'image', title: 'Image', },
                                                { name: 'description', type: 'string', title: 'Description', },
                                            ]
                                        }

                                    ],
                                    validation: Rule => Rule.max(3),
                                    hidden: ({ parent }) => parent?.type != 'three_cards_horizontal_with_description',
                                },
                                {
                                    name: 'four_cards',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [

                                                { name: 'resource_id', title: 'Resource ID in Planyo', type: 'string' }
                                            ]
                                        }
                                    ],
                                    validation: (Rule) => Rule.min(4),
                                    hidden: ({ parent }) => parent?.type != 'four_cards',
                                },
                                {
                                    name: 'split_cards',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [

                                                { name: 'title', type: 'string', title: 'Title', },
                                                { name: 'image', type: 'image', title: 'Image', },
                                                { name: 'alt', type: 'string', title: 'Alt Image' }
                                            ]
                                        }
                                    ],
                                    validation: Rule => Rule.max(3),
                                    hidden: ({ parent }) => parent?.type != 'split_cards',

                                },
                                {
                                    name: 'nine_cards',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [

                                                { name: 'title', type: 'string', title: 'Title', },
                                                { name: 'image', type: 'image', title: 'Image', },
                                            ]
                                        }
                                    ],
                                    validation: Rule => Rule.max(9),
                                    hidden: ({ parent }) => parent?.type != 'nine_cards',

                                },
                                {
                                    name: 'six_cards',
                                    title: 'Component properties',
                                    type: 'array',
                                    of: [
                                        {
                                            name: 'data', title: 'Data', type: 'object', fields: [

                                                { name: 'title', type: 'string', title: 'Title', },
                                                { name: 'description', type: 'string', title: 'Description', },
                                            ]
                                        }
                                    ],
                                    validation: Rule => Rule.max(6),
                                    hidden: ({ parent }) => parent?.type != 'six_cards',
                                },
                            ]
                        },
                        {
                            name: 'additional_info',
                            title: 'Additional info',
                            type: 'object',
                            fields: [
                                { name: 'has_additional_info', title: 'Display additional info?', type: 'boolean' },
                                { name: 'value', title: 'Value', type: 'string', hidden: ({ parent }) => !parent?.has_additional_info },
                                { name: 'font_size', title: 'Font Size', type: 'string', hidden: ({ parent }) => !parent?.has_additional_info, default: '18px', description: '10px,11px, etc' },
                                { name: 'font_weight', title: 'Font Weight', type: 'string', hidden: ({ parent }) => !parent?.has_additional_info, default: 'bold', description: '100,200,300,400,500,600 or bold' }
                            ]
                        },
                        {
                            name: 'has_border',
                            title: 'Has bottom border',
                            type: 'boolean',
                        }
                    ]
                }
            ]
        },
        {
            name: 'faq',
            type: 'array',
            description: 'FAQ',
            title: 'FAQ',
            of: [
                {
                    name: 'faq',
                    title: 'faq',
                    type: 'object',
                    fields: [
                        // header
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'content',
                            title: 'Content',
                            type: 'string'
                        }
                    ]
                }
            ]
        }
    ]
}