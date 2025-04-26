import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import Form from './Form'

const meta = {
  title: 'Elements/Form',
  tags: ['autodocs'],
  component: Form,
} satisfies Meta<typeof Form>

export default meta

type Story = StoryObj<typeof meta>

type TemplateProps = {
  formData?: Record<string, string>
  formErrors?: Record<string, string>
}

const Template = ({ formData = {}, formErrors = {} }: TemplateProps): Story => ({
  render: ({ ...args }) => (
    <Form {...args}>
      <Form.Group>
        <Form.Label htmlFor="input1">Input 1</Form.Label>
        <Form.Control id="input1" placeholder="input-1 placeholder" defaultValue={formData.input1} />
        {formErrors.input1 && <Form.Control.Feedback>{formErrors.input1}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="input2">Input 2</Form.Label>
        <Form.Control id="input2" placeholder="input-2 placeholder" defaultValue={formData.input2} />
        {formErrors.input2 && <Form.Control.Feedback>{formErrors.input2}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="select1">Select 1</Form.Label>
        <Form.Select id="select1" defaultValue="opt1">
          <Form.Option value="opt1">Option 1</Form.Option>
          <Form.Option value="opt2">Option 2</Form.Option>
          <Form.Option value="opt3">Option 3</Form.Option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="select2">Select 2</Form.Label>
        <Form.Select id="select2" defaultValue="opt2">
          <Form.Option value="opt1">Option 1</Form.Option>
          <Form.Option value="opt2">Option 2</Form.Option>
          <Form.Option value="opt3">Option 3</Form.Option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Check label="Check me" />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  ),
})

export const Empty: Story = {
  ...Template({}),
}

export const WithData: Story = {
  ...Template({
    formData: {
      input1: 'user data 1',
      input2: 'user data 2',
    },
  }),
}

export const WithErrors: Story = {
  ...Template({
    formErrors: {
      input1: 'Error in input 1',
      input2: 'Error in input 2',
    },
  }),
}
