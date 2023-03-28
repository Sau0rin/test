import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docSpec'
})
export class DocSpecPipe implements PipeTransform {

  transform(posts:any[],value:any){
    return posts.filter((doc:any)=>{return doc.specializations.includes(value)});
  }

}
