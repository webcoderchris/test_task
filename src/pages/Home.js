// Home.js
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import BigText from '@material-ui/core/Typography/'
class Home  extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { 
      number: '',
      step1: true,
      step2: false,
      operator:'+',
    };
  }
  
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onClick(e){
    this.setState({step1:true});
    this.setState({step2:true});
  }
  addOperation(e){
    let number1 = this.state.number;
    let number2 = this.state.operand;
    let operator = this.state.operator;
    let result = eval(number1+operator+number2);

    this.setState({result:result});
  }
  
  render() {
    const step1 = this.state.step1
    const step2 = this.state.step2
   
    
      if(step1 == true && step2 == false){
        
        return (
          
          <React.Fragment>
            <center>
            <Grid container spacing={5}>
            <Grid item xs={12}>
                <h1  style={{fontWeight:"50",fontSize:"100px", color:"rgb(84, 227, 195)" }} >Expression<br/> Evaluator</h1>
            </Grid>
            <Grid item xs={12}>
              <Input style={{background:"#bfbfbf", height:"100px",fontSize:"40px"}} type="text" name="number" onChange={this.onChange}/>
            </Grid>
            <Grid item xs={12}>
            <Button style={{height:"100px",width:"30%",fontSize:"20px", color:"#fff", background:"#79cea1" }} variant="contained" type="button" onClick={this.onClick}>Add Number</Button>
            </Grid>
      
            </Grid>
            </center>
          </React.Fragment>
        );
      }else{
        return (
          <React.Fragment>
            <center>
            <Grid container md={8} justify="center" spacing={0} style={{}}>
                  <Grid item  xs={6} sm={3} spacing={3} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Grid md={6} justify="center">
                      <Input style={{background:"#bfbfbf", height:"100px",fontSize:"40px"}} type="text" name="number" value={this.state.number} onChange={this.onChange}/> 
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3} spacing={3} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Grid md={6} justify="center">
                      <Input style={{background:"#bfbfbf", height:"100px",fontSize:"40px"}} type="text" disabled value={this.state.operand} /> 
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={3} spacing={3} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                  <label style={{fontWeight:"50",fontSize:"100px", color:"rgb(84, 227, 195)" }}>+</label>
                  </Grid>
              <Grid item xs={12}>
              <h1 style={{fontWeight:"50",fontSize:"100px", color:"rgb(84, 227, 195)" }}><b>=</b></h1>

              <h1 style={{fontWeight:"50",fontSize:"100px", color:"rgb(84, 227, 195)" }}>{this.state.result}</h1>

              </Grid>
              <Grid md={6} justify="center">
                <select name="operator" onChange={this.onChange} style={{padding:"20px",borderRadius:"5px",margin:"5px",width:"45%"}} xs={6}>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="*">*</option>
                  <option value="/">/</option>
                </select>
                <input type="text" xs={6} name="operand" value={this.state.operand} onChange={this.onChange} style={{padding:"20px",borderRadius:"5px",margin:"5px",width:"45%"}} />
                </Grid>
                <Grid md={11} justify="center">
                <button type="button" xs={12} style={{width:"50%", height:"100px",fontSize:"20px", color:"#fff", background:"#79cea1", borderRadius:"5px",border:"1px solid #79cea1"}} onClick={this.addOperation}>Add Operation</button> 
              </Grid>
            </Grid>
            </center>
            </React.Fragment>
          );
      }

   
  }
 }
export default withRouter(Home);