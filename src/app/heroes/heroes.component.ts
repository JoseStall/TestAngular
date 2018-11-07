import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { GenericService } from '../services/generic.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroesList: Observable<Hero[]>;

  constructor(private generic: GenericService<Hero>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.heroesList = this.generic.getListT('heroes')
  }
}


