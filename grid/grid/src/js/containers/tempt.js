export default class Helper {

    static fetchData(url, project_id) {
        return fetch(url, {
                method: 'GET',
                headers: new Headers({
                    "project_id": project_id
                })
            })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
    }



}


// export const Data = [
//   {
//       id:15,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '150',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [{
//       modifiedBy: "userA",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Change Status from Open",
//       comment: "Menual Approval"
//     },
//     {
//       modifiedBy: "userB",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Menual Approval"
//     }

//   ]
//   },
//   {
//       id:16,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '160',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: false,
//     history: [{
//       modifiedBy: "userA",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Menual Approval"
//     },
//     {
//       modifiedBy: "userB",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Menual Approval"
//     },
//     {
//       modifiedBy: "userC",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Menual Approval"
//     }
//   ]
//   },
//   {
//       id:22,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '170',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [{
//       modifiedBy: "userC",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Close Records"
//     }
//   ]
//   },
//   {
//       id:96,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '180',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [ {
//       modifiedBy: "userG",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Close Records"
//     }
//   ]
//   },
//   {
//       id:74,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '980',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: false,
//     history: [
//           {
//               modifiedBy: "userH",
//               modifiedTime: "30.09.17 08:00",
//               modification: "Create new Records",
//               comment: "Menual Approval"
//           }
//     ]


//   },
//   {
//       id:35,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '165',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [ 
//         {
//       modifiedBy: "userK",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Close Records"
//        }
//    ]
//   },
//   {
//       id:59,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '111',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [
//          {
//       modifiedBy: "userM",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Menual Approval"
//     }
//   ]
//   },
//   {
//       id:59,
//     possId: '1',
//     possType: 'High',
//     mainOrderId: '189',
//     mainType: 'Singnal',
//     startKm: '23.5',
//     endKm: '23.9',
//     startTime: '9/23/17 8:00',
//     endTime: '9/23/17 8:00',
//     status: 'Pending For Approval',
//     statusType: true,
//     history: [ {
//       modifiedBy: "userJ",
//       modifiedTime: "30.09.17 08:00",
//       modification: "Create new Records",
//       comment: "Close Records"
//     }
//   ]
//   }
// ]