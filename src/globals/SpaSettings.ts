import { GlobalConfig } from 'payload'

export const SpaSettings: GlobalConfig = {
  slug: 'spa-settings',
  admin: {
    group: 'Site Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      required: true,
      label: 'Site Title',
    },
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Default Meta Title',
      admin: {
        description: 'Default title tag for SEO (70 characters max)',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Default Meta Description',
      admin: {
        description: 'Default meta description for SEO (160 characters max)',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Site Logo',
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email Address',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Physical Address',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'Pinterest', value: 'pinterest' },
            { label: 'YouTube', value: 'youtube' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Profile URL',
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'array',
      label: 'Business Hours',
      fields: [
        {
          name: 'day',
          type: 'select',
          options: [
            { label: 'Monday', value: 'monday' },
            { label: 'Tuesday', value: 'tuesday' },
            { label: 'Wednesday', value: 'wednesday' },
            { label: 'Thursday', value: 'thursday' },
            { label: 'Friday', value: 'friday' },
            { label: 'Saturday', value: 'saturday' },
            { label: 'Sunday', value: 'sunday' },
          ],
          required: true,
        },
        {
          name: 'isOpen',
          type: 'checkbox',
          label: 'Open on this day',
          defaultValue: true,
        },
        {
          name: 'openTime',
          type: 'text',
          label: 'Opening Time (e.g., 9:00 AM)',
          admin: {
            condition: (data, siblingData) => siblingData.isOpen,
          },
        },
        {
          name: 'closeTime',
          type: 'text',
          label: 'Closing Time (e.g., 5:00 PM)',
          admin: {
            condition: (data, siblingData) => siblingData.isOpen,
          },
        },
      ],
    },
  ],
}
