import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*App import*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './Master/header/header.component';
import { BodyComponent } from './Master/body/body.component';
import { FooterComponent } from './Master/footer/footer.component';
import { MoviesCrudComponent } from './admin/movies-crud/movies-crud.component';
import { ServiceMoveService } from './ServiceMove/service-move.service';
import { FormsModule } from '@angular/forms';
import { ItemMovComponent } from './item-mov/item-mov.component';
import { SingleMovComponent } from './single-mov/single-mov.component';
import { NavComponent } from './Master/nav/nav.component';
import { SeriesComponent } from './Category/series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MoviesCrudComponent,
    ItemMovComponent,
    SingleMovComponent,
    NavComponent,
    SeriesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ServiceMoveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
