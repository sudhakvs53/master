import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Button, Col,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
    Row,
    ListGroup,
    ListGroupItem,
    DropdownButton,
    ButtonToolbar,
    title,
    MenuItem
    
    // Checkbox
} from "react-bootstrap";

class CreateClaimForm extends Component {

    constructor(props) {
        super(props);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.handleProjTitleInput = this.handleProjTitleInput.bind(this);
        this.handleNeedStateSelection = this.handleNeedStateSelection.bind(this);
        this.handleProductFormSelection = this.handleProductFormSelection.bind(this);
        this.state = {
            selectedClaimType: '1',
            projTitle: '',
            needState: '',
            prdctForm: ''
        }
    }

    onMenuItemClick(e) {
        //console.log(e.target);
        this.setState({selectedClaimType: e});

        document.getElementById('formHorizontalProjTitle').value = "Enter a Project Title";
        document.getElementById('formHorizontalNeedState').selectedIndex = "0";
        document.getElementById('formHorizontalPrdctForm').selectedIndex = "0";
        //document.getElementById('button1').setAttribute("disabled","disabled");
    }

    handleProjTitleInput = e => { 
      
      this.setState({projTitle: e.target.value});
      //console.log('Project Title Value Entered By User : '+this.state.projTitle);
    }

    handleNeedStateSelection = e => {

        let needStateVal = e.target.selectedIndex;
        //console.log(needStateVal);
        this.setState({needState: needStateVal});
        //console.log('NeedState Value Selected By User : '+this.state.needState);
    }

    handleProductFormSelection(e) { 

        let prdctFormValue = e.target.selectedIndex;
        this.setState({prdctForm: prdctFormValue});
        //console.log('Product Form Value Selected By User : '+this.state.prdctForm);
    }

    handleListItemSelection = (key) => {
       
        if(this.state.selectedClaimType == key)
          return 'active'

        return "";

          
    }

    render() {
        return (<div>
                  <div className="pull-right">
                   <DropdownButton
                     title="New"
                     id="dropdown1">
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="1">Product</MenuItem>
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="2">Brand</MenuItem>
                     <MenuItem onSelect={this.onMenuItemClick} eventKey="3">Experience</MenuItem>
                   </DropdownButton>
                </div> 
                <div className="titleClass">
                    <h4>Create New {this.state.selectedClaimType==1?'Product':this.state.selectedClaimType==2?'Brand':'Experience'} Claim</h4>
                </div>
                <Col sm={7}>    
                <Form horizontal>
                  <FormGroup controlId="formHorizontalProjTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Project Title:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="project" placeholder="Enter a Project Title" onChange={this.handleProjTitleInput} />
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Need State:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" 
                                    placeholder = "Need State:"
                                    onChange={this.handleNeedStateSelection}>
                         <option key = "1" value = "" >Select a Need State</option>   
                         <option key = "2" value = "" > Baby </option> 
                         <option key = "3" value = "" > Beauty </option> 
                         <option key = "4" value = "" > Feminine Care </option> 
                         <option key = "5" value = "" > Hair Care </option> 
                         <option key = "6" value = "" > Oral Care </option> 
                         <option key = "7" value = "" > OTC </option> 
                         <option key = "8" value = "" > Wound Care </option>
                       </FormControl>  
                     </Col>    
                  </FormGroup>
                  <div className={this.state.selectedClaimType=='2'?'hidden':this.state.selectedClaimType=='3'?'hidden':''}>
                  <FormGroup controlId="formHorizontalPrdctForm">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Product Form:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" placeholder = "Product Form:" onChange={this.handleProductFormSelection}>
                         <option key = "1" value = "" > Select a Product Form </option>   
                         <option key = "2" value = "" > Aerosol </option> 
                         <option key = "3" value = "" > Bandage </option> 
                         <option key = "4" value = "" > Caplet </option> 
                         <option key = "5" value = "" > Capsule </option> 
                       </FormControl>  
                     </Col>    
                  </FormGroup>
                  </div>
                  </Form>
                  </Col>
                  <Col sm={5}>
                  <div>
                    <Col sm={3}>  
                      <p>Claim Type:</p>  
                      <ListGroup>
                        <ListGroupItem className={this.handleListItemSelection(1)} >Product</ListGroupItem>
                        <ListGroupItem className={this.handleListItemSelection(2)}>Brand</ListGroupItem>
                        <ListGroupItem className={this.handleListItemSelection(3)}>Experience</ListGroupItem>
                      </ListGroup>
                    </Col>
                  </div>    
                  <ButtonToolbar>
                     <Col smOffset={2} sm={8}>
                       <Button id="button1" type="submit" className={this.state.projTitle!=''&&this.state.needState!=''&&this.state.prdctForm!=''?'':'disabled'} bsStyle="primary" >Create New Claim</Button>
                       <Button type="submit" className="btnClass">Cancel</Button>
                     </Col>
                  </ButtonToolbar>
                
                </Col>
            </div>);
    }
 }      

export default CreateClaimForm;