import "./Home.css";

import React, { useState } from 'react';
import Modal from 'react-modal';


function Home()
{
  let myLibrary = [];
  const [formData, setFormData] = useState({ title: '', author: '', pages: '' ,isRead:''});

  const handleInputchange = (event)=>{
    const {title, value} = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [title]: value }));
  }

  const  addBookToLibrary = () => {
   // event.preventDefault();
    let bookName = formData.title;
    let authorName = formData.author
    let numberOfpages = formData.pages;
    let bookStatus = formData.isRead;
    console.log(formData)
    let book = new Book(bookName, authorName, numberOfpages, bookStatus);
    myLibrary.push(book);
  }
  function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  
  }
  function display() {
    addBookToLibrary();
    const list = document.querySelector('#book-list');
    //list.innerHTML = "";
    let i = 0;
  
      myLibrary.forEach((book) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>
        <label class="switch" >
        <input data-index="${i}" type="checkbox" class = "slide" ${book.isRead ? 'checked' : ''
          }>
        <span class="slider round"></span>
        </label>
        </td>
        <td><button data-index="${i}" class="remove">Delete</button></td>
      `;
        list.appendChild(row);
        i++;
      });
  
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
    //window.document.getElementById("form-submit").addEventListener('submit',addBookToLibrary);
   
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
 
      
   
  

 

 return(
  <div>
    <button className = "newbook " type="click" onClick={openModal}>Add your Book</button>
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
                         <button className = "close-btn btn btn-block btn-sm"  id = "closing" type="click" onClick= {closeModal}>X</button>
                       </div>
       
                       <form  >
                         <div className="form-outline mb-4">
                           <input type="text" id="title" className="form-control"
                             placeholder="Enter Your BookName"  value={formData.title} onChange= {handleInputchange}/>
                         </div>
                         <div className="form-outline mb-4">
                           <input type="text" id="author" className="form-control"
                             placeholder="Enter authorname"  value={formData.author} onChange= {handleInputchange}/>
                         </div>
                         <div className="form-outline mb-4">
                         <input type="number" value = {formData.pages} className="form-control" id = "pages" onChange= {handleInputchange} placeholder="Enter number of pages" name="pages-count" required/>
                         </div>
                         <div className="form-outline mb-4">
                         <input type="checkbox" value= {formData.isRead} id="status" onChange= {handleInputchange} checked="checked"/> Read status
                         </div>
                         <div className="text-center pt-1 mb-5 pb-1">
                           <button className="close-btn btn  btn-block fa-lg gradient-custom-2 mb-3" id = "form-submit" type="submit" 
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
    <tbody id="book-list"></tbody>
  </table>
  </div>
 
 );
}

export default Home;