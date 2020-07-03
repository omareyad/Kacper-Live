import { Component, OnInit } from '@angular/core';
import { ServiceMoveService } from 'src/app/ServiceMove/service-move.service';
import { MoviesClass } from 'src/app/ServiceMove/movies-class.modal';
import { FilterPipe } from 'src/filter.pipe';
import { from } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private srvMovies: ServiceMoveService) {

  }
  listMovies: MoviesClass[];
  ngOnInit() {


    this.srvMovies.gatAllMovies().subscribe(allmovies => {
      return this.listMovies = allmovies.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MoviesClass;
      })

    })
  }
  



}
