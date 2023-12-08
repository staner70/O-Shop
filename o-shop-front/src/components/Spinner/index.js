import React from 'react';
import Logo from './logo.gif';


const Spinner = () => {
    
    return (
    <>
    <div className="flex">
                    <div className="flex justify-center m-auto">
      <img src={Logo} className="flex object-center m-auto items-center transform scale-75" alt="Logo" />
                    </div>
                    </div>
     </>
    );
};


export default Spinner;