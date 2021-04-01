import { render, screen, fireEvent } from 'tests/test-utils'
import { Button } from 'components'

describe('Button', () => {
  it('Should render the Button and be able to click on it', () => {
    const buttonText = 'Click here'
    const onClickCallback = jest.fn()

    render(<Button onClick={onClickCallback}>{buttonText}</Button>)
    
    screen.getByText(buttonText)
    fireEvent(
      screen.getByText(buttonText),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    expect(onClickCallback).toHaveBeenCalled()

    screen.getByRole('button', { name: new RegExp(`${buttonText}`, 'i') })
  })
})
