interface Book {
  id: number
  name: string
}

interface Books {
  books: Book[]
}

function Books({ books }: Books) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/api/v1/books', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const books = await res.json()
  console.log('books', books)

  return {
    props: {
      books,
    },
  }
}

export default Books
