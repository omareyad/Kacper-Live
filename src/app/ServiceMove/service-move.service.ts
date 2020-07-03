import { url } from 'inspector';
import { async } from '@angular/core/testing';
import { MoviesCrudComponent } from './../admin/movies-crud/movies-crud.component';
import { MoviesClass } from './movies-class.modal';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ItemMovComponent } from '../item-mov/item-mov.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceMoveService implements OnInit {

  formdata: MoviesClass;
  single = [{
    id: '',
    descrpition: '',
    category: '',
    imgurl: "",
    src: '',
    title: ''
  }
  ];
  url;
  constructor(private firestore: AngularFirestore) {


  }
  categoryArr = [
    {
      name: 'أفلام',
      imgsrc: 'https://images.wallpaperscraft.com/image/vikings_historical_drama_travis_fimmel_ragnar_lothbrok_katheryn_winnick_lagertha_95754_1280x720.jpg',
    },
    {
      name: 'أكشن ومغامره',
      imgsrc: 'https://images.wallpaperscraft.com/image/god_of_war_kratos_sony_santa_monica_110295_1280x720.jpg'
    },
    {
      name: 'تاريخي',
      imgsrc: 'https://news.alamal-news.com/wp-content/uploads/2019/03/53720070_1606916436118699_4133913366794076160_n-7.jpg'
    },
    {
      name: 'مسلسلات',
      imgsrc: 'https://images.wallpaperscraft.com/image/series_hemlock_grove_christina_wendall_freya_tingley_96428_1024x768.jpg'
    },
    {
      name: 'كوميدي',
      imgsrc: 'https://brisbanepowerhouse.org/wp-content/uploads/2016/11/2017_BCF_WebsiteImage-3-1178x663.jpeg'
    },
    {
      name: 'البث مباشر',
      imgsrc: 'https://cdn.livestream.com/deploy/website/production/d129546/assets/livestream-ogimage.jpg'
    },



  ]

  ngOnInit() {
  }
  single2 = {

  };


  gatAllMovies() {
    return this.firestore.collection('Movies').snapshotChanges();


  }


  /*get all Movies from db as Array*/


}
