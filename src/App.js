import React, { Component } from 'react';
import Header from './components/header';
import NewsList from './components/newsList/newsList';
import {getMainNews} from './services/api';


class App extends Component {

  state={
    data:[],
    category: '',
    top: true,
  }

  //get data for main page
  async componentDidMount(){
    let news = await getMainNews(this.state.category);
    console.log(news);

    this.setState({
      data: news,
    })
  }

  //test for category
  handleCategory = (e)=>{
    console.log(e.target.getAttribute('data-item'));
    this.setState({
      category: e.target.getAttribute('data-item'),
    }, this.getCategory);
    /*let data = await getMainNews(this.state.category);

    console.log(data);*/
  }

  getCategory = async()=>{
    let data = await getMainNews(this.state.category);

    this.setState({
      data
    });
  }

  render() {

    const items = [
      {name:'Главная', attr: ''},
      {name: "Бизнес", attr: 'business'},
      {name:"Спорт", attr: 'sports'},
      {name: "Технологии", attr: 'technology'},
      {name: "Наука", attr: 'science'},
      {name: "Здоровье", attr: 'headlth'},
      {name: "Развлечения", attr: "entertainment"}];

    return (
      <div className="App">
        <Header items={items} handle={this.handleCategory}/>
        <NewsList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
