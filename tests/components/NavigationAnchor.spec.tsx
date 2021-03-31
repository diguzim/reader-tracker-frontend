import { render, screen } from 'tests/test-utils'
import { NavigationAnchor } from 'components'

const anchorText = 'Anchor Text'

describe('NavigationAnchor', () => {
  it('Should be able to find the anchor text', () => {
    render(<NavigationAnchor href="destiny">{anchorText}</NavigationAnchor>)
    screen.getByRole('link', { name: new RegExp(`${anchorText}`, 'i') })
  })
})
