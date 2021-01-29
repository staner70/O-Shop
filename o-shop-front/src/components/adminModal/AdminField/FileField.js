// == Import : npm
import React from 'react';


// == Composant
const FileField = ({
  onFileSubmit,
}) => {
  const handleInputChange = (evt) => {
    onFileSubmit(evt.target.files[0]);
    console.log('1:', evt.target.files);
    console.log('2:',evt.target.files[0]);

  };


  return (
    <div className="box-content	p-4 border-4 m-2 outline-none	 rounded-md bg-white">
      <input
        onSubmit={handleInputChange}
        id="file"
        type="file"
        className="outline-none"
      />
    </div>
  );
};



// == Export
export default FileField;
