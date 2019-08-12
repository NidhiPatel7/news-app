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
            <Tab.Pane className="tab-pane" eventKey={this.props.activeKey}>
                <h1>{this.props.activeKey}</h1>

                <div className="articles">
                {
                     this.state.allNews.map((news) => {
                         
                    })
                }
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
              </Tab.Pane>

        );
    }
}

export default News;