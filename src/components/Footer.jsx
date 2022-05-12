
import FooterStyles from './Footer.module.css'
import Image from 'next/image'
export function Footer(){
    return(
      <footer className={FooterStyles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={FooterStyles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}