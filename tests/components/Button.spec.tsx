import { render, screen, fireEvent } from 'tests/test-utils'
import { Button } from 'components/Button'

describe('Button', () => {
  it('Should render the Button and be able to click on it', () => {
    const ButtonText = 'Click here'
    const onClickCallback = jest.fn()

    render(<Button onClick={onClickCallback}>{ButtonText}</Button>)
    screen.getByText(ButtonText)
    fireEvent(
      screen.getByText(ButtonText),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    expect(onClickCallback).toHaveBeenCalled()

    screen.getByRole('button', { name: new RegExp(`${ButtonText}`, 'i') })
  })
})
