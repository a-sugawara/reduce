import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingImageForm from './ListingImageForm';

function ListingimageModal({listing}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingImageForm listing={listing}/>
        </Modal>
      )}
    </>
  );
}

export default ListingimageModal;
