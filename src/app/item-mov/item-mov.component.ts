import { Component, OnInit } from '@angular/core';
import { ServiceMoveService } from '../ServiceMove/service-move.service';
import { MoviesClass } from '../ServiceMove/movies-class.modal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-mov',
  templateUrl: './item-mov.component.html',
  styleUrls: ['./item-mov.component.css',
    "../../assets/css/MoviesCard.css"]
})
export class ItemMovComponent implements OnInit {
  listMovies: MoviesClass[];
  constructor(private srvMovies: ServiceMoveService, private route: Router) {

  }

  ngOnInit() {
    this.srvMovies.gatAllMovies().subscribe(allmovies => {
      this.listMovies = allmovies.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MoviesClass;
      })

    })
  }

  fillData(list: MoviesClass) {
    return list;
  }

  navi(id: string) {
    return this.route.navigate(['Casper/Video/' + id]);
  }


}
