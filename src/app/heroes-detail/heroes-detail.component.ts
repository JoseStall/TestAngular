import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { GenericService } from '../services/generic.service';



@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  heroesList: Observable<Hero[]>;

  constructor(
    private generic: GenericService<Hero>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    console.log(this.route.snapshot.params.id);
    console.log(this.route.snapshot.paramMap)
    
   this.heroesList = this.generic.getListT('heroes').pipe<Hero[]>(map(
     data => {
       return data.filter(user => {
        if (user.id == this.route.snapshot.params.id) {return true}
       })
     }))
  }
}
