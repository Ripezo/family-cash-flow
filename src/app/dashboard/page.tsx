'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import useFamily from './hooks/useFamily';
import { Button, Container, Typography } from '@mui/material';
import FamilyList from './components/FamilyList';
import AddFamilyButton from './components/AddFamilyButton';

function DashboardPage() {

  const { data: session } = useSession();
  const { myFamilies, familyAdd, familyEdit, familyDelete } = useFamily();

  return (<>
    <h1>Dashboard</h1>
    {session?.user ? <>
      <img src={session.user.image as string} width={100} height={100} alt={session.user.name as string} />
      <h2>{session.user.name}</h2>
      <h3>{session.user.email}</h3>
      <Button variant='contained' sx={{ my: '16px' }} onClick={() => signOut({
        callbackUrl: '/'
      })}>
        Salir
      </Button>
      <Container>
        <Typography variant="h3">Mis Familias</Typography>
        <FamilyList families={myFamilies} onEdit={familyEdit} onDelete={familyDelete} />
        <AddFamilyButton onAdd={familyAdd} />
      </Container>
    </> : (<button onClick={() => signIn()}>
      Identificarse
    </button>)}

  </>
  );
}

export default DashboardPage;