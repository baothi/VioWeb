import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';


export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent
}) => {
  const modal = (
    <React.Fragment>
        <div>{modalContent}</div>
        <button onClick={hide}>CLose</button>
      {/* <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper> */}
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};