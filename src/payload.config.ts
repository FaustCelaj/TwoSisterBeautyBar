import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ServiceCategories } from './collections/ServiceCategories'
import { Services } from './collections/Services'
import { FAQCategories } from './collections/FAQCategories'
import { FAQs } from './collections/FAQs'
import { SpaSettings } from './globals/SpaSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Spa Admin',
      favicon: '/favicon.ico',
    },
    components: {
      // You can customize admin components here if needed
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, ServiceCategories, Services, FAQCategories, FAQs],
  globals: [SpaSettings],
  editor: lexicalEditor(),
  upload: {
    limits: {
      fileSize: 5000000, // 5MB in bytes
    },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
