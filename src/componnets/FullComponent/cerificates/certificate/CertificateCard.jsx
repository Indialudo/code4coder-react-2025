import React, { useState } from 'react';
import Modal from './Modal';

const CertificateCard = ({ certificate }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <div onClick={toggleModal} className="cursor-pointer">
          <img
            alt="certificate"
            className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
            src={`/certificates/${certificate.img}`}
            width={570}
            height={696}
          />
        </div>
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">{certificate.title}</h2>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={toggleModal}
        imageUrl={`/certificates/${certificate.img}`}
      />
    </div>
  );
};

export default CertificateCard;
