import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  newsList: any[] = [];
  photoGridList: any[] = [];
  constructor(private homeService: HomeService, private route: Router) {}

  ngOnInit(): void {
    this.homeService
      .getNewsList()
      .then((result) => (this.newsList = result.reverse()))
      .catch((err) => console.log(err));

    this.homeService.getPhotoList()
    .then((list) => this.photoGridList = list)
    .catch(err => console.log(err));
  }

  onShowMorePhotoClicked() {
    this.route.navigate(['/phote-album']);
  }
}
