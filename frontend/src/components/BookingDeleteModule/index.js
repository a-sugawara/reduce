import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function DeleteBookingModal({listing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <button>delete?</button>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal;
