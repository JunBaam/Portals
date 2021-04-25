import React from "react";
import styled from "styled-components";
import ReactDom from "react-dom";

function Modal({ open, children, onClose }) {
  //open 이 false 면 null을 리턴
  if (!open) return null;

  //createPortal
  return ReactDom.createPortal(
    <Overlay>
      <Container>
        <button onClick={onClose}>모달닫기</button>

        {children}
      </Container>
    </Overlay>,

    // portal id  가져오기
    document.getElementById("portal"),
  );
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export default Modal;
