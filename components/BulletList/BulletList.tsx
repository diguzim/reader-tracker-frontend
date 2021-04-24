import { ReactNode } from 'react'

export interface BulletListProps {
  list: ReactNode[]
}

export const BulletList: React.FC<BulletListProps> = props => {
  const { list } = props

  return (
    <ul>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
