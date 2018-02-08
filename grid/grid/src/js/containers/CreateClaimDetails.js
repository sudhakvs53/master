import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Tabs,
    Tab,
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

} from "react-bootstrap";

class CreateClaimDetails extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleFormulaSelection = this.handleFormulaSelection.bind(this);
      this.handleSubstantiation = this.handleSubstantiation.bind(this);
      this.state = {
        key: 1,
        selectedRegionKey: '',
        formulaSelected: '1',
        btnLabel: 'Extract Optiva Data',
        isOptivLabFormula: true,
        substantiationVal: ''
      };
    }

    handleSubstantiation = (e) => {
        let substantiationValue = e.target.value;
        console.log(substantiationValue);
        this.setState({substantiationVal: substantiationValue});
    }

    handleFormulaSelection = (e) => {
        
       let formulaValue = e.target.value;
        if(formulaValue == '1' || formulaValue == '2')
           this.setState({btnLabel: 'Extract Optiva Data'});
        else
           this.setState({btnLabel: 'Add Data'});  
        //console.log(formulaValue);
        this.setState({formulaSelected: formulaValue});
         
        this.setState({formulaSelected: formulaValue});
        console.log('Formula Value Selected By User : '+this.state.formulaSelected);
    }

    handleRegionSelection = (e) => {

        let regionVal = e.target.value;
        console.log('regionVal'+regionVal);

        this.setState({selectedRegionKey: regionVal});

    }

    handleListItemSelection = (key) => {
       
        if(this.state.selectedRegionKey == key)
          return 'active'

        return "";

          
    }

    clearInput() {
        document.getElementById('input1').value = "";
    }
  
    render() {
      return (
        <Tabs
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="   Claim   ">
            <p>Claim Details</p>
            <hr />
            <Col sm={8}>    
                <Form horizontal>
                <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                       Claim:
                     </Col>
                  <FormControl componentClass="textarea" />
                </FormGroup>
                <FormGroup controlId="formHorizontalNeedState">
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Benefit Area:
                     </Col> 
                     <Col sm = {8}>
                       <FormControl componentClass = "select" 
                                    placeholder = "Benefit Area:">
                         <option key = "1" value = "" >Select Benefit Area</option>   
                         <option key = "2" value = "" > Cleansing </option> 
                         <option key = "3" value = "" > Composition/Product Design </option> 
                         <option key = "4" value = "" > Efficacy </option> 
                       </FormControl>  
                     </Col>    
                </FormGroup>
                <FormGroup>
                     <Col componentClass = {ControlLabel} sm = {2}>
                           Region:
                     </Col>
                     <Col sm = {8}>
                      <ListGroup>
                        <ListGroupItem value="1" onClick={this.handleRegionSelection} className={this.handleListItemSelection(1)}>AP</ListGroupItem>
                        <ListGroupItem value="2" onClick={this.handleRegionSelection} className={this.handleListItemSelection(2)}>EMEA</ListGroupItem>
                        <ListGroupItem value="3" onClick={this.handleRegionSelection} className={this.handleListItemSelection(3)}>LATAM</ListGroupItem>
                        <ListGroupItem value="4" onClick={this.handleRegionSelection} className={this.handleListItemSelection(4)}>NA</ListGroupItem>
                      </ListGroup>  
                     </Col>
                </FormGroup>  
                <FormGroup controlId="formHorizontalException">
                     <Col componentClass={ControlLabel} sm={2}>
                            Exception:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="exception" />
                     </Col>
                  </FormGroup>
                </Form>
                  </Col>
          </Tab>
          <Tab eventKey={2} title="   Formula # / Product Spec #    ">
            <p>Extract Formula # / Product Spec #</p>
            <hr />
            <select onChange={this.handleFormulaSelection}>
                <option value="1">Optiva Formula #</option>
                <option value="2">Lab Notebook #</option>
                <option value="3">Formula Number</option>
                <option value="4">Product Specification</option>
            </select>
            <input id="input1"/>
            <Button className="btnClass" type="submit" bsStyle="primary">{this.state.btnLabel}</Button>
            <Button className="btnClass" type="submit" onClick={this.clearInput}>Clear</Button>
            <div>
              <Col sm={8}>    
                <Form horizontal>
                  <FormGroup controlId="formHorizontalFormulaTitle">
                     <Col componentClass={ControlLabel} sm={2} >
                            Formula # / Product Spec #:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" readOnly/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalLabNotebookTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                             Lab Notebook #:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" disabled ={this.state.formulaSelected == '1' || this.state.formulaSelected == '2'? true:false }/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalRegionTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                             Region
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" readOnly/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPrdctNameTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Product Name:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" readOnly/>
                     </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPrjNameTitle">
                     <Col componentClass={ControlLabel} sm={2}>
                            Project Name:
                     </Col>
                     <Col sm={8}>
                       <FormControl type="formula" readOnly/>
                     </Col>
                  </FormGroup>
                </Form>
                </Col>
          </div>      
          </Tab>
          <Tab eventKey={3} title="   Substantiation   ">
            <p>Add Substantiation (s)</p>
            <hr />
            <Button className={this.state.substantiationVal == ''?'disabled':''} type="submit" bsStyle="primary">Save Substantiation</Button>
            <Button className="btnClass" type="submit">Cancel</Button>
            <Form horizontal>
                <FormGroup controlId="formHorizontalSubstantiation">
                     <Col componentClass = {ControlLabel} sm = {2}>
                       Substantiation:
                     </Col>
                  <FormControl componentClass="textarea" onChange={this.handleSubstantiation}/>
                </FormGroup>
            </Form>    
          </Tab>
        </Tabs>
      );
    }
  }
  
  export default CreateClaimDetails;