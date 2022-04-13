import React from "react";
import "./style.css";
import API from "../../api";
import { useEffect, useState } from "react";

const Modal = ({ openModal, setOpenModal, state, setState }) => {
  const [post, setPost] = useState({});

  const handleChange = (e) => {
    if (e.target.type === "textarea") {
      setPost({ body: e.target.value });
    } else {
      setPost({ title: e.target.value });
    }
  };

  const updateState = () => {};
  useEffect(() => {
    updateState();
  }, [post]);

  if (openModal) {
    return (
      <div className="modal_container">
        <div className="loader"></div>
        <input
          type="text"
          value={post.title}
          onChange={(e) => handleChange(e)}
        ></input>
        <textarea
          value={post.body}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <div className="button_wrapper">
          <button className="btn text" onClick={() => setOpenModal(false)}>
            Create
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
