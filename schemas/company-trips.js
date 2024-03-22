// schemas/pet.js
export default {
    name: 'company-trips',
    type: 'document',
    title: 'company-trips',
    fields: [
        {
            name: 'id',
            type: 'string',
            title: 'Id'
        },
        {
            name: 'header_1',
            type: 'string',
            title: 'Header 1'
        },
        {
            name: 'header_2',
            title: 'Header 2',
            type: 'string',
        },
        {
            name: 'header_3',
            title: 'Header 3',
            type: 'string',
        },
        {
            name: 'get_free_trip_proposal_link',
            title: 'Get Free Trip Proposal Link',
            type: 'string',
        },
        {
            name: 'header_background',
            title: 'Header Background',
            type: 'image',
        },
        {
            name: 'ready_to_plan_your_trip_text_1',
            title: 'Ready To Plan Your Trip Text 1',
            type: 'string',
        },
        {
            name: 'ready_to_plan_your_trip_text_2',
            title: 'Ready To Plan Your Trip Text 2',
            type: 'string',
        },
        {
            name: 'hubspot_form_id',
            title: 'Hubspot form id',
            type: 'string',
        },
        {
            name: 'contact_us_text',
            title: 'Contact us text',
            type: 'string',
        },
        {
            name: 'contact_us_number',
            title: 'Contact us number',
            type: 'string'
        },
        {
            name: 'contact_us_address',
            title: 'Contact us address',
            type: 'string'
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