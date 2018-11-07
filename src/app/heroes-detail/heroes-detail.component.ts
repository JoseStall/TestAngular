import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { GenericService } from '../services/generic.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  heroesList: Observable<Hero[]>;
  detailBoolean: Boolean = false;
  postBoolean: Boolean = false;
  updateBoolean: Boolean = false;

  constructor(
    private generic: GenericService<Hero>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
   this.route.snapshot.params.request === undefined ? this.detailBoolean = true : this.route.snapshot.params.request === 'edit' ? this.updateBoolean = true : this.postBoolean = true;    
   this.heroesList = this.generic.getListT('heroes').pipe<Hero[]>(map(
     data => {
       return data.filter(user => {
        if (user.id == this.route.snapshot.params.id) {return true}
       })
     }))
  }

  onUpdate(hero: Hero) {
    this.generic.putT(hero, 'heroes')    
  }

  onSubmit(form: NgForm) {
    console.log(form.value['name']);
    console.log(form.value);
    const hero = new Hero;
    hero.name = form.value['name'];
    hero.addresses = [form.value['street'],form.value['city'], form.value['zip'], form.value['country']];
    this.generic.postT(hero,'heroes')
    
    

  }
}
