import { render, screen } from 'tests/test-utils'
import { NavigationLink } from 'components'

const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/',
}));

const anchorText = 'Anchor Text'

describe('NavigationLink', () => {
  it('Should be able to find the NavigationLink', () => {
    render(<NavigationLink href="destiny">{anchorText}</NavigationLink>)
    screen.getByRole('link', { name: new RegExp(`${anchorText}`, 'i') })
  })
})