import {bussinessLogic, bussinessObject} from "./bussinessLogic"
import {applicationLogic,applicationObject} from "./applicationLogic"
import {cancel, cancelDataObject} from "./DeleteData"
import {Save,saveDataObject} from "./saveData"
import {formVisibility ,formVisibilityObject} from "./formVisibility"
import {newEntry, newEntryObject} from "./newEntry"
import {deleteMany,deleteManyObject} from "./deleteMany"

 enum role{
    Developer=0,
    Devops,
    QA
 }


 class EmployeeType{
    public id:number;
    public firstname:string;
    public middlename:string;
    public lastname:string;
    public email:string;
    public phonenumber:number;
    public role:role;
    public address:string;
   constructor(firstname:string,
    middlename:string,
    lastname:string, 
    email:string,
    phonenumber:number,
    role:role,
    address:string
   ){
        this.firstname=firstname;
        this.middlename=middlename;
        this.lastname=lastname;
        this.email=email;
        this.phonenumber=phonenumber;
        this.role=role;
        this.address=address

    }
}

 class globalClass {
    RecordArray:Array<any[]>;
   
    constructor(){
       
       document.getElementById("mainButton")!.onclick=this.appendData;

    }
    appendData(){
       applicationObject.appendData();
        p.fetchData();
    };

    editFunctionallity():void{
        applicationObject.editFunctionallity();
    };

    fetchData():void{
         bussinessObject.fetchData()
        .then(data=>{applicationObject.fetchData(data);
           document.getElementById("DeleteMany")!.onclick=p.deleteMany;
           document.getElementById("NEWENTRYBUTTON")!.onclick=p.formFormation;
          }
        );
       
    };

    deleteData():void{
        let tableRow=((((event!.target)! as HTMLInputElement).parentNode)as HTMLTableCellElement).parentNode as HTMLTableRowElement;
        let id=tableRow.id;
        bussinessObject.deleteData(id)
        .then(()=>applicationObject.deleteData(tableRow));
    };

   saveData(){
       saveDataObject.SaveData();
    } ;

   DeleteData(){
       cancelDataObject.DeleteData();
    };

   deleteMany(){
       deleteManyObject.deleteMany();
   };

   newentry(){
       event?.preventDefault();
      newEntryObject.insertingRow(applicationObject);
         
   };

   formFormation(){
       formVisibilityObject.formFormation();
       document.getElementById("submitButton")!.onclick=p.newentry;
       document.getElementById("cancelButton")!.onclick=p.formDisable;
   }

   formDisable(){
       console.log("");
       formVisibilityObject.formDelete();

   }

}

  const p=new globalClass();

export {p,EmployeeType,role}






   
   
  
