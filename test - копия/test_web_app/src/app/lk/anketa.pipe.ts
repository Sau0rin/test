import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anketa'
})
export class AnketaPipe implements PipeTransform {

  transform(posts: any[], value: any) {
    return posts.filter((post: any) =>{return post.userName.includes(value)})
  }

}
