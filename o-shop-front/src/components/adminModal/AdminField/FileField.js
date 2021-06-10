// == Import : npm
import React from 'react';


// == Composant
const FileField = ({
}) => {
  const handleFileChange = (evt) => {
    const file = evt.target.files[0];
  };


  return (
    <div className="box-content	p-4 border-4 m-2 outline-none	 rounded-md bg-white">
      <input
        id="file"
        type="file"
        className="outline-none"
        onChange={handleFileChange}

      />
    </div>
  );
};



// == Export
export default FileField;
