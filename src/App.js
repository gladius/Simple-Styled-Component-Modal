import React,{useState} from "react";
import Modal from "./components/modal";
import { Button } from "./components/button";

const App =()=> {
  const [active, setActive] = useState(false)
     return (
      <div>
        <Button onClick={() =>setActive(true)}>Open Modal</Button>
        <Modal
          active={active}
          hideModal={()=>setActive(false)}
          title="Bla !! the title goes here"
          footer={<Button>Footer Button</Button>}
        >
          Bla Bla Bla ..... the body goes here..
        </Modal>
      </div>
    );
}

export default App;
