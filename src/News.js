import React , {Component} from 'react';
import Tab from 'react-bootstrap/Tab';
class News extends Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render()
    {
        return(
           

                <div className="articles">
                  <div className="article">
                    <h5>{this.props.title}</h5>
                    <p><span className="badge badge-primary">{this.props.title}</span></p>
                  </div>

                  {/* <div className="article">
                    <h5>Bengals vs. Chiefs: 5 winners and 6 losers from Cincinnatis 38-17 defeat - Cincy Jungle</h5>
                    <p><span className="badge badge-primary">Cincyjungle.com</span></p>
                  </div>

                  <div className="article">
                    <h5>New 4K HDR Honor Vision smart screen running Huaweis HarmonyOS unveiled at HDC 19</h5>
                    <p><span className="badge badge-primary">Buzz.ie</span></p>
                  </div> */}

                </div>
             

        );
    }
}

export default News;