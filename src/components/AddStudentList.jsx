import { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class AddStudentList extends Component {
  render() {
    const {closeModal, addModal} = this.props;
    return (
      <div>
        <Modal show={addModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add student</ Modal.Title>
          </ Modal.Header>
          <Modal.Body>
            <form>
              <div className='mb-3'>
                <label htmlFor="firstName" className='form-label'>Firstname🙋‍♂️</label>
                <input placeholder='Valiyulloh' type="text" className='form-control' id='firstName' />
              </div>
              <div className='mb-3'>
                <label htmlFor="lastName" className='form-label'>Lastname👴</label>
                <input placeholder='Abdumitalipov' type="text" className='form-control' id='lastName' />
              </div>
              <div className='mb-3'>
                <select className='form-control' id='group'>
                  <option value="">React N-32🧑‍🏫</option>
                  <option value="">React N-38🧑‍🏫</option>
                  <option value="">React N-41🧑‍🏫</option>
                  <option value="">React N-45🧑‍🏫</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className='form-check-input' id='work' />
                <label htmlFor="work">Does work?🧑‍💻</label>
              </div>
            </form>
          </ Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cancel❌</Button>
            <Button variant="primary" onClick={closeModal}>Save📥</Button>
          </ Modal.Footer>
        </ Modal>
      </div>
    )
  }
}

export default AddStudentList