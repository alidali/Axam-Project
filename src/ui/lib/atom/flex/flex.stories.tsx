import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import { Flex, FlexProps } from './flex'

interface ChildProps {
  backgroundColor: string
}
const StyledColorContainer = styled.div<ChildProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
`

const FlexChild = ({ backgroundColor }: ChildProps) => {
  return (
    <StyledColorContainer backgroundColor={backgroundColor}>
      <h1> Hello</h1>
    </StyledColorContainer>
  )
}

const alignItemsOption = [
  'center',
  'start',
  'end',
  'flex-start',
  'flex-end',
  'normal',
  'space-between',
  'space-around',
  'space-evenly',
  'stretch',
]

export default {
  component: Flex,
  title: 'Atoms/Flex',
  argTypes: {
    children: {
      description: 'Component(s) display in the flex container',
    },
    alignItems: {
      description: 'align-items flex property',
      options: alignItemsOption,
    },
    justifyContent: {
      description: 'justify-content flex property',
      options: [...alignItemsOption, 'left', 'right'],
    },
    flexDirection: {
      description: 'flex-direction flex property',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    height: {
      description: 'height of the flex container',
      type: 'string',
    },
    width: {
      description: 'width of the flex container',
      type: 'string',
    },
  },
  args: {
    color: 'purple',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    border: '1px solid black',
    height: '500px',

    children: [
      <FlexChild backgroundColor="red" />,
      <FlexChild backgroundColor="green" />,
      <FlexChild backgroundColor="blue" />,
      <FlexChild backgroundColor="yellow" />,
    ],
  },
} as Meta

const Template: Story<FlexProps> = (args) => <Flex {...args} />

export const Primary = Template.bind({})
Primary.args = {}
