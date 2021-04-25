import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달 오픈</Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        모달
      </Modal>

      <Content>내용</Content>
    </>
  );
}

const Button = styled.div`
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  background-color: red;
  padding: 10px;
`;

export default App;
