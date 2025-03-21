import type { CollectionConfig } from 'payload'

export const ServiceCategories: CollectionConfig = {
  slug: 'service-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'isActive', 'displayOrder'],
    group: 'Spa Services',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Category Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
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
        description: 'Uncheck to hide this category on the site',
      },
    },
  ],
}
