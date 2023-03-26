import "./Home.css";
import { Link } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
// import {db} from '../firebase';
// import { collection, addDoc, getDocs } from "firebase/firestore";


const initialFormData = { title: '', author: '', pages: 0, isRead: false };

function Home() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
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


  const addBookToLibrary = (e) => {
    e.preventDefault();
    setBooks([...books, formData]);
    localStorage.setItem("books", JSON.stringify(books));
    console.log(books);
    closeModal();
  }
  
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks) {
      setBooks(savedBooks);
    }
  }, []);

  return (
    <div>
      <button className="newbook " onClick={openModal}>Add your Book</button>
      <button className = "signout btn"><Link to="/">Sign Out </Link></button>
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
          </tr>
        </thead>
        <tbody id="book-list">
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.pages}</td>
                <td>{book.isRead ? 'Yes' : 'No'}</td>
                <td><button className="btn btn-danger">Remove</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No books</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}

export default Home;