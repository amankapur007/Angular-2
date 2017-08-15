import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.componenet';
import { mediaItemComponent } from './media/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component'

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, mediaItemComponent, MediaItemListComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule {}