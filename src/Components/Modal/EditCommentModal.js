import React, { useState } from "react";
import CenterModal from "./CenterModal";
import { toast } from "../Toastify/Toastify";

const EditCommentModal = ({
  children,
  initRating,
  initComment,
  id_comment,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState(initRating);
  const [comment, setComment] = useState(initComment);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleUpdateComment = () => {
    const data = {
      rating: rating,
      comment: comment,
      id_comment: id_comment,
      id_user: sessionStorage.getItem("id_user"),
    };

    console.log("New comment after update : ", data);

    setRating(initRating);
    setComment(initComment);
    setOpenModal(false);

    toast.success("Update comment successfully");
  };

  return (
    <>
      <div onClick={() => setOpenModal(true)}> {children}</div>
      <CenterModal open={openModal} handleClose={handleClose}>
        <div className="content w-[800px]   overflow-hidden rounded-lg  border-[1px] border-[#367FA9]">
          <div className="header bg-slate-600 text-white text-[20px] font-bold flex items-center justify-center h-[60px] w-full">
            Edit Product Comment
          </div>
          <div className="flex items-center text-[18px] justify-between flex-col gap-5">
            <textarea
              name="commentTextArea"
              id="commentTextArea"
              cols="30"
              value={comment}
              rows="10"
              className="p-3 border-2 border-black outline-none mx-auto w-[95%] inline-block  rounded-lg h-[100px] resize-none mt-3"
              placeholder="Edit comment"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>{" "}
            <select
              name="ratingStar"
              id="ratingStar"
              className="w-[100px] border-2 block mr-auto ml-5 border-black px-2 py-1 rounded-lg"
              onChange={handleRatingChange}
              value={rating}
            >
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </div>
          <div className="flex items-center justify-end min-h-[50px] my-3 w-full p-5">
            <button
              className="p-2 bg-blue-500 rounded-lg font-bold text-white px-4 block"
              onClick={handleUpdateComment}
            >
              Apply
            </button>
          </div>
        </div>
      </CenterModal>
    </>
  );
};

export default EditCommentModal;
