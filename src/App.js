import React from 'react';
import Header from './components/header';
import MainNewsView from './components/main-news/main-news-view';
import SportPage from './containter/sport-page';
import BusinessPage from './containter/business-page';
import EntertainmentPage  from './containter/entertainment-page';
import UserPage from './containter/users-page';
import Field from './components/field/field';
import Link from './components/link/link';
import Image from './components/image/image';
import MainPageContent from './layout/main-page-content';




function App() {

    return (
      <div className="App">
        <Header />
        <MainNewsView />

        <MainPageContent >
          <SportPage itemName='title'>
            <Field fieldName='title'/>
            <Field fieldName='description'/>
            <Link 
              fieldName='url'
              label='Перейти к новости'/>
          </SportPage>

          <BusinessPage itemName='title'>
            <Field fieldName='title'/>
            <Field fieldName='description'/>
            <Link 
              fieldName='url'
              label='Перейти к новости'/>
          </BusinessPage>

          <EntertainmentPage itemName='title'>
            <Field fieldName='title'/>
            <Field fieldName='description'/>
            <Link 
              fieldName='url'
              label='Перейти к новости'/>
          </EntertainmentPage>

          <UserPage itemName='name'>
            <Image fieldName='photo' label='ava'/>
            <Field fieldName='name'/>
            <Field fieldName='position'/>
            <Field fieldName='email'/>
          </UserPage>
        </MainPageContent>

       
      </div>
    );

}

export default App;
