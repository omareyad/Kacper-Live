import { logging } from 'protractor';
import { MoviesClass } from './../ServiceMove/movies-class.modal';
import { ItemMovComponent } from './../item-mov/item-mov.component';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { ServiceMoveService } from '../ServiceMove/service-move.service';
import { take, retry, map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
import { stringify } from 'querystring';
import { url } from 'inspector';

@Component({
  selector: 'app-single-mov',
  templateUrl: './single-mov.component.html',
  styleUrls: ['./single-mov.component.css']
})
export class SingleMovComponent implements OnInit {

  id;
  oneItem;

  constructor(private firestore: AngularFirestore, private routeActive: ActivatedRoute, private srv: ServiceMoveService, private hostElement: ElementRef) {


    this.id = this.routeActive.snapshot.paramMap.get('id');

    if (this.id) {
      this.firestore.collection('Movies').doc(this.id).ref.get().then(function (doc) {
        srv.single2 = (doc.data());

        srv.single[0] = doc.data() as MoviesClass;

        console.log('single', srv.single[0].src);
        const iframe = document.querySelector('iframe');
        iframe.src = srv.single[0].src;

        // let dos = document.querySelector('.srcmp4 ').setAttribute('src', srv.single[0].src);


      })

    }
    if (this.id) {
      this.firestore.collection('Movies').doc(this.id).collection('Series').doc(this.id).ref.get().then(function (doc) {
        console.log(doc.data());

      })

    }


  }


  ngOnInit() {


    /*
        this.getmov().subscribe(movv => {
          this.oneItem = movv.payload.data();
          this.srv.single2 = this.oneItem[0];
         // document.getElementById('mp4_src').setAttribute('src', "");
    
        })
    */
    /*this.getSeries().subscribe(all => {
      console.log(all.length);
      let i = 0;
      for (i = 0; i < all.length; i++) {
        console.log('all', all[i].payload.doc.data());
      }
    })*/


  }



  public getmov() {
    return this.firestore.collection('Movies').doc(this.id).snapshotChanges();
  }
  /*getSeries() {
    return this.firestore.collection('Movies').doc(this.id).collection('All').snapshotChanges();
  }
*/

  changeSrc(x, event) {


    let src_x = document.querySelector('.my-video');
    src_x.setAttribute('src', x);
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 40); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);

  }




}
