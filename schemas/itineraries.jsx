// schemas/pet.js

import Airplane from '../icons/airplane';
import { GiCommercialAirplane } from "react-icons/gi";

import * as CarbonIcons from 'react-icons/gi';


export default {
    name: 'itineraries',
    type: 'document',
    title: 'itineraries',
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
            name: 'itinerary_file',
            type: 'file',
            title: 'Itinerary pdf',
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
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                        },
                        {
                            name: 'icons',
                            title: 'Icons',
                            type: 'object',
                            fields: [
                                {
                                    name: 'first_icon',
                                    title: 'First Icon',
                                    type: 'object',
                                    fields: [
                                        { name: 'has_first_icon', title: 'Has first icon?', type: 'boolean' },
                                        {
                                            title: 'Icon',
                                            name: 'icon_picker',
                                            type: 'iconPicker',
                                            options: {
                                                storeSvg: true,
                                                configurations: [
                                                    {
                                                        title: 'React Icons',
                                                        provider: 'ci',
                                                        icons: (options) =>
                                                            Object.entries(CarbonIcons).map(([name, Component]) => ({
                                                                name,
                                                                component: () => <Component width="50em" height="50em" />,
                                                                tags: [name],
                                                            })),
                                                    },
                                                ],
                                            },
                                            hidden: ({ parent }) => !parent?.has_first_icon
                                        },
                                    ],
                                },
                                {
                                    name: 'second_icon',
                                    title: 'Second Icon',
                                    type: 'object',
                                    fields: [
                                        { name: 'has_second_icon', title: 'Has second icon?', type: 'boolean' },
                                        {
                                            title: 'Icon',
                                            name: 'icon_picker',
                                            type: 'iconPicker',
                                            options: {
                                                storeSvg: true,
                                                configurations: [
                                                    {
                                                        title: 'React Icons',
                                                        provider: 'ci',
                                                        icons: (options) =>
                                                            Object.entries(CarbonIcons).map(([name, Component]) => ({
                                                                name,
                                                                component: () => <Component width="50em" height="50em" />,
                                                                tags: [name],
                                                            })),
                                                    },
                                                ],
                                            },
                                            hidden: ({ parent }) => !parent?.has_second_icon
                                        },
                                    ],

                                },
                            ]
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


            ],
        },
    ]
}