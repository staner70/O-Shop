import React, { useState } from "react";
import Scanner from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import {addToCart} from '../../../store/actions';
import { useDispatch } from 'react-redux';
import UIfx from 'uifx';
import beepMp3 from './beep.mp3'


const ScannerModal = ({article}) => {
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState();
  const dispatch= useDispatch();

  const beep = new UIfx(beepMp3)

  const onDetected = result => {
    setResult(result);
    console.log(result);
  };
  
  const handleClickCart = () => {
    dispatch( addToCart(parseInt(result)));
    beep.play()
  };

  return (

    <>
      <button
        className="bg-green-400 text-white active:bg-pink-600 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        <FontAwesomeIcon
                      icon={faBarcode}
                      size="2x"
                      className="-m-2"
                    />   </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                {/*body*/}
                <div className="h-64 relative flex-auto p-2">
                  <div>
                    <p>{result ? result : "Scanning..."}</p>
                    
                    <div className="container">
                      {camera && <Scanner onDetected={onDetected} />}
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="h-40 flex items-end justify-end p-6 border-gray-300 rounded-b">
                
                <button
             className="select-none	 uppercase hover:text-white focus:ring-blue-300 undefined bg-profil ring-2 mx-1 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-2 w-1/2 rounded-lg font-normal"
             onClick={handleClickCart}

           >Ajouter</button>
                 
                  <button
                    className="select-none	 uppercase hover:text-white focus:ring-blue-300 undefined bg-red-400 mx-1 ring-2 focus:ring-offset-2 ring-transparent transform duration-300 ease-in-out focus:outline-none text-white p-2 w-1/2 rounded-lg font-normal"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                            </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
        </>
      ) : null}
    </>

  );
}

export default ScannerModal;

