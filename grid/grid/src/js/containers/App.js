//@flow
import React from "react";
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-fresh.css";
import ReactTooltip from 'react-tooltip'
import "../../css/main.css";
import "../../css/main.scss";
import MainGrid from "./mainGrid";
import Helper from "./tempt";
import CreateClaimForm from "./CreateClaimForm"
import Counter from "../../redux/CounterReducer"
import CreateClaimDetails from "./CreateClaimDetails";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        Helper.fetchData('http://localhost:3002/get_project_claims', "PROJECTTS1501481037939R60").then((data) => {
            this.setState({ data });
        })
    }

    render() {
        return ( < div >
              <CreateClaimForm /> 
              {/* <Counter /> */}
              {/* <CreateClaimDetails /> */}
            </div >
        )
    }
}
export default App;