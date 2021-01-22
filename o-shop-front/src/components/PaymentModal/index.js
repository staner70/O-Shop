import React from "react";

export default function PaymentModal() {
  const [showModal, setShowModal] = React.useState();
  return (
    <>
      <button
        className="bg-bgred text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
       Multiple
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
Paiement multiple                </h3>
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
      <div className="flex flex-col m-2">
        <label for="CB" className="self-start w-auto"  text-gray-900>Carte Bancaire</label>
        <input
          className="px-4 focus:border-blue-500 py-2 ring ring-transparent border transition-colors duration-300 ease-in-out rounded-md focus:outline-none"
          type="number"
          name="CB"
          placeholder="Carte Bancaire"
          id="CB"
        />
      </div>

      <div className="flex flex-col m-2">
        <label for="espece" className="self-start w-auto"  text-gray-900>Espece</label>
        <input
          className="px-4 focus:border-blue-500 py-2 ring ring-transparent border transition-colors duration-300 ease-in-out rounded-md focus:outline-none"
          type="number"
          name="espece"
          placeholder="Espece"
          id="espce"
        />
      </div>

      <div className="flex flex-col m-2">
        <label for="cheque" className="self-start w-auto"  text-gray-900>Cheque</label>
        <input
          className="px-4 focus:border-blue-500 py-2 ring ring-transparent border transition-colors duration-300 ease-in-out rounded-md focus:outline-none"
          type="number"
          name="cheque"
          placeholder="Cheque"
          id="Cheque"
        />
      </div>
      
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Valider
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
}