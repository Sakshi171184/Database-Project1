import {role,EmployeeType,p} from "./newfile"
export class applicationLogic{

   fetchData(data:Array<EmployeeType>){
      document.getElementById('take')!.innerHTML=`
      ${this.tableStart}
      ${this.tableEnd}`;
      data.map(this.rowformation).join("");
      p.RecordArray=data.map(obj => Object.values(obj));
      
    }

   editFunctionallity():void{
    let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                                                                                                       
    for(let i=1;i<10;i++)  {      
        if(i==8){
          tableRow.cells[i].innerHTML=`<input  type="button" value="Save" class="btn btn-success" >`	;	 
          tableRow.cells[i].onclick=p.saveData;
        }
       else if(i==9){
        tableRow.cells[i].innerHTML=`<input type="button" value="Cancel" class="btn btn-danger" >`;
        tableRow.cells[i].onclick=p.DeleteData;
       }
       else if(i==6){
        tableRow.cells[i].innerHTML= `<select id="role">
        <option value="0">Developer</option>
        <option value="1">Devops</option>
        <option value="2">QA</option>
         </select>`;	     
       }
       else
       tableRow.cells[i].innerHTML=`<input value="${p.RecordArray[tableRow.rowIndex-1][i]}"><span style="display:none" class="popuptext">Invalid Input</span>`;	                    
        }
  
    };
   appendData():void{

     let hostElement:HTMLButtonElement=document.getElementById("mainButton")as HTMLButtonElement;
     if(hostElement.value=="LOAD DATA"){
        hostElement.style.display="none";
        document.getElementById('NEWENTRYBUTTON')!.style.display="block";
     }
    else{
      document.getElementById('take')!.innerHTML="";                
     }
   };

  deleteData(tableRow:HTMLTableRowElement):void{        
      p.RecordArray.splice(tableRow.rowIndex-1,1);                                                    
      (tableRow.parentNode as HTMLTableElement).removeChild(tableRow);  


   };
 
  tableStart=`
    <table id='New-Table' class="table table-striped" class="table table-bordered"width=80%>
      <tr>
       <th><input type="button" value="DeleteMany" class="btn btn-primary"id="DeleteMany"></th>
       <th>First Name</th>
       <th>Middle Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Phone Number</th>
       <th>Role</th>
       <th>Address</th>
       <th colspan=2>Buttons</th>
      </tr> `;

   tableEnd=`
     </table> `;
 
  rowformation(data:EmployeeType) {   
    let lengthOfTable:number=(document.getElementById('New-Table')! as HTMLTableElement).rows.length; 
    let row:HTMLTableRowElement=(document.getElementById('New-Table')!as HTMLTableElement).insertRow(lengthOfTable); 
    row.id=data.id.toString();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);
    let cell10 = row.insertCell(9);
     cell1.innerHTML=`<input type="Checkbox"  value="checkbox" class="checkBoxFunction" >`;
     cell2.innerHTML=data.firstname;
     cell3.innerHTML = data.middlename;
     cell4.innerHTML = data.lastname;
     cell5.innerHTML = data.email;
     let dataOfPhone=data.phonenumber.toString();
     let lastTen :string;
     let initialOfNumber:string;
     if( dataOfPhone.length==12){
         lastTen = dataOfPhone.substring(2,dataOfPhone.length);
         initialOfNumber= dataOfPhone.substring(0, 2);
     }
     else{
      lastTen = dataOfPhone.substring(3,dataOfPhone.length );
      initialOfNumber= dataOfPhone.substring(0, 3);
     }

   
     cell6.innerHTML ="+"+ initialOfNumber + "-"+ lastTen;
     cell7.innerHTML = role[data.role];
     cell8.innerHTML = data.address;
     cell9.innerHTML=`<input type="button" value="Edit"  class="btn btn-primary" >`;
     cell10.innerHTML=`<input type="button" value="Delete" class="btn btn-danger">`;
     cell9.onclick=p.editFunctionallity;
     cell10.onclick=p.deleteData;
  }  

}
export let  applicationObject=new applicationLogic();