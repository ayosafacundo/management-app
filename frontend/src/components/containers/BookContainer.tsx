import React from 'react'

interface BookContainerInput {
  children: React.ReactElement[]
}

function BookContainer({ children }: BookContainerInput): React.ReactElement {
  return (
    <section>
      {children}
    </section>
  )
}

export default BookContainer