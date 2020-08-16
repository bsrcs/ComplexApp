import React, { useEffect, useState } from "react"
import Page from "./Page"
import Axios from "axios"
// we essentially just want to push a new Url onto the end of browser history.
// in order to work with react routers History
import { withRouter } from "react-router-dom"

// inside props we can access different things that the react router package has given us.
function CreatePost(props) {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      // storing the server's response in this variable
      const response = await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("complexappToken"),
      })
      // Redirect to new post URL(redirect the user to the view post screen.)
      // use back ticks & get actual data from the servers's response(dynamically).
      props.history.push(`/post/${response.data}`)
      console.log("New post was created.")
    } catch (err) {
      console.log("There was an error.")
    }
  }

  return (
    <Page title="Create Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  )
}

export default withRouter(CreatePost)
