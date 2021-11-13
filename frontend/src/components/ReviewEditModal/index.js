import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewEditForm from './ReviewEditForm';

function ReviewEditModal({reviewId, reviewText}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewEditForm reviewId={reviewId} reviewText={reviewText} onClose={() => setShowModal(false) }/>
        </Modal>
      )}
    </>
  );
}

export default ReviewEditModal;
