import { Component } from 'react'
import '../scss/main.scss'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import StudentList from './StudentList';
import AddStudentList from './AddStudentList';

class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: 'Valiyulloh',
          lastName: 'Abdumitalipov',
          group: 'React N-45',
          doesWork: false,
        },
        {
          id: 2,
          firstName: 'Umarzhon',
          lastName: 'Mamadaliev',
          group: 'React N-32',
          doesWork: true,
        },
        {
          id: 3,
          firstName: 'Ilyos',
          lastName: 'Solmatov',
          group: 'React N-38',
          doesWork: false,
        },
      ],
    }    
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {this.setState({ addModal: true });}
  closeModal() {this.setState({ addModal: false });}
  render() {
    const {students, addModal} = this.state
    const {closeModal, openModal} = this
    return (
      <div className='container py-3'>
        <div>
          <ButtonGroup className='w-100'>
            <input type="text" className='form-control p-2' placeholder='Search' />
            <select name="filter" id="filter" className='form-select w-auto'>
              <option value="">React N-32</option>
              <option value="">React N-38</option>
              <option value="">React N-41</option>
              <option value="">React N-45</option>
            </select>
            <button onClick={openModal} className='btn btn-outline-success w-auto'>Add</ button>
          </ ButtonGroup>
        </div>
        <StudentList students = {students} />
        <AddStudentList addModal={addModal} closeModal={closeModal} />
      </div>
    )
  }
}

export default Search
