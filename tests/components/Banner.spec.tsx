import { render, screen, fireEvent } from 'tests/test-utils'
import { Banner } from 'components'

describe('Banner', () => {
  it("Should render the Banner and be able to find it's children and click to close", () => {
    const bannerText = 'Some text'
    const onCloseCallback = jest.fn()

    render(
      <Banner onClose={onCloseCallback}>
        {bannerText}
      </Banner>
    )

    screen.getByText(bannerText)
    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )
    expect(onCloseCallback).toHaveBeenCalled()
  })

  it("Should not be able to click to close when it's not dismissable", async () => {
    const bannerText = 'Some text'
    const onCloseCallback = jest.fn()

    render(
      <Banner dismissable={false} onClose={onCloseCallback}>
        {bannerText}
      </Banner>
    )

    screen.getByText(bannerText)
    expect(screen.queryByRole('button')).toBeNull
  })
})
