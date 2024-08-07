import type { AppProps } from 'next/app'
import "../styles/globals.css";
import {Luckiest_Guy } from 'next/font/google';
import Header from './header';
import FooterWave from './footerwave';

const luckiestGuy = Luckiest_Guy({
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  preload:true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div>
        <style jsx global>{`
        .font-luckiest {
          font-family: ${luckiestGuy.style.fontFamily}, cursive;
        }
      `}</style>
      <Header/>
      <Component {...pageProps} />
       <FooterWave/>   
      </div>

  );
  
  
} 