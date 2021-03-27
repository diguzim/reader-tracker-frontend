import { render, screen } from "tests/test-utils";
import { Button } from 'components/Button'

const ButtonText = "Clique aqui"

describe('Button', () => {
  it("renders the Button", () => {
    render(<Button>{ButtonText}</Button>)
    screen.getByText(ButtonText)
  })
})
