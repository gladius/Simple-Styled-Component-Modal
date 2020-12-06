import React, { useState } from "react";
import Modal from "./components/modal";
import { Button } from "./components/modal/modal.styles";

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Button onClick={() => setActive(true)}>Open Modal</Button>
      <Modal
        active={active}
        hideModal={() => setActive(false)}
        title="Modal title goes here"
        footer={<Button>Footer Button</Button>}
      >
        Modal body content goes here..
      </Modal>
    </div>
  );
};

export default App;
