import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'duration', 'isActive'],
    group: 'Spa Services',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'service-categories',
      required: true,
      label: 'Service Category',
      admin: {
        description: 'The category this service belongs to',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 250,
      label: 'Description',
      admin: {
        description: 'Brief description for listings (max 250 characters)',
      },
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      label: 'Price ($)',
    },
    {
      name: 'durationHours',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
      max: 12,
      label: 'Duration (Hours)',
      admin: {
        description: 'Number of hours (e.g., 1 for 1 hour)',
      },
    },
    {
      name: 'durationMinutes',
      type: 'select',
      required: true,
      defaultValue: '0',
      options: [
        { label: '0 minutes', value: '0' },
        { label: '15 minutes', value: '15' },
        { label: '30 minutes', value: '30' },
        { label: '45 minutes', value: '45' },
      ],
      label: 'Duration (Minutes)',
      admin: {
        description: 'Additional minutes',
      },
    },
    {
      name: 'bookingLink',
      type: 'text',
      label: 'Booking Link',
      admin: {
        description: 'URL to the booking software for this service',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Service Image',
      admin: {
        description: 'Thumbnail image for this service',
      },
    },
    {
      name: 'specialOffer',
      type: 'checkbox',
      defaultValue: false,
      label: 'Special Offer',
      admin: {
        description: 'Check to mark this as a special offer',
      },
    },
    {
      name: 'popular',
      type: 'checkbox',
      defaultValue: false,
      label: 'Popular Service',
      admin: {
        description: 'Check to mark this as a popular service',
      },
    },
    {
      name: 'metaTitle',
      type: 'text',
      maxLength: 70,
      label: 'SEO Meta Title',
      admin: {
        description: 'Maximum 70 characters for optimal SEO (optional)',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      maxLength: 160,
      label: 'SEO Meta Description',
      admin: {
        description: 'Maximum 160 characters for optimal SEO (optional)',
      },
    },
    {
      name: 'metaKeywords',
      type: 'text',
      label: 'SEO Keywords',
      admin: {
        description: 'Comma separated keywords for SEO (optional)',
      },
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers will be displayed first',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
      admin: {
        description: 'Uncheck to hide this service on the site',
      },
    },
  ],
}
