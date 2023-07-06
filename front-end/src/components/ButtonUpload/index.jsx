import React, { useContext, useRef } from 'react';
import { UserContext } from '../../contexts/userContext';

function ButtonUpload() {
  const { setFile } = useContext(UserContext)
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file)
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleFileUpload}>Importar arquivo</button>
    </div>
  );
}

export default ButtonUpload;
