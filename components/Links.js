import classes from './Links.module.css'

const ITEMS =[
{href:"https://nextjs.org/docs",
title:"Documentation \u2192",
description:"Find in-depth information about Next.js features and API."
},
{href:"https://nextjs.org/learn",
title:"Learn \u2192",
description:"Learn about Next.js in an interactive course with quizzes!"
},
{href:"https://github.com/vercel/next.js/tree/master/examples",
title:"Examples \u2192",
description:"Discover and deploy boilerplate example Next.js projects."
},
{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
title:"Deploy \u2192",
description:"Instantly deploy your Next.js site to a public URL with Vercel."
},
]



export  function Links() {
  return (
        <div className={classes.grid}>
          {ITEMS.map(item=>{
            return(
              <a key={item.href} href={item.href} className={classes.card}>
             <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
            )
          })}
        </div>  
  )
}
