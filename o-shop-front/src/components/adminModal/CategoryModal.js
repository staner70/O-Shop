import React, { useState } from 'react';
import AdminField from './AdminField';
import PropTypes from 'prop-types';
import AlertModal from './AlertModal'


const CategoryModal = ({
    handleCategory, //handleLogin
    changeCategoryField, // changeField
    name,
    color,
    isDone

}) => {
    const [showModal, setShowModal] = useState();
    const handleCategoryFormSubmit = (evt) => {
        evt.preventDefault();
        handleCategory();
        console.log(handleCategory);
    };

    return (
        <>

                <button
                    className="bg-bgred text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(true)}
                >
                    Ajouter Categorie
      </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Ajouter Une Categorie              </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                    </span>
                                        </button>
                                    </div>
                                    {/*body*/}

                                    <div className="relative p-6 flex-auto">

                                    <form onSubmit={handleCategoryFormSubmit}>

                                        <AdminField
                                            name="name"
                                            type="text"
                                            placeholder="Nom de la Categorie"
                                            onChange={changeCategoryField} // sera appelé avec value + name
                                            value={name}
                                        />
                                         <AdminField
                                            name="color"
                                            type="color"
                                            placeholder="Couleur de la Categorie"
                                            onChange={changeCategoryField} // sera appelé avec value + name
                                            value={color}
                                        />
                                        

                                       
                                         <button
            type="submit"
            className="box-content	px-12 py-3 border-4 rounded-md bg-bgred "
          >
            OK
          </button>            
          </form>
          {isDone && (
          <AlertModal /> )}
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
        </>
    );
};
CategoryModal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    changeCategoryColorField : PropTypes.func.isRequired,
    changeCategoryField: PropTypes.func.isRequired,
    handleCategory: PropTypes.func.isRequired,
  };

  
  

export default CategoryModal;