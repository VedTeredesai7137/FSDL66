import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';  // Import the ItemListComponent
import { FormsModule } from '@angular/forms';  // Import FormsModule to use ngModel

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent  // Declare the ItemListComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule  // Include FormsModule for two-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
