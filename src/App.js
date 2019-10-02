import React from "react";
import Modal from "./components/modal";
import styled from "styled-components";

const Button = styled.button`
  background: #5755d9;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.55em 1em;
  border: 2px solid #5755d9;
  border-radius: 3px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.toggleModal()}>Open Modal</Button>
        <Modal
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          title="Bla !! the title goes here"
          footer={<Button>Footer Button</Button>}
        >
          Bla Bla Bla ..... the body goes here..
        </Modal>
      </div>
    );
  }
}

export default App;
