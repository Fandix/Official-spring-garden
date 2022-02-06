import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  newsList: any[] = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService
      .getNewsList()
      .then((result) => (this.newsList = result.reverse()))
      .catch((err) => console.log(err));
  }
}
