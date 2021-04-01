import { render, screen } from 'tests/test-utils'
import { Banner } from 'components'

describe('Banner', () => {
  it('Should render the Banner and be able to find it\'s children', () => {
    const bannerText = 'Some text'
  
    render(<Banner>{bannerText}</Banner>)
  
    screen.getByText(bannerText)
  })
})
