import React from 'react'
import { Link } from 'react-router-dom'
import DeleteAuthor from '../components/DeleteAuthor'

const AuthorList = (props) => {
    return (
        <div>
            <table style={{ margin:"auto" }}>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.authorList.sort((a, b)=> a.authorName < b.authorName ? -1 : 1).map((eachAuthor, idx) => (
                            <tr key={idx}>
                                <td>
                                    {eachAuthor.authorName}
                                </td>
                                <td>
                                    <Link to={`/edit/${eachAuthor._id}`}>Edit </Link>
                                    {/* <button href={`/edit/${eachAuthor._id}`}>Edit</button> */}
                                    <DeleteAuthor id={eachAuthor._id} onDelete={props.onDelete} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList