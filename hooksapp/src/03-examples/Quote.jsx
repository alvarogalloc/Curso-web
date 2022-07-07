const Quote = ({ text, author }) => {
  return (
    <blockquote className='blockquote text-end'>
      <p className='mb-2'>{text}</p>
      <footer className='blockquote-footer'>- {author}</footer>
    </blockquote>
  )
}

export default Quote
