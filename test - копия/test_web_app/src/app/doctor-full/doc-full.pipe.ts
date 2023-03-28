import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'docFull'
})
export class DocFullPipe implements PipeTransform {

  transform(posts: any[], value: any) {
    return posts.filter((doc: any) =>{return doc.fio.includes(value)})
  }

}
