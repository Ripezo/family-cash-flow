// components/AddFamilyButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface AddFamilyButtonProps {
  onAdd: () => void;
}

const AddFamilyButton: React.FC<AddFamilyButtonProps> = ({ onAdd }) => {
  return (
    <Button variant="contained" color="primary" onClick={onAdd}>
      Agregar Nueva Familia
    </Button>
  );
};

export default AddFamilyButton;
