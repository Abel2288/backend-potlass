import { CelestialBody } from "./CelestialBody";
import { Planets } from "./Planet";

function handler()
{

const CelestialBody:CelestialBody[] = [];
const form = document.getElementById('planetForm')!.addEventListener("Submit",(e)=>
{
  e.preventDefault();
  const name = (document.getElementById('Name') as HTMLInputElement).value ;
  const age = (document.getElementById('Age') as HTMLInputElement).value;
  const size = (document.getElementById('Size') as HTMLInputElement).value;
  const water = (document.getElementById('"Water') as HTMLInputElement).value;
  


const RegExp = /^[A-Za-z]{2}/
if(RegExp.test(name))
CelestialBody.push(new Planets(name,parseInt(age),parseInt(size),parseInt(water)))

});


}


addEventListener('DOMContentLoaded',handler);

