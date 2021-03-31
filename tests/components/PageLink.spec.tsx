import { render, screen } from 'tests/test-utils'
import { PageLink } from 'components'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  pathname: '/'
}))

const anchorText = 'Some Anchor Text'

describe('PageLink', () => {
  it('should be able to find by accessibility role', () => {
    render(<PageLink href="destiny">{anchorText}</PageLink>)

    screen.getByRole('link', { name: new RegExp(`${anchorText}`, 'i') })
  })
})
