import React, {Fragment } from "react";
import styled from "styled-components";

const Modal = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`; 

const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 640px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

const ModalBody = styled.div`
  overflow-y: auto;
  padding: 0.8rem;
  position: relative;
`;

const ModalHeader = styled.div`
  color: #303742;
  padding: 0.8rem;
`;

const ModalTitle = styled.h2`
font-weight:700;
`;

const ModalFooter = styled.div`
  padding: 0.8rem;
  text-align: right;
`;

const Close = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const ModalComponent = ({
  title,
  footer,
  children,
  isModalOpen,
  toggleModal
}) => {
  return (
    <Fragment>
      {isModalOpen && (
        <Modal>
          <ModalOverlay onClick={toggleModal}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <Close onClick={toggleModal}>x</Close>
              <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </ModalContainer>
        </Modal>
      )}
    </Fragment>
  );
};
export default ModalComponent;