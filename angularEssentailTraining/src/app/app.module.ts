import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.componenet';
import { mediaItemComponent } from './media/media-item.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, mediaItemComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule {}