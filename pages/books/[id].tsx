import { Book } from '@types'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { ParsedUrlQuery } from 'querystring'

function BookPage ({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <p>Name: {book.name}</p>
      <p>Author: {book.author}</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:4000/api/v1/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const books: Book[] = await res.json()

  const paths = books.map((book) => ({
    params: {
      id: book.id.toString()
    }
  }))

  return { paths, fallback: false }
}

interface StaticProps {
  book: Book
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<StaticProps, Params> = async (
  context
) => {
  const { params } = context
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { id } = params!

  const res = await fetch(`http://localhost:4000/api/v1/books/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const book: Book = await res.json()

  return { props: { book } }
}

export default BookPage
