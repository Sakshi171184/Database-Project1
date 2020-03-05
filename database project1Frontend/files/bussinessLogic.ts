import { EmployeeType } from "./newfile";
import { promises } from "dns";

interface CRUD<T>{
  fetchData():Promise<EmployeeType>;
   newEntry(ob:object):Promise<number>;
   saveData(id:string,obj:object):Promise<void>;
  deleteData(id:string):Promise<void>;
}
 export class bussinessLogic implements CRUD<EmployeeType>{
   
  async fetchData(){
    let fetchedResponse=await fetch('http://localhost:3000/CRUD/Fetch');                                                                        // This will fetch data from json file
    let dataFetched=await fetchedResponse.json();
    return  dataFetched;
  }

  async deleteData(id:string){
    let fetchedResponse=await fetch(`http://localhost:3000/CRUD/Delete/${id}`,{
      method: 'delete'
    })   

  }

  async newEntry(newElement:object){
    let fetchedResponse=await fetch(`http://localhost:3000/CRUD/create`,{
      method: 'POST',
      body: JSON.stringify(newElement),
      headers:{
        'Content-Type': 'application/json'
      }
    }) 
    let fetched= await fetchedResponse.json();
    return fetched;
  }

  async saveData(id:string,newElement:object){
    let fetchedResponse=await fetch(`http://localhost:3000/CRUD/save/${id}`,{
      method: 'PUT',
      body: JSON.stringify(newElement),
      headers:{
        'Content-Type': 'application/json'
      }  
    })   

  }

}

export let bussinessObject=new bussinessLogic();
