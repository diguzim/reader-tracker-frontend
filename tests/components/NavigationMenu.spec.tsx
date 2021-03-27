import { smallBreakpoint } from 'common'
import { render, screen, act, fireEvent } from 'tests/test-utils'
import { NavigationMenu } from 'components'

const children = 'Some Children'

describe('NavigationMenu', () => {
  it('should be able to see the navigation menu directly when innerWidth is not small', () => {
    render(<NavigationMenu>{children}</NavigationMenu>)

    act(() => {
      global.innerWidth = smallBreakpoint
      global.dispatchEvent(new Event('resize'))
    })

    screen.getByText(children)
  })

  it('should be able to see the navigation menu only after clicking button to show it when innerWidth is below small', () => {
    render(<NavigationMenu>{children}</NavigationMenu>)

    act(() => {
      global.innerWidth = smallBreakpoint - 1
      global.dispatchEvent(new Event('resize'))
    })

    expect(screen.queryByText(children)).toBeNull()

    fireEvent(
      screen.getByRole('button', { name: /Activate/i }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    screen.getByText(children)
  })
})
