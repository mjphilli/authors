import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

// 1. get id from params (useParams)
// 2. with the id, send api call on load (axios, useEffect)
// 3. form input : useState
// 4. after submit, send request to API: axios
// 5. logic after submit: redirect: useNavigate

const UpdatePage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [authorName, setAuthorName] = useState("")
  const [errors, setErrors] = useState([])

  const cancel = () => {
    navigate(`/`)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //send formdata to api
    axios.patch(`http://localhost:8000/api/authors/${id}`, { authorName })
      .then(response => {
        navigate(`/`)
      })
      .catch(err => {
        const errResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errResponse)) { // Loop through all errors and get the messages
          errorArr.push(errResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr)
      })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(response => {
        const author = response.data
        setAuthorName(author.authorName)
      })
      .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {/* {
        authorName ? authorName : "nothing"
      } */}
      {
        authorName ?
          <div>
            <div><h1>Favorite Authors</h1></div>
            <a href="/">Home</a>
            <h2>Edit this author</h2>
            <form onSubmit={handleSubmit}>
              {errors.map((err, index) => <p key={index}>{err}</p>)}
              <div>
                <label>Name </label>
                <input type="text" name="authorName" value={authorName} onChange={e => setAuthorName(e.target.value)} />
              </div>
              <button onClick={cancel}>Cancel</button>
              <button type="submit">Submit</button>
            </form>
          </div> :
          <div>
            <h3>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h3>
            <a href="/new">Add an author</a>
          </div>
      }
    </div>
  )
}

export default UpdatePage