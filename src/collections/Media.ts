import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Content Management',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        position: 'centre',
      },
      {
        name: 'featured',
        width: 1200,
        height: 800,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
      admin: {
        description: 'Important for SEO and accessibility',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Services',
          value: 'services',
        },
        {
          label: 'Facilities',
          value: 'facilities',
        },
        {
          label: 'Staff',
          value: 'staff',
        },
        {
          label: 'Testimonials',
          value: 'testimonials',
        },
        {
          label: 'Logo/Branding',
          value: 'branding',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      defaultValue: 'other',
      admin: {
        description: 'Categorize this image for better organization',
      },
    },
  ],
}
