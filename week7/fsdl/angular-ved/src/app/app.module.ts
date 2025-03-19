import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list.component';  // Import from the current directory
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel two-way binding

@NgModule({
  declarations: [
    AppComponent,  // Declare AppComponent here
    ItemListComponent  // Declare ItemListComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule  // Import FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]  // This is the main component to bootstrap
})
export class AppModule { }
