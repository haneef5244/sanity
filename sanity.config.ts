import { defineConfig, isDev } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { table } from '@sanity/table';
const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Tripigo',

  projectId: 'w2ik271x',
  dataset: 'production',

  plugins: [
    structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : []), iconPicker(),
    table(),
  ],

  schema: {
    types: [
      ...schemaTypes,
      {
        name: 'product',
        title: 'Product',
        type: 'document',
        fields: [
          {
            // Include the table as a field
            // Giving it a semantic title
            name: 'sizeChart',
            title: 'Size Chart',
            type: 'table',
          },
        ],
      },
    ],
  },
})

