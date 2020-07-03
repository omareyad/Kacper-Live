import { MoviesClass } from './../../ServiceMove/movies-class.modal';
import { Component, OnInit } from '@angular/core';
import { ServiceMoveService } from 'src/app/ServiceMove/service-move.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-movies-crud',
  templateUrl: './movies-crud.component.html',
  styleUrls: ['./movies-crud.component.css']
})
export class MoviesCrudComponent implements OnInit {

  categoryArr = [];
  constructor(private srvMovies: ServiceMoveService, private firestore: AngularFirestore) {

    this.categoryArr = this.srvMovies.categoryArr;
  }

  listMovies: MoviesClass[];
  ngOnInit() {
    this.resetForm();
    this.srvMovies.gatAllMovies().subscribe(allmovies => {
      return this.listMovies = allmovies.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as MoviesClass;
      })

    })

  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.srvMovies.formdata = {
      id: null,
      title: '',
      descrpition: '',
      imgurl: '',
      category: '',
      src: '',

    }
  }


  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('Movies').add(data);
    else
      this.firestore.doc('Movies/' + form.value.id).update(data);
    this.resetForm(form);

  }
  onEdit(list: MoviesClass) {
    this.srvMovies.formdata = Object.assign({}, list);
  }
  onDelete(id: string) {
    this.firestore.doc('Movies/' + id).delete();
  }


}
