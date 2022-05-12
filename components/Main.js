
import {Headline} from '../components/Headline.js'
import {Links} from '../components/Links.js'
import MainStyles from './Main.module.css'

export function Main(props) {
  return (
      <main className={MainStyles.main}>
        <Headline page={props.page}>
            <code className={MainStyles.code}>pages/{props.page}.js</code>
        </Headline>
        
        

        <Links/>
      </main>
  )
}
