

import React from 'react'
import axios from 'axios';
import { Paper } from "@material-ui/core";
import '../News/News.css'
const style = {
    Paper: { padding: 20, margin: 10, maxHeight: 400, overflow: 'scroll'}
  };

export default class News extends React.Component{
    
 
state = {
    articles: []
}
componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res =>{
        console.log(res);
        this.setState({ articles: res.data })

    })
}
render() {
    return(
        <Paper style={style.Paper}>
      
            <h1>Latest Updates</h1>
        <ul>
           { this.state.articles.map(article => <li>{article.title}</li>)} 
        </ul>
        </Paper>
    )
}
}
