import React from 'react';
import { useUser } from '../../hooks/useUser';

function ButtonUpload() {
  const { setFile } = useUser()
  const fileInputRef = React.useRef(null);

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
