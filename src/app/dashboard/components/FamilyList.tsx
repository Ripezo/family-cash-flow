// components/FamilyList.tsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IFamily } from '@/models/FamilyModel';
import Link from 'next/link';

interface FamilyListProps {
  families: IFamily[];
  onEdit: (familyIndex: number) => void;
  onDelete: (familyIndex: number) => void;
}

const FamilyList: React.FC<FamilyListProps> = ({ families, onEdit, onDelete }) => {
  return (
    <List>
      {families.map((family, index) => (
        <ListItem key={index}>
          <Link href={`/cashflow/${family._id}`}><ListItemText primary={`Familia ${family.name}`} /></Link>
          <ListItemSecondaryAction>
            <IconButton onClick={() => onEdit(index)} edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => onDelete(index)} edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default FamilyList;