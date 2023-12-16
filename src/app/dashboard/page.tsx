'use client'

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function DashboardPage() {

  const { data: session } = useSession();

  return (<>
    <h1>Dashboard</h1>
    {session?.user ? <>
      <img src={session.user.image as string} width={100} height={100} alt={session.user.name as string} />
      <h2>{session.user.name}</h2>
      <h3>{session.user.email}</h3>
      <button onClick={() => signOut()}>
        Salir
      </button>
    </> : (<button onClick={() => signIn()}>
      Identificarse
    </button>)}

  </>
  );
}

export default DashboardPage;