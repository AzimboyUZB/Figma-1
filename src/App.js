import React from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuBaner from './components/MenuBaner';
import MenuPlanOne from './components/MenuPlanOne';
import MenuPlanThree from './components/MenuPlanThree';
import MenuPlanTwo from './components/MenuPlanTwo';
import MenuStatistic from './components/MenuStatistic';
import PricingPlans from './components/PricingPlans';

function App() {
  return (
    <Wrapper>
      <Header />
      <MenuPlanOne /> 
      <MenuPlanTwo />
      <MenuPlanThree />
      <MenuStatistic />
      <MenuBaner />
      <PricingPlans />
      <Card />
      <Footer />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
