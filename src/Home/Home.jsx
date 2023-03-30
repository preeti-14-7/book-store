import "./Home.css";
import {useNavigate,Link } from "react-router-dom"
import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import { useAuth } from "../contexts/AuthContext"

// import {db} from '../firebase';
// import { collection, addDoc, getDocs } from "firebase/firestore";


const initialFormData = { title: '', author: '', pages: 0, isRead: false, read: ''};

const getBook = ()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}

function Home() {
 
  const [books, setBooks] = useState(getBook());
  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const {  logout } = useAuth();
  const [isOn, setIsOn] = useState(false);


   const handleClick = (bookName) => {
    bookName.isRead = !bookName.isRead;
    setIsOn(!isOn);
    console.log(isOn);
  };


 

  async function LogOut() {
    setError("")

    try {
      await logout();
      
      navigate('/');
    } catch {
      setError("Failed to log out")
    }
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setFormData(initialFormData);
    setModalIsOpen(false);
  };


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }



  const handleDelete=(T)=>{
    // console.log(id);
    const filtered = books.filter((book)=>{
      return book.title !== T;
    })
    setBooks(filtered);
  }

  const addBookToLibrary = (e) => {
    e.preventDefault();
  
    setBooks([...books, formData]);
    console.log(books);
    closeModal();
  }
    
    
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  
   
    return (
      <div>
        <button className="newbook " onClick={openModal}>Add your Book</button>
        <div className="temp">
        <button className = "signout btn" onClick={LogOut}> Sign Out </button>
        <button className="signout btn remove" onClick={()=>setBooks([])}>Remove All</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="row d-flex justify-content-center align-items-center h-100"
        >
  
          <div className="col-xl-6">
            <div className="card rounded-3 text-black">
  
              <div className="col-lg-12">
                <div className="card-body p-md-5 mx-md-4">
  
                  <div className="top-part">
                    <h4 className="mt-1 mb-5 pb-1">Add Your Book</h4>
                   
                    <button className="close-btn btn btn-block btn-sm" id="closing" onClick={closeModal}>X</button>
                  </div>
  
                  <form onSubmit={addBookToLibrary}>
                    <div className="form-outline mb-4">
                      <input onChange={handleChangeInput} value={formData.title} type="text" name="title" className="form-control"
                        placeholder="Enter Your BookName" />
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={handleChangeInput} value={formData.author} type="text" name="author" className="form-control"
                        placeholder="Enter authorname" />
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={handleChangeInput} value={formData.pages} type="number" className="form-control" id="pages" placeholder="Enter number of pages" name="pages" required />
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={handleChangeInput} value={formData.isRead} name="isRead" type="checkbox" id="status" /> Read status
                    </div>
                    <div className="form-outline mb-4">
                      <input onChange={handleChangeInput} value={formData.readPdf} name="readPdf" type="file" id="status" /> upload file
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="close-btn btn  btn-block fa-lg gradient-custom-2 mb-3" id="form-submit" type="submit"
                      >Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
  
  
        <table className="tbl">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
              <th>IsRead</th>
              <th>Remove</th>
              <th>Book </th>
            </tr>
          </thead>
          <tbody id="book-list">
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.pages}</td>
                  <td>  <button className="isRead-btn btn  btn-block" onClick={()=>handleClick(book)}>
                  <span>{setIsOn ? 'YES' : 'NO'}</span>  </button>
                  </td>
                  <td><button className="remove-btn btn btn-dark  btn-block" onClick={()=>handleDelete(book.title)}>Remove</button></td>
                  <td><Link to = '\read'>Read Pdf</Link></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No books</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
  
    );
  
}

export default Home;