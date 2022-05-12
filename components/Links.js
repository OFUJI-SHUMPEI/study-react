import LinksStyles from './Links.module.css'

const ITEMS = [
  {href:"https://nextjs.org/docs", title:"Documentation &rarr;", discription:"Find in-depth information about Next.js features and API."},
  {href:"https://nextjs.org/learn", title:"Learn &rarr;", discription:"Learn about Next.js in an interactive course with quizzes!"},
  {href:"https://github.com/vercel/next.js/tree/canary/examples", title:"Examples &rarr;", discription:"Discover and deploy boilerplate example Next.js projects."},
  {href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title:"Deploy &rarr;", discription:"Instantly deploy your Next.js site to a public URL with Vercel."}
]

export function Links(){
    return(
        <div className={LinksStyles.grid}>
          <a href="https://nextjs.org/docs" className={LinksStyles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={LinksStyles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={LinksStyles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={LinksStyles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
    )
}