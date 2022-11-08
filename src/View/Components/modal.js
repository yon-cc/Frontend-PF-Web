import React from 'react';
import './modal.css';
export default function ModalProducts({text}){
    const showModal = ()=>{
      
      const modal = document.getElementById("modal");
  
      document.body.style.overflow = "hidden"
      modal.classList.add("modal-active");
      document.querySelector("header").style.zIndex = '-1';
    }
  
    const closeModal = (e)=>{
      
      if(e.target.id === "modal" || e.target.id ==="close"){
        // console.log(e.target.id )
        const modal = document.getElementById("modal");
  
          document.body.style.overflow = "visible"
          modal.classList.remove("modal-active")
        }
    }


    return (
      <>
        <button type="checkbox" className="filter-btn button" onClick={showModal} >
          {/* <i className="bi bi-funnel"></i> */}
          {/* <i className="bi bi-filter-circle"></i> */}
          <i className="bi bi-sort-down"></i>
        </button>
        <div className="modal open-bg" id="modal" onClick={closeModal}>
          <div className="modal-wrap open-wrap" id="modal-wrap">
          <span className="close" onClick={closeModal} id="close">&times;</span>
  
            <div className="filters">
              <p>Contenido</p>
              <p>{text}</p>
  
            
            </div>
          </div>
        </div>
      </>
    )
  }