//import {p} from "./newfile"
export class formVisibility{
    formFormation(){
       document.getElementById('form-visibility')!.style.display="block";
    }

    formDelete(){
       (document.getElementById('MakingForm')!as HTMLFormElement).reset();
       document.getElementById('form-visibility')!.style.display="none";
   }	  

}
export let formVisibilityObject=new formVisibility();