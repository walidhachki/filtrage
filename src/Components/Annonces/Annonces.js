import React, { Component } from "react";
import formatCurrency from "./util";
import Fade from "react-reveal/Fade";
import {FaEnvelope, FaCalendarAlt,FaPhoneSquareAlt, FaMapMarkerAlt} from 'react-icons/fa'
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

export default class Annonces extends Component {
    constructor(props) {
      super(props);
      this.state = {
        annonce: null,
      };
    }
    openModal = (annonce) => {
      this.setState({ annonce });
    };
    closeModal = () => {
      this.setState({ annonce: null });
    };
    render() {
      const { annonce } = this.state;
      return (
        <div>
          <Fade bottom cascade>
            <ul className="products1">
              {this.props.annonces.map((annonce) => (
                <li key={annonce.id}>
                  <div className="product1">
                    <a
                      href={"#" + annonce.id}
                      onClick={() => this.openModal(annonce)}
                    >
                      <img src={annonce.image} alt={annonce.title}></img>
                  
                    </a>
                    <p>{annonce.title}</p>
                    <div className="product-date">
                      <div>{annonce.ville} <FaMapMarkerAlt/></div>
                      <div>{annonce.date} <FaCalendarAlt/></div>
                    </div>
                    <div className="product-price">
                      <div>{formatCurrency(annonce.prix)}</div>
                      <button
                        className="button1 primary"
                      >
                        {annonce.typeAnnonce}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
          {annonce && (
            <Modal isOpen={true} onRequestClose={this.closeModal}>
              <Zoom>
                <button className="close-modal" onClick={this.closeModal}>
                  x
                </button>
                <div className="product-details">
                  <img src={annonce.image} alt={annonce.title}></img>
                  <div className="product-details-description">
                    <p>
                      <strong>{annonce.title}</strong>
                    </p>
                    <p>{annonce.description}</p>
                    <p>
                      Owner Informations: 
                      <div  style ={{margin : "10px"}}>{annonce.username}</div>
                      <div className="ownerInfo">
                         <div><FaEnvelope/>  {annonce.email}</div>
                         <div><FaPhoneSquareAlt/>  {annonce.phone}</div>
                      </div>
                    </p>
                    <p>
                      Ville:
                      <span>
                          
                          <button className="button1">{annonce.ville}</button>
                     </span>
                    </p>
                    <div className="product-price">
                      <div>{formatCurrency(annonce.prix)}</div>
                      <button
                        className="button1 primary"
                        onClick={() => {
                          this.closeModal();
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </Zoom>
            </Modal>
          )}
        </div>
      );
    }
  }