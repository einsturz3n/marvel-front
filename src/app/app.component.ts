import { Component } from '@angular/core';
import { MarvelServiceService } from './services/marvel-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'marvel-test';

  public comics: Array<any> = [];
  public offset: any = '0';
  public limit: any = '100';

  constructor(private comic: MarvelServiceService) { }

  ngOnInit(): void {
    this.comic.getComics(this.offset, this.limit).subscribe((res) => {
      console.log('Respuesta', res);
      this.comics = res.data.results;
    });
  }

}
