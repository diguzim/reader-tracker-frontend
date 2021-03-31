import { Book } from '@types'

interface BooksInterface {
  books: Book[]
}

function Books ({ books }: BooksInterface) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:4000/api/v1/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const books = await res.json()

  return {
    props: {
      books
    }
  }
}

export default Books
