import React from 'react';
import Header from './components/header';
import MainNewsView from './components/main-news/main-news-view';

import AccordionContext from './context-api/accordion-context';
import SportSectionWithData from './page-section/sport-section';
import BusinessSectionWithData from './page-section/business-section';
import UserSection from './page-section/users-section';
import EntertainmentSection from './page-section/entertainment-section';



function App() {

    return (
        <AccordionContext>

          <Header />
          <MainNewsView />
      
          <SportSectionWithData />
          <BusinessSectionWithData />
          <UserSection />
          <EntertainmentSection />

        </AccordionContext>
    );

}

export default App;
