import React, { Component } from 'react';
import {Menu,Label,Image, List,Segment,Button, Modal} from 'semantic-ui-react';
import './App.css';
import gleasonCircle from '../public/gleasonCircle.jpg';
import brickCity from '../public/brickCity.jpg';
import wallaceCenter from '../public/wallaceCenter.jpg';

class App extends Component {

    constructor(props){
        var description = "Nulla purus est, dapibus ut facilisis et, faucibus et urna. Ut dui dui, volutpat a risus nec," +
            " placerat molestie augue. In ipsum nulla, placerat sit amet neque vel, sagittis semper tellus. Lorem ipsum " +
            "dolor sit amet, consectetur adipiscing elit. Nunc molestie vel justo ut venenatis. Nam in euismod erat. " +
            "Vivamus libero dui, sodales eget sollicitudin et, pulvinar nec elit. Phasellus tellus nisl, luctus sed nulla" +
            " a, blandit imperdiet dolor. Maecenas vitae sodales quam, sit amet dapibus massa. Nunc pulvinar imperdiet " +
            "facilisis. Vestibulum nec mauris ac nisi interdum tempor vel sit amet mauris. Phasellus et semper tellus. " +
            "Integer et ex enim. Phasellus sit amet sollicitudin nisl, ut aliquam mi. Ut non vulputate erat. Nulla " +
            "rutrum turpis in augue cursus venenatis."
        var data = [
            {
                "name": "Gleason Circle",
                "description": description,
                "image": gleasonCircle
            },
            {
                "name": "Wallace Center",
                "description": description,
                "image": wallaceCenter
            },
            {
                "name": "Brick City",
                "description": description,
                "image": brickCity
            }
        ];
        super(props);
        this.state = { activeItem: data[0] , locations: data};
        this.handleItemClick = this.handleItemClick.bind(this);
    }


    handleItemClick(e) {
            this.setState({activeItem: this.state.locations[e]});
    }

  render() {
    return (
      <div className="wrapper">
          <div id="header">
          <h1>RIT-Wiki</h1>
          </div>

          <div id="dataWrapper">
              {/*<Menu text vertical>*/}
                  {/*<Menu.Item header>Important Locations</Menu.Item>*/}
                  {/*<Menu.Item name='Gleason Circle' active={this.state.activeItem === 'gleasonCircle'} onClick={this.handleItemClick} />*/}
                  {/*<Menu.Item name='mostComments' active={this.state.activeItem === 'mostComments'} onClick={this.handleItemClick} />*/}
                  {/*<Menu.Item name='mostPopular' active={this.state.activeItem === 'mostPopular'} onClick={this.handleItemClick} />*/}
              {/*</Menu>*/}
              <div id="menu">
                  {/*<List.Item>Gleason Circle</List.Item>*/}
                  {/*<List.Item>Wallace Center</List.Item>*/}
                  {/*<List.Item>Brick City</List.Item>*/}
                  {/*<List.Item>Gene Polliseni Center</List.Item>*/}
                  <List>
                      {
                          this.state.locations.map((location,id)=>{
                              return <List.Item as="a" key={id} onClick={this.handleItemClick.bind(this,id)}>{location.name}</List.Item>
                          })
                      }
                  </List>
              </div>
            <Segment>
                <Label attached='top' size="huge">{this.state.activeItem.name}</Label>
                <br/><br/> <br/>
                <div style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <Image src={this.state.activeItem.image} style={{marginRight:"10px"}}/>
                <div>
                {this.state.activeItem.description}
                <br/> <br/>
                {this.state.activeItem.description}
                </div>
                </div>
            </Segment>
          </div>

      </div>
    );
  }
}

export default App;
