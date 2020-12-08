import React, { Component } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default class ModalComponent extends Component {
  constructor() {
    super();

    this.state = {
      openModel: true,
    };
  }

  closeModal = () => {
    this.setState({ openModel: false });
  };

  render() {
    const { formData } = this.props;
    const { openModel } = this.state;
    return (
      <>
        <Modal isOpen={openModel} ariaHideApp={false}>
          <button onClick={this.closeModal}>X</button>
          <p id="name-modal">{formData.name}</p>
          <p id="email-modal">{formData.email}</p>
          <p id="mobilenumber-modal">{formData.mobileNumber}</p>
          <p id="aadhaar-modal">{formData.aadhaarNumber}</p>
          <p id="vehicletype-modal">{formData.vehicleType}</p>
          <p id="vehiclenumber-modal">{formData.vehicleNumber}</p>
          <p id="traveldate-modal">{formData.travelDate}</p>
        </Modal>
      </>
    );
  }
}
