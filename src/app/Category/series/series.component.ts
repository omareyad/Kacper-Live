import { Component, OnInit } from '@angular/core';
import { ServiceMoveService } from 'src/app/ServiceMove/service-move.service';
import { MoviesClass } from 'src/app/ServiceMove/movies-class.modal';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  listMovies: MoviesClass[];

  constructor(private srv: ServiceMoveService) {
    console.log(this.listMovies);

  }


  ngOnInit() {

    this.srv.gatAllMovies().subscribe(allmovies => {
      this.listMovies = allmovies.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MoviesClass;
      })

    });

  }



}
