import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapiPipe implements PipeTransform {
    transform(value: string, args:boolean = true): string {
        value = value.toLowerCase();

        let nombre = value.split(" ");

        if(args){
            for(let i in nombre){
                nombre[i] = nombre[i][0].toUpperCase() + nombre[i].substr(1);
            }
        }else{
            nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substr(1);
        }

        

        return nombre.join(" ");
        
    }
}