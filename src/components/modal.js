import React, { useState } from "react"
import ReactModal from "react-modal"
import { useMutation } from "@apollo/react-hooks"
const Modal = (props) => {
    const [modal, setModal] = useState(false)
    const [addPost, { data }] = useMutation(props.mutation)
    // const [props.text, { data }] = useMutation(props.mutation)
    const [imageUrl, setImageUrl] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const bodyHandler = event => {
        setBody(event.target.value)
    }

    const titleHandler = event => {
        setTitle(event.target.value)
    }

    const handleClick = () => {

        setModal(!modal)
        console.log('this works')
    }
    const ImageUrlHandler = event => {
        setImageUrl(event.target.value)
    }


    const handleForm = () => {
        let i = imageUrl
        let t = title
        let b = body
        addPost({ variables: { imageUrl: i, title: t, body: b } })
        handleClick()
        window.location.reload()
    }


    return (
        <div>

             <button className="button is-medium" style={{ margin: "auto", width: "400px", backgroundColor: "#CF426C", color: "white" }} onClick={handleClick}>
                CLICK TO ENTER NEW POST
             </button>
           
            <br></br>
            <h1>{props.text}</h1>
            <ReactModal isOpen={modal}>
                <form onSubmit={handleForm}>
                    <div className="container">
                        <div className="field">
                            <label className="label">Image URL</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="ImageURL"
                                    onChange={ImageUrlHandler}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Title"
                                    onChange={titleHandler}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Body</label>
                            <div className="control">
                                <textarea
                                    className="input"
                                    type="text"
                                    placeholder="Body"
                                    onChange={bodyHandler}
                                />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-primary">Submit</button>
                            </div>

                            <div className="control">
                                <button className="button is-light " onClick={handleClick}>
                                    Cancel
              </button>
                            </div>
                        </div>
                    </div>
                </form>
            </ReactModal>

        </div>
    )
}
export default Modal
