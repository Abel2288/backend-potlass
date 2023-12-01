import { CelestialBody } from "./CelestialBody";
import { Planets } from "./Planet";

function handler()
{

const CelestialBody:CelestialBody[] = [];
const form = document.getElementById('planetForm')!.addEventListener("submit",(e)=>
{
  e.preventDefault()
  const name = (document.getElementById('name')as HTMLInputElement).value;
  const age = (document.getElementById('age')as HTMLInputElement).value;
  const size = (document.getElementById('size')as HTMLInputElement).value;
  const water = (document.getElementById('water') as HTMLInputElement).value;
  


const RegExp = /^[A-Za-z]{2}/

CelestialBody.push(new Planets(name,parseInt(age),parseInt(size),parseInt(water)))
if (!RegExp.test(name)) {
  console.log('Hibás név');
} else {
  console.log('Sikeres név');
}
if(parseInt(age)<0)
{
console.log("Csak pozitív szám lehet")
}
else
{
  console.log("")
}
if(parseInt(size)<=1500)
{
console.log("Minimum 1500 méter atmérőnek kell lennie")
}


});
console.log(CelestialBody)

}


addEventListener('DOMContentLoaded',handler);

