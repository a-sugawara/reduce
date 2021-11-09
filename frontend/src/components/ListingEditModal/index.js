import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingEditForm from './ListingEditForm';

function ListingEditModal({listing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingEditForm listing={listing} />
        </Modal>
      )}
    </>
  );
}

export default ListingEditModal;
