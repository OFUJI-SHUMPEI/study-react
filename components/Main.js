
import {Headline} from '../components/Headline.js'
import {Links} from '../components/Links.js'
import styles from '../styles/Home.module.css'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline page={props.page}>
            <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        
        

        <Links/>
      </main>
  )
}
