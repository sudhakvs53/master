import React from 'react';
import ReactTooltip from './Tooltip/index';
import './Tooltip/index.scss';
import MainGrid from "../containers/mainGrid";

export const Edit = (props) => {
  return (
    <div className="common_grid_cell">
      <a>Edit</a>
    </div>
  )
}

export const NoticeSelect = (props) => {
  // console.log(props.data.rowId)
   return (<input id={props.data.rowId} type="checkbox" className="form-check-input" />)
 }
 let count = 1;
 


const FloatTooltip = () => {
  return (
    <div>Float</div>
  )
}


export const  HistoryLink = (props) => {
  // console.log(props)
  // let tbody = null;
  // const COL_DEF =  props.colDef.field;
  // const CURRENT_OBJECT = props.data;
  // const FIELD_NAME = props.colDef.field.toLowerCase();
  // const TOOLTIP = CURRENT_OBJECT[FIELD_NAME];

  // console.log( TOOLTIP)

  // if (Array.isArray(TOOLTIP)) {
  //     const CURRENT_OBJECT_KEYS = Object.keys(TOOLTIP[0]);
  //     console.log( CURRENT_OBJECT_KEYS)
      
  //     tbody  =  TOOLTIP.map((row,index) => {
  //         return (
  //             <tr key={index}>
  //             {
  //               CURRENT_OBJECT_KEYS.map((column, index2)=>{
  //                        return (<td key={index2}> {row[column]} </td>)
  //                  })
  //             }
  //             </tr>  
  //         )
  // }) 
  // } else {
  //     console.log("not array")
  // }     
  
 
      return (
        <div className="tooltip_wrapper common_grid_cell">
              <a data-tip="your placeholder" data-for='id' >History</a>
              <ReactTooltip place="top" className="tabel_tooltip" id='id' aria-haspopup='true' type="light" >
                  <table className="table table-bordered table-inverse">
                      <thead>
                          <tr className="table-active">
                          <th>Modified By</th>
                          <th>Modified Time</th>
                          <th className="row_modification">Modification</th>
                          <th>Comments</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>{count++}</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                          </tr>
                      </tbody>
                  </table>
              </ReactTooltip>    
      </div>
         
      );
  }

  export default HistoryLink








// export const Hist = (props) => {
//   let id = "HappyFace"
//   return (
//     <div className="common_grid_cell">
//       <a data-tip data-for='happyFace'>
//         History
//       </a>
//       <ReactTooltip
//         data-offset={{
//         bottom: -10,
//         left: 10
//       }}
//         id='happyFace'
//         type='error'>
//          <MainGrid />

//       </ReactTooltip>

//     </div>
//   )
// }

