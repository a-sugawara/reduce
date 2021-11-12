import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewDeletePrompt from './ReviewDeletePrompt';

function ReviewDeleteModal({reviewId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewDeletePrompt reviewId={reviewId} onClose={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewDeleteModal;
