import React, { useState } from "react";
import CenterModal from "./CenterModal";

const EditCommentModal = ({
  initialComment,
  id_comment,
  initRating,
  children,
}) => {
  const [editedComment, setEditedComment] = useState(initialComment);
  const [rating, setRating] = useState(initRating);
  const [openModal, setOpenModal] = useState(false);

  const handleSave = () => {
    const data = {
      comment: editedComment,
      rating: rating,
      id_comment: id_comment,
    };
    console.log("Edit comment paramm: ", data);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[350px] md:w-[400px] overflow-hidden rounded-lg border-[1px] border-[#367FA9]">
          <div className="header bg-[#3C8DBC] text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            Edit Comment
          </div>
          <div>
            <textarea
              name="editedComment"
              id="editedComment"
              cols="30"
              value={editedComment}
              rows="10"
              className="p-5 border-2 border-black outline-none mx-auto w-[95%] inline-block ml-10 rounded-lg h-[100px] resize-none mt-3"
              placeholder="Write comment"
              onChange={(e) => setEditedComment(e.target.value)}
            ></textarea>
          </div>
          <select
            name="ratingStar"
            id="ratingStar"
            className="w-[100px] border-2 border-black px-2 py-1 rounded-lg"
            onChange={handleRatingChange}
            value={rating}
          >
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
          <div className="flex items-center justify-end p-3">
            <button
              className="bg-slate-500 p-2 rounded-md text-white mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-slate-500 p-2 rounded-md text-white"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default EditCommentModal;
