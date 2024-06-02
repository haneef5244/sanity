export default {
    name: 'tour-package-table',
    title: 'tour-package-table',
    type: 'document',
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
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'starts_from',
            type: 'string',
            title: 'Starts from'
        },
        {
            name: 'terms',
            type: 'string',
            title: 'Terms'
        },
        {
            name: 'table',
            title: 'Tour Package Table',
            type: 'table',
        },
    ],
};