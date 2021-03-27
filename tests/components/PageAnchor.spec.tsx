import { render, screen } from 'tests/test-utils'
import { PageAnchor } from 'components'

const anchorText = 'Some Anchor Text'

describe('PageAnchor', () => {
  it('should be able to find by accessibility role', () => {
    render(<PageAnchor href="destiny">{anchorText}</PageAnchor>)

    screen.getByRole('link', { name: new RegExp(`${anchorText}`, 'i') })
  })
})
