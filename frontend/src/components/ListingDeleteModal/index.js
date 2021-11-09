import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingDeletePrompt from './ListingDeletePrompt';

function DeleteListingModal({listing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingDeletePrompt listing={listing}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteListingModal;
