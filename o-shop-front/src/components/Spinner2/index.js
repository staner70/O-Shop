import React from 'react';
import Logo from './logo.gif';


const Spinner2 = ({
    
    
}) => {
    
    return (<>
                    <div
                        className="transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <img src={Logo} className="flex object-none" alt="Logo" />
      <p className="flex text-white"> "De la patience, il vous faudra jeune paddawan"</p>
      <h1 className="flex text-white text-right"> Yoda</h1>
                    </div>
                    <div className="opacity-100 fixed inset-0 z-40 bg-gif2"></div>
     </>
    );
};


export default Spinner2;