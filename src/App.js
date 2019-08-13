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
      searchArtical:[],
      search:'',
      activeKey:'politics' 
    }
  }

  handleTabSelect = (key, e) => {
    this.setState({activeKey:key})
  }
  handleSearchChange = (e) =>
  {
    this.setState({search:e.target.value});
    
  }
  handleSearchSubmitClick = (e) => {
    e.preventDefault();
    // this.setState({activeKey:'search'})
    this.setState({activeKey:'search'});
    this.loadHeadlinesByTerm(this.state.search);
    // this.setState({search:e.target.value});
    
  }

  loadHeadlinesByCategory = (category) => {
    var articlesURL = 'https://newsapi.org/v2/top-headlines'+key+'&category='+category;
    fetch(articlesURL)
      .then( res=>res.json())
      .then((data)=>{
        var articles = data.articles;

        if(category==='business'){
          this.setState({businessArticles:articles})
        }
    
        if(category==='politics'){
          this.setState({politicsArticles:articles})
        }

        if(category==='Sports'){
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
        this.setState({searchArtical:articles})
        // if(term=='search'){
        //   this.setState({searchArtical:articles})
        // }
        //console.log(articles);
      })
  }
  componentDidMount(){
    this.loadHeadlinesByCategory('business');
    this.loadHeadlinesByCategory('politics');
    this.loadHeadlinesByCategory('Sports');
    // this.loadHeadlinesByTerm('search');
  }
  // testing 
  // loadHeadlinesByCategory('business');
  // loadHeadlinesByTerm('oil');
  
  render(){
      return (
        <div className="container">
          <Tab.Container activeKey={this.state.activeKey} onSelect={this.handleTabSelect}>
       
            <div className="row tab-top">
              
              <Nav variant="pills" className="col-12">
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

              <form className="col-12">
                <div className="form-row align-items-center justify-content-end">
                  <div className="col-sm-8">
                    <input type="text" className="form-control mb-2 search-input" placeholder="Enter keywords" onChange={this.handleSearchChange}/>
                  </div>
                  
                  <div className="col-sm-4">
                    <button onClick={this.handleSearchSubmitClick}   type="submit" className="btn btn-primary mb-2 search-submit">Search</button>
                  </div>
                </div>
              </form>
            </div>

            
            <Tab.Content>
            <Tab.Pane className="tab-pane" eventKey="politics" >
                <h1>politics </h1>
                <div className="list-news">
                  <div className="articles">
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
                </div>
              </div>
             </Tab.Pane>
             <Tab.Pane className="tab-pane" eventKey="business" >
                <h1>business </h1>
                <div className="list-news">
                <div className="articles">
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
                </div>
              </div>
             </Tab.Pane>
             <Tab.Pane className="tab-pane" eventKey="sports" >
                <h1>sports </h1>
                <div className="list-news">
                <div className="articles">
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
                  </div>
              </div>
             </Tab.Pane>
             <Tab.Pane className="tab-pane" eventKey="search" >
                <h1>search </h1>
                <div className="list-news">
                  <div className="articles">
                    {
                      this.state.searchArtical.map((news) => {
                        var newsProps = {
                          ...news,
                          loadHeadlinesByCategory:this.loadHeadlinesByCategory,
                        }

                        return(
                        
                        <News {...newsProps}/> 
                        
                        )
                      })
                    }
                  </div>
              </div>
             </Tab.Pane>

            </Tab.Content>
          
          </Tab.Container>
        </div>
    );
  }
}

export default App;
