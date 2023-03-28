import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: any[], value: any) {
    return posts.filter((post: any) =>{return post.city.includes(value)})
   
}

}
