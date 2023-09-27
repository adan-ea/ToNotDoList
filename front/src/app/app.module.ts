import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { DeletedListComponent } from './components/deleted-list/deleted-list.component';
import { NewListComponent } from './components/new-list/new-list.component';

@NgModule({
    declarations: [AppComponent, MainListComponent, DeletedListComponent, NewListComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
