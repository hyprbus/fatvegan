import React from 'react';
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from '../components/Home.js';
import Hours from '../components/Hours.js';
import Food from './Food.js';
import Book from '../components/Book.js';
import Diet from '../components/Diet.js';
import Restaurant from '../components/Restaurant.js';
import UrlNotFound from '../components/UrlNotFound.js'; // note: not working without server-side configs
import readFile from '../functions/readFile.js';
import openToday from '../functions/openToday.js';
import wrapSitePage from './wrapSitePage.js'
import MenuBar from '../components/MenuBar.js'

// note difference between dev and deployment paths (put into webpack!)
// dev path:
// const basePath = '/fatvegan/src';
// prod path:
// const basePath = '/work/fatvegan';

const basePath = '/fatvegan/src'
const hours = basePath + '/data/hours.json'
const menu = basePath + '/data/menu.json'
const news = basePath + '/data/news.json'
const hiddenClassName = "hidden"
const today = new Date()

const WrappedBook = wrapSitePage(Book)
const WrappedHours = wrapSitePage(Hours)
const WrappedFood = wrapSitePage(Food)
const WrappedHome = wrapSitePage(Home)
const WrappedRestaurant = wrapSitePage(Restaurant)
const WrappedDiet = wrapSitePage(Diet)

// build navlinks: class, activeclass, exact (true/false), to, label
const menuComponents = [
  {exactlink: true, to: "/", label: "Home", class: "menu", activeclass: "menuActive"},
  {exactlink: false, to: "/book", label: "Book", class: "menu", activeclass: "menuActive"},
  {exactlink: false, to: "/food", label: "Food", class: "menu", activeclass: "menuActive"},
  {exactlink: false, to: "/hours", label: "Hours", class: "menu lastItemOnRow", activeclass: "menuActive"},
  {exactlink: false, to: "/restaurant", label: "About", class: "menu afterContent", activeclass: "menuActive"},
  {exactlink: false, to: "/diet", label: "Special Diet?", class: "menu afterContent lastItemOnRow", activeclass: "menuActive"}
]

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: [],
      menu: [],
      today: null,
      todayDate: today,
      openToday: "",
      menuButtons: menuComponents,
      menuVisibility: [true, true, true, true, true, true],
      news: []
    }
    this.setMenuVisibility = this.setMenuVisibility.bind(this)
  }

  setMenuVisibility (visibilityArray) {
    this.setState(prevState => ({
      menuVisibility: visibilityArray
    }))
  }

  setHours () {
    readFile(hours, (hrs) => {
      this.setState(prevState => ({
        hours: hrs,
        today: today.getDay()
      }))
    })
  }
  
  setMenu () {
    readFile(menu, (m) => {
      this.setState({menu: m.sort((a, b) => a.category_area - b.category_area)})
    })
  }

  setOpenHours() {
    readFile(hours, (hrs) => { 
      this.setState({openToday: openToday(hrs, today)});
     })
  }

  getNews(newsFile) {
    readFile(newsFile, (n) => {
      this.setState({news: n})
    })
  }

  componentDidMount() { 
    this.setHours();
    this.setMenu();
    this.getNews(news)
    this.setOpenHours();
    this.setMenuVisibility([true, true, true, true, true, true])
  }

  render() {
    return (
      <BrowserRouter basename={basePath}>
        <div className={"flexContainer background" + this.state.backgroundImage}>
          <div className="logo heading">Fat Vegan</div>
          <div className="slogan">100% vegan<br></br>100% pleasure</div>
          <MenuBar
            menuVisibility={this.state.menuVisibility}
            menuItems={this.state.menuButtons}
          />
          <Route render={({ history: { location } }) => (
            <TransitionGroup className="pageContainer" >
              <CSSTransition
                location={location}
                key={location.key}
                classNames="swipe"
                timeout={{ enter: 980, exit: 480 }}
              >
          <Switch location={this.props.location}>
            <Route exact path="/" render={() => <WrappedHome 
              displayMenu={this.setMenuVisibility} 
              visibilityArray={[true, true, true, true, true, true]}
              background={1}
              opentoday={this.state.openToday}
              news={this.state.news}
              todayDate={this.state.todayDate}
            /> } />
            <Route 
              path="/book" 
              render={() => <WrappedBook 
                displayMenu={this.setMenuVisibility} 
                background={0}
                visibilityArray={[true, true, true, true, false, false]}
                 />} 
            />
            <Route path="/food" render={() => <WrappedFood
               displayMenu={this.setMenuVisibility} 
               visibilityArray={[true, true, true, true, false, false]}
               background={0}
               menu={this.state.menu} 
            /> } />
            <Route 
              path="/hours" 
              render={() => <WrappedHours 
                displayMenu={this.setMenuVisibility} 
                visibilityArray={[true, true, true, true, false, false]}
                background={0}
                hours={this.state.hours} 
                today={this.state.today} 
                /> } 
              />
            <Route path="/restaurant" render={() => <WrappedRestaurant 
              displayMenu={this.setMenuVisibility} 
              visibilityArray={[true, true, true, true, false, false]}
              background={0}
               /> } />
            <Route path="/diet" render={() => <WrappedDiet 
              displayMenu={this.setMenuVisibility} 
              visibilityArray={[true, true, true, true, false, false]}
              background={0}
            /> } />
            <Route component={UrlNotFound} />
          </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
      </div>
      </BrowserRouter>
    )
  }
}

