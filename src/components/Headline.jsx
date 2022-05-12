
import HeadlineStyles from './Headline.module.css'

export function Headline(props) {
    return (
        <div>
            <h1 className={HeadlineStyles.title}>{props.page} page </h1>

            <p className={HeadlineStyles.description}>
                Get started by editing {props.children}
            </p>
        
        </div>
    );
}
