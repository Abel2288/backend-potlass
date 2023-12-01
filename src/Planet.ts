
import { CelestialBody } from "./CelestialBody";

export class Planets implements CelestialBody
{
    waterContent : number;

constructor(public name:string ,public age:number ,public size:number, waterContent:number )
{
this.name = name;
this.age=age;
this.size = size;
this.waterContent = waterContent

}
}
