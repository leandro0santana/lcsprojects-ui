import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@lcsprojects-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo sapiente distinctio exercitationem similique nesciunt beatae minima, ipsum vel tenetur necessitatibus recusandae quia alias consequuntur dolores voluptas! Corrupti, odio numquam!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
