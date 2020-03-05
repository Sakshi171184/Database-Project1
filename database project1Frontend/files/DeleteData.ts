import {p,role} from "./newfile"
export class cancel{

   DeleteData(){   
    let  tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;                                                 
    for(var i=1;i<10;i++) {                            
      if(i==8){		
       tableRow.cells[i].innerHTML=`<input  type="button" value="Edit" class="btn btn-primary"  >`	;	
       tableRow.cells[i].onclick=p.editFunctionallity;
      }
      else if(i==9){
       tableRow.cells[i].innerHTML=`<input type="button" value="Delete" class="btn btn-danger">`;
       tableRow.cells[i].onclick=p.deleteData;
      }
      else if(i==5){
         let dataOfPhone =p.RecordArray[tableRow.rowIndex-1][i].toString();
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

         tableRow.cells[i].innerHTML="+"+ initialOfNumber + "-"+ lastTen;
        }
      else if(i==6){
         tableRow.cells[i].innerHTML=`${role[p.RecordArray[tableRow.rowIndex-1][i]]}`;
      }	
      else
         tableRow.cells[i].innerHTML=`${p.RecordArray[tableRow.rowIndex-1][i]}`;						   
         } 
    }
}    
export let  cancelDataObject=new cancel();