import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() index!: number;
  title = 'marvel-test';

  public comics: Array<any> = [];
  public offset: any = '0';
  public limit: any = '100';

  constructor(private marvelService: MarvelServiceService, private router: Router) { }

  ngOnInit(): void {
    this.marvelService.getComics(this.offset, this.limit).subscribe((res) => {
      console.log('Respuesta', res);
      this.comics = res.data.results;
    });
  }

}
