import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit(){
    of(2,4,6,8).subscribe(console.log);
    

    from([20,15,10,5]).subscribe(
      item => console.log(`resulting item ${item}`),
      err => console.error(`error ocurred ${err}`),
      () => console.log(`complete`)
     );

     of('Apple1', 'Apple2', 'Apple3')
     .subscribe(
       apple => console.log(`Apple was emmited ${apple}`),
       err => console.error(`Error ocurred: ${err}`),
       () => console.log(`No more appleas, go home`)
     )
  }
}
