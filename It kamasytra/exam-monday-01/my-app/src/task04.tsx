import React from "react";

type NewsType = {
    title: string
    author:string
}
type ArticleType = {
    title: string
    data: string
    text: string
}
type PagePropsType = {
    news: NewsType[]
    mainArticle: ArticleType
}
export const Page: React.FC<PagePropsType>=(props)=> {
    return <div>
        <article>
            <h1>Name: {props.mainArticle.title}</h1>
            <div>Name: {props.mainArticle.data}</div>
            <div>Name: {props.mainArticle.text}</div>
        </article>
        <aside>
            Articles:
            <ul>
                {props.news.map(n=> <li>{n.title},{n.author}</li>)}
            </ul>
        </aside>
    </div>
}