import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import API from "../../api";
import Modal from "../Modal";

const ShowPosts = ({ state, setState, setModalOpened, modalOpened }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [singlePost, setSinglePost] = useState({});

  const deletePost = (id) => {
    const deleted = state.results.filter((item) => item.id !== id);
    setState({
      results: [...deleted],
    });
  };

  const showModal = async (id) => {
    try {
      setError(false);
      setLoading(true);
      const post = await API.getPost(id);
      const newPosts = state.results.filter((item) => item.id == id);
      console.log(...newPosts);
      setSinglePost(...newPosts);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
    setModalOpened(true);
  };

  return (
    <>
      <div className="posts">
        {state.results.map((post) => {
          const postTitle = post.title;
          const postBody = post.body;
          const userId = post.userId;
          const id = post.id;
          return (
            <div className="single_post" key={id}>
              <div className="postTitle">
                <h5>{postTitle}</h5>
              </div>
              <div className="post_body">
                <p>{postBody}</p>
              </div>
              <div className="button_wrapper">
                <button onClick={() => deletePost(id)} className="btn red">
                  <AiFillDelete />
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    showModal(id);
                  }}
                >
                  <AiFillEdit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        singlePost={singlePost}
        setModalOpened={setModalOpened}
        modalOpened={modalOpened}
        setState={setState}
        state={state}
      />
    </>
  );
};

export default ShowPosts;
