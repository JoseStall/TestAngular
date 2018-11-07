import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, Address } from '../hero';
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
    const hero = new Hero;
    const address = new Address;
    address.city = form.value['city'];
    address.street = form.value['street'];
    address.zip = form.value['zip'];
    address.state = form.value['country']
    hero.name = form.value['name'];
    hero.addresses = new Array(address)
    this.generic.postT(hero,'heroes')
    
    

  }
}
