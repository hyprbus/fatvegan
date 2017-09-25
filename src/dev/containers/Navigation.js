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

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: [],
      menu: [],
      today: null,
      todayDate: today,
      openToday: "",
      // some hard-coding to make some menu items appear after the page content
      menuClassNames: ["menu", "menu", "menu", "menu lastItemOnRow", "menu afterContent", "menu afterContent lastItemOnRow"],
      news: []
    }
    this.setMenuVisibility = this.setMenuVisibility.bind(this)
  }

  setMenuVisibility (visibilityArray) {
    let newClassNames = this.state.menuClassNames.slice()
    visibilityArray.forEach((element, i) => {
      // if visibility true, remove hiddenClassName from className if it exists there
      if (element) {
        newClassNames[i] = 
          newClassNames[i].endsWith(hiddenClassName) ? 
          newClassNames[i].slice(0, newClassNames[i].length - hiddenClassName.length) : 
          newClassNames[i] 
      } else {
      // if visibility is false, add hiddenClassName to className if it's not there
        newClassNames[i] = 
          newClassNames[i].endsWith(hiddenClassName) ? 
          newClassNames[i] :
          newClassNames[i] + " " + hiddenClassName
      }
    })
    this.setState(prevState => ({
      menuClassNames: newClassNames
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
          <NavLink exact to="/" className={this.state.menuClassNames[0]} activeClassName="menuActive">Home</NavLink>
          <NavLink to="/book" className={this.state.menuClassNames[1]} activeClassName="menuActive">Book</NavLink>
          <NavLink to="/food" className={this.state.menuClassNames[2]} activeClassName="menuActive">Food</NavLink>
          <NavLink to="/hours" className={this.state.menuClassNames[3]} activeClassName="menuActive">Hours</NavLink>
          <NavLink to="/restaurant" className={this.state.menuClassNames[4]} activeClassName="menuActive">About</NavLink>
          <NavLink to="/diet" className={this.state.menuClassNames[5]} activeClassName="menuActive">Special Diet?</NavLink>
          <Route render={({ history: { location } }) => (
            <TransitionGroup className="fullWidth" >
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

export default Navigation;
