import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthorList from '../components/AuthorList'

const DashboardPage = () => {
  const [authorList, setAuthorList] = useState([])

  const removeFromDom = (deleteId) => {
    const filteredList = authorList.filter((eachAuthor) =>
      eachAuthor._id !== deleteId)
    setAuthorList(filteredList)
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors`)
      .then(response => {
        setAuthorList(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div><h1>Favorite Authors</h1></div>
      <a href="/new">Add an author</a>
      <h2>We have quotes by:</h2>
      <AuthorList authorList={authorList} onDelete={removeFromDom} />
    </div>
  )
}

export default DashboardPage