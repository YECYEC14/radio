import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,
        FormGroup,ControlLabel,
        FormControl,HelpBlock,
        Checkbox,Radio,
        Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    numb:"",
    food:[],
    rate: ""
    
    
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
    var state = this.state;
    state[fieldName]=event.target.value;
    this.setState(state);  
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value) >=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value), 1
    );
    else
    targetArray.push(event.target.value);
    var state = this.state;
    state[fieldName]=targetArray;
    this.setState(state);
    }
  };
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
        <h2>Student Survey</h2>
          
   
        </div>
        <p className="jumbotron">
        
        <Grid>
        <Row>
        
        <Col md={6}>
        <Form>
          
        <FormGroup>
        <ControlLabel>Name please</ControlLabel>
        <FormControl type="text" 
        placeholder="Name here..."
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite color</ControlLabel>
        <FormControl componentClass="select" 
        placeholder="Color here..."
        value={this.state.color}
        onChange={this.onChange('color')}
        >
        <option value="Red"> Red </option>
        <option value="Blue"> Blue </option>
        <option value="Green"> Green </option>``
        </FormControl>
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Movie</ControlLabel>
        <Checkbox value="xes I"
                  checked={this.state.movies.indexOf('xes I') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  xes I
                  </Checkbox>
        <Checkbox value="xes  II"
                  checked={this.state.movies.indexOf('xes II') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                   xes II </Checkbox>
        <Checkbox value="xes III"
                  checked={this.state.movies.indexOf('xes III') >=0 ? true:false}
                  onChange={this.checkboxChange('movies')}>
                  xes III </Checkbox>
        </FormGroup>
        
         <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" value="male" onChange={this.onChange('gender')}> Male</Radio>
        <Radio name="gender" value="female" onChange={this.onChange('gender')}> Female</Radio>
        </FormGroup>
        
          
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-music"></span> 
          Info Button </Button>
          <Button bsStyle="primary"> Primary Button </Button>
          <Button bsStyle="warning"> Warning Button </Button>
          <Button bsStyle="danger"> Error Button </Button>
          </ButtonGroup>
          </Form>
          
          
           <FormGroup>
        <ControlLabel>ID NUMBER</ControlLabel>
        <FormControl type="number" 
        placeholder="ID NUMBER..."
        value={this.state.numb}
        onChange={this.onChange('numb')}
        />
        <HelpBlock>Use to identify you </HelpBlock>
        </FormGroup>
          
        <FormGroup>
        <ControlLabel>Favorite fruit</ControlLabel>
        <Checkbox value="apple"
                  checked={this.state.food.indexOf('apple') >=0 ? true:false}
                  onChange={this.checkboxChange('food')}>
                  apple
                  </Checkbox>
        <Checkbox value="mango"
                  checked={this.state.food.indexOf('mango')>=0 ? true:false}
                  onChange={this.checkboxChange('food')}>
                   mango </Checkbox>
        <Checkbox value="grapes"
                  checked={this.state.food.indexOf('grapes')>=0 ? true:false}
                  onChange={this.checkboxChange('food')}>
                  grapes </Checkbox>
                  <Checkbox value="durian"
                  checked={this.state.food.indexOf('durian')>=0 ? true:false}
                  onChange={this.checkboxChange('food')}>
                  durian </Checkbox>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>RATE</ControlLabel>
        <Radio name="rate" value="excellent" onChange={this.onChange('rate')}> excellent</Radio>
        <Radio name="rate" value="very good" onChange={this.onChange('rate')}> very good</Radio>
        <Radio name="rate" value="good" onChange={this.onChange('rate')}> good</Radio>
        </FormGroup>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </Col>
        
        <Col md={6}>
        <strong> Name is: {this.state.name}</strong><br/>
        <strong> Color is: {this.state.color}</strong><br/>
        <strong> Movies is: {this.state.movies.map((item,i) =>{
         return <div>
        <span className="Label label-info">{item}</span> 
          </div>
        })}
          
        </strong><br/>
        <strong> Gender is: {this.state.gender}</strong><br/>
        <strong> ID NUMBER is: {this.state.numb}</strong><br/>
        <strong> Favorite fruit is: {this.state.food} </strong><br/>
         <strong> Rate is: {this.state.rate}</strong><br/>
        </Col>
        
        </Row>
        
        </Grid>
        
       
        </p>
      </div>
    );
  }
}

export default App;
