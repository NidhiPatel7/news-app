import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
class News extends Component
{
    constructor(props)
    {
        super(props);
        //console.log(props);
    }

    render()
    {
        return(
           

                
                  <div className="article col-sm-12">
                    <div className="img-div">
                      <img src={this.props.urlToImage} alt="news"/>
                    </div>
                    <div className=" ">
                    <h5>{this.props.title}</h5>
                    <p><span className="badge badge-primary">{this.props.author}</span></p>
                    </div>
                  </div>

                  

        );
    }
}

export default News;