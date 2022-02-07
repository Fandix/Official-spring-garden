import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  frontPageLayout: any[] = [
    { cols: 2, rows: 3, img: "https://scontent.ftpe4-1.fna.fbcdn.net/v/t39.30808-6/272769418_477797507270212_8692923677795669222_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_ohc=U93RarWrur4AX-8rv7C&tn=CejasMduou-WVszK&_nc_ht=scontent.ftpe4-1.fna&oh=00_AT-pzuWbBBtc0auaAx9HVTMvLXxoKnBm5YwGiCxQm5vAhw&oe=6206BE6A" },
    { cols: 1, rows: 2, img: 'https://www.colorhexa.com/88b06a.png' },
    { cols: 1, rows: 1, img: 'https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/142427105_243741407342491_6961508646434162639_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=a26aad&_nc_ohc=p2Ld_u0CBsAAX8gbOML&_nc_ht=scontent.ftpe4-1.fna&oh=00_AT_XfZU83mzwQ7x1S7td_y9pbNfNLVdaH0JdCYoCxZf5-w&oe=6227AD6B' },
    { cols: 1, rows: 1, img: 'https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/122665398_190244976025468_5101507419703200180_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=J5vNYkzU6wYAX8_-y01&_nc_ht=scontent.ftpe4-1.fna&oh=00_AT896xQ20R62vR661rk4Qjlqxg9rGmXpe91hG30TAiUO3Q&oe=622503ED' },
    { cols: 1, rows: 1, img: 'https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/126936039_199838998399399_933730028153400397_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=a26aad&_nc_ohc=cWWkKsvL_MAAX_jJQmV&tn=CejasMduou-WVszK&_nc_ht=scontent.ftpe4-1.fna&oh=00_AT9cE-dRCLfYd-4oMqA4vdHUZY020x3J7K7PxQT7nzyFDQ&oe=622813C0' },
    { cols: 1, rows: 1, img: 'https://www.colorhexa.com/88b06a.png' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
