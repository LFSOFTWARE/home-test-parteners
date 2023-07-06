import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Button, Container } from './styles';

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
    <Container>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Button onClick={handleFileUpload}>Upload CSV</Button>
    </Container>
  );
}

export default ButtonUpload;
