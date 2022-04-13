import "./style.css";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateModal from "../CreateModal";
import { useState } from "react";

const CreatePost = ({ state, setState }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="create_post">
      <h5>To Create Post</h5>
      <div className="button_wrapper">
        <button className="btn" onClick={() => setOpenModal(true)}>
          <AiFillPlusCircle />
        </button>
      </div>
      <CreateModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setState={setState}
        state={state}
      />
    </div>
  );
};

export default CreatePost;
