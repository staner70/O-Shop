import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const MessageErrorAlert = () => (
    <>
    <div className=" alert-toast fixed bottom-0 right-0 m-8 w-5/6 md:w-full max-w-sm">
    <input type="checkbox" className="hidden" id="footertoast"/>

    <label className="close cursor-pointer flex items-start justify-between w-full p-2 bg-bgred h-24 rounded shadow-lg text-white" title="close">
      OUPS ! Votre Ajout n'a pas fonctionné...
    
      <FontAwesomeIcon icon={faTimes} />
    </label>
  </div>
  </>
);

export default MessageErrorAlert;
