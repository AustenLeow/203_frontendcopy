import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { useSession, signIn, signOut } from 'next-auth/react'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }) {
  
  return (
    <SessionProvider session={pageProps.session}>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
 