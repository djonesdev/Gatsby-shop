import { MdPerson as icon } from 'react-icons/md';

export default {
  name: 'person',
  title: 'Slicemasters',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Tell us about them...',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Desription',
      type: 'text',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotSpot: true,
      },
    },
    // TODO add custom component
  ],
};
