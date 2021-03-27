import { render, screen, fireEvent } from 'tests/test-utils'
import { TextInput } from 'components'

const label = 'Some Label'
const id = 'someId'

describe('TextInput', () => {
  it('find TextInput from it\'s label when label and id are present', () => {
    render(<TextInput id={id} label={label} />)
    screen.getByRole('textbox', { name: new RegExp(`${label}`, 'i') })
  })

  it('should not find TextInput from it\'s label id is not present', () => {
    render(<TextInput label={label} />)
    expect(screen.queryByRole('textbox', { name: new RegExp(`${label}`, 'i') })).toBeNull()
    screen.getByText(label)
  })

  it('should not find a label element if none was informed', () => {
    const { container } =  render(<TextInput />)
    expect(container.querySelector('label')).toBeNull()
  })

  it('should change the input value upon typing', () => {
    const inputValue = 'Hello World!'
    const onChangeCallback = jest.fn()

    render(<TextInput id={id} label={label} onChange={onChangeCallback} />)
    fireEvent.change(
      screen.getByRole('textbox', { name: new RegExp(`${label}`, 'i') }),
      { target: { value: inputValue } }
    )
    
    expect(onChangeCallback).toHaveBeenCalled()
  })
})