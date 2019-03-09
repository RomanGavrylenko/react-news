import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import {getMainNews} from './services/api';


class App extends Component {

  state={
    data:[],
    category: 'business',
    top: true,
  }

  //get data for main page
  async componentDidMount(){
    let news = await getMainNews();
    console.log(news);

    this.setState({
      data: news,
    })
  }

  //test for category
  getCategory = async ()=>{
    let data = await getMainNews(this.state.category);

    console.log(data);
  }

  render() {

    const items = ['Главная', "Бизнес", "Спорт", "Технологии", "Наука", "Здоровье"];

    return (
      <div className="App">
        <Header items={items}/>
        <NewsList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
