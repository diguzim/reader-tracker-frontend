import { render, screen } from 'tests/test-utils'
import { BulletList } from 'components'
import { getByText } from '@testing-library/dom'

describe('BulletList', () => {
  it('Should render all the kids', () => {
    const items = [
      'abc',
      'def',
      'ghi'
    ]

    render(<BulletList list={items} />)

    screen.getByText(items[0])
    screen.getByText(items[1])
    screen.getByText(items[2])
  })
})
