import React from "react";
import "./style.css";
import API from "../../api";
import { useEffect, useState } from "react";

const Modal = ({
  state,
  singlePost,
  modalOpened,
  setModalOpened,
  setState,
}) => {
  const [post, setPost] = useState({ ...singlePost });

  const updatePost = async () => {
    try {
      const updatedPost = await API.updatePost(post);
    } catch (error) {
      console.log(error);
    }
    const newPosts = state.results.map((item) => {
      if (item.id == post.id) {
        return post;
      }
      return item;
    });
    setState({
      results: [...newPosts],
    });
  };

  useEffect(() => {
    setPost({ ...singlePost });
  }, [singlePost]);

  useEffect(() => {
    updatePost();
  }, [post]);

  const handleChange = (e) => {
    if (e.target.type === "textarea") {
      setPost({ ...singlePost, body: e.target.value });
    } else {
      setPost({ ...singlePost, title: e.target.value });
    }
  };

  if (modalOpened) {
    return (
      <div className="modal_container">
        <div className="loader"></div>
        <label>Title</label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Body</label>
        <textarea
          value={post.body}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <div className="button_wrapper">
          <button className="btn text" onClick={() => setModalOpened(false)}>
            Close
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
