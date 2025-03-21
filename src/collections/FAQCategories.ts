import type { CollectionConfig } from 'payload'

export const FAQCategories: CollectionConfig = {
  slug: 'faq-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'isGeneral', 'isActive'],
    group: 'FAQ Management',
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
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Related Services',
      admin: {
        description: 'Select services this FAQ category relates to (leave empty if general)',
      },
    },
    {
      name: 'isGeneral',
      type: 'checkbox',
      defaultValue: false,
      label: 'General FAQ',
      admin: {
        description: 'Check if this is a general FAQ category (not tied to specific services)',
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
