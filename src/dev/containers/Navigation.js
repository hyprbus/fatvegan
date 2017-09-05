// the admin navigation view for editing basic information

import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

// Custom React Components
import Home from '../components/Home.js';
import Hours from '../components/Hours.js';
import Food from './Food.js';
import Book from '../components/Book.js';
import Diet from '../components/Diet.js';
import Restaurant from '../components/Restaurant.js';

import UrlNotFound from '../components/UrlNotFound.js'; // note: not working without server-side configs

// custom functions
import readFile from '../functions/readFile.js';
import openToday from '../functions/openToday.js';

// note difference between dev and deployment paths 
// dev path:
// const basePath = '/fatvegan/src';
// prod path:
// const basePath = '/work/fatvegan';

const basePath = '/fatvegan/src';
const hours = basePath + '/data/hours.json';
const menu = basePath + '/data/menu.json';

const myDate = new Date();

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [],
      menu: [],
      openToday: ""
    };
    // binding only need for event handlers, not arrow functions for handling of scope for "this"
    // e.g. this.setOpenHours = this.setOpenHours.bind(this);
  }

  setHours () {
    // prevState - best practice since state is updated asynchronously, google for info
    readFile(hours, (hrs) => {
      this.setState(prevState => ({hours: hrs}))
    });
  }
  
  setMenu () {
    readFile(menu, (m) => {
      this.setState(prevState => ({menu: m}))
    })
  }

  setOpenHours() {
    readFile(hours, (hrs) => { 
      this.setState(prevState => ({openToday: openToday(hrs, myDate)}));
     })
  }

  componentDidMount() {    
    this.setHours();
    this.setMenu();
    this.setOpenHours();
  }

  render() {
    return (
      <BrowserRouter basename={basePath}>
        <div className="flexContainer">
          <div className="logo heading">Fat Vegan</div>
          <div className="slogan">100% vegan<br></br>100% pleasure</div>
          <NavLink exact to="/" className="menu" activeClassName="menuActive">Home</NavLink>
          <NavLink to="/book" activeClassName="menuActive" className="menu">Book</NavLink>
          <NavLink to="/food" className="menu" activeClassName="menuActive">Food</NavLink>
          <NavLink id="lastItemOnRow" to="/hours" className="menu" activeClassName="menuActive">Hours</NavLink>
          <NavLink to="/restaurant" className="menu" activeClassName="menuActive">About</NavLink>
          <NavLink to="/diet" className="menu" activeClassName="menuActive">Special Diet?</NavLink>
          <Switch>
            <Route exact path="/" render={()=><Home opentoday={this.state.openToday} /> } />
            <Route path="/book" component={Book}/>
            <Route path="/food" render={() => <Food menu={this.state.menu} /> } />
            <Route path="/hours" render={() => <Hours hours={this.state.hours} /> } />
            <Route path="/restaurant" component={Restaurant}/>
            <Route path="/diet" component={Diet}/>
            <Route component={UrlNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
