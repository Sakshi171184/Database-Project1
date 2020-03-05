import {p} from "./newfile"
import {bussinessLogic, bussinessObject} from "./bussinessLogic"
export class deleteMany{
   deleteMany(){
     const userSelectionOfInputElements:NodeListOf<HTMLInputElement>=document.querySelectorAll('.checkBoxFunction');                                    
     let newArrayOfChecks:Boolean[]= Array.from(userSelectionOfInputElements).map((ew)=> ew.checked);                       
     let checkBoxes:HTMLInputElement[]=Array.from(userSelectionOfInputElements);
     let ifAnyChecked:Boolean=false;
     for(let i=0;i<newArrayOfChecks.length;i++){
        if(newArrayOfChecks[i]==true){   
         ifAnyChecked=true;                                                             
           let rowToDelete:HTMLTableRowElement=((checkBoxes[i]!as HTMLInputElement).parentNode as HTMLTableCellElement).parentNode as HTMLTableRowElement;
           bussinessObject.deleteData( rowToDelete.id).then(()=>{
            p.RecordArray.splice(rowToDelete.rowIndex-1,1);  
            (rowToDelete.parentNode as HTMLTableElement).removeChild(rowToDelete);
           })

         }
      }
     if(ifAnyChecked==false){
        alert("No row is selected");
     } 
   } 
}
export let  deleteManyObject=new deleteMany();