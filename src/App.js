import React , {Component} from 'react';

import News from './News';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import './App.css';

var keyCode = 'b467568382df4bcf850533c36dc3a21c';
var key = '?apiKey='+keyCode;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      allNews:[
        //  {
        //   id: "4bc992e7b6c49c7401a28e91", 
        //   title: "Ken Yakitori", 
        //   description: ['3 City Road','Newton','Auckland'], 
        //   urlToImage: "Japanese",
        //   activeKey:'politics'
        // },
        // {
        //   id: "4b4d4133f964a52070cf26e3", 
        //   title: "Real Groovy", 
        //   description: ['3 City Road','Newton','Auckland'], 
        //   urlToImage: "Record Shop",
        //   activeKey:'Businsess'
        // },
        // {
        //   id: "4b53a56bf964a52013a627e3", 
        //   title: "Revel! Cafe", 
        //   description: ['3 City Road','Newton','Auckland'], 
        //   urlToImage: "Café",
        //   activeKey:'Sports'
        // },
        // {
        //   id: "4b53a56bf964a52013a627e31", 
        //   title: "Revel! Cafe", 
        //   description: ['3 City Road','Newton','Auckland'], 
        //   urlToImage: "Café",
        //   activeKey:'politics'
        // }
      ],
      businessArticles:[],
      politicsArticles:[],
      SportsArticles:[],
      activeKey:'politics' 
    }
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey:key})
  }

  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    this.setState({activeKey:'search'})
  }
  loadHeadlinesByCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;

        if(category=='business'){
          this.setState({businessArticles:articles})
        }
    
        if(category=='politics'){
          this.setState({politicsArticles:articles})
        }

        if(category=='Sports'){
          this.setState({SportsArticles:articles})
        }
      })
  }
  
  loadHeadlinesByTerm = (term) =>{
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&q='+term;
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;
        //console.log(articles);
      })
  }
  componentDidMount(){
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('politics');
    this.loadHeadlinesByCategory('Sports');
  }
  // testing 
  // loadHeadlinesByCategory('business');
  // loadHeadlinesByTerm('oil');
  
  render(){
      return (
        <div className="container">
          <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
       
            <div className="row tab-top">
              
              <Nav variant="pills" className="col-7">
              <Nav.Item>
                    <Nav.Link eventKey="politics">Politics</Nav.Link>
                  </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link eventKey="business">Businsess</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sports">Sports</Nav.Link>
                </Nav.Item>
              </Nav>

              <form className="col-5">
                <div className="form-row align-items-center justify-content-end">
                  <div className="col-auto">
                    <input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords"/>
                  </div>
                  
                  <div className="col-auto">
                    <button onClick={this.handleSearchSubmitClick} type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
                  </div>
                </div>
              </form>
            </div>

            
            <Tab.Content>
            <Tab.Pane className="tab-pane" eventKey="politics" >
                <h1>politics </h1>
              {
                this.state.politicsArticles.map((news) => {
                  var newsProps = {
                    ...news,
                    loadHeadlinesByCategory:this.loadHeadlinesByCategory,
                  }

                  return(
                  
                  <News {...newsProps}/> 
                  
                  )
                })
              }
             </Tab.Pane>
             <Tab.Pane className="tab-pane" eventKey="business" >
                <h1>business </h1>
              {
                this.state.businessArticles.map((news) => {
                  var newsProps = {
                    ...news,
                    loadHeadlinesByCategory:this.loadHeadlinesByCategory,
                  }

                  return(
                  
                  <News {...newsProps}/> 
                  
                  )
                })
              }
             </Tab.Pane>
             <Tab.Pane className="tab-pane" eventKey="sports" >
                <h1>sports </h1>
              {
                this.state.SportsArticles.map((news) => {
                  var newsProps = {
                    ...news,
                    loadHeadlinesByCategory:this.loadHeadlinesByCategory,
                  }

                  return(
                  
                  <News {...newsProps}/> 
                  
                  )
                })
              }
             </Tab.Pane>
              {/* <Tab.Pane className="tab-pane" eventKey="business">
                <h1>Business</h1>
                <div className="articles">

                  <div className="article">
                    <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                    <p><span class="badge badge-primary">Phonearena.com</span></p>
                  </div>

                  <div className="article">
                    <h5>New 4K HDR Honor Vision smart screen running Huaweis HarmonyOS unveiled at HDC 19</h5>
                    <p><span class="badge badge-primary">Buzz.ie</span></p>
                  </div>

                </div>
              </Tab.Pane> */}

              {/* <Tab.Pane className="tab-pane" eventKey="sports">
                <h1>Sports</h1>
              </Tab.Pane> */}

              {/* <Tab.Pane className="tab-pane" eventKey="search">
                <h1>Search Results</h1>

                <div className="article">
                  <h5>Apple is giving out a special iPhone that can lead to a $1 million reward</h5>
                  <p><span class="badge badge-primary">Phonearena.com</span></p>
                </div>
                
              </Tab.Pane> */}

            </Tab.Content>
          
          </Tab.Container>
        </div>
    );
  }
}

export default App;
