import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@shared-component/dialog/dialog.component'
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  newsList: any[] = [];
  photoGridList: any[] = [];
  constructor(private homeService: HomeService, private route: Router, public dialog: MatDialog) {}

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

  openPhotoDialog(index: number) {
    const imgUrl = this.photoGridList[index].img;    
    this.dialog.open(DialogComponent, {
      data: {
        action: 'photo-dialog',
        imgUrl: imgUrl,
      },
    });
  }

  openNewsDialog(index: number) {
    const news = this.newsList[index];
    
    this.dialog.open(DialogComponent, {
      data: {
        action: 'news-dialog',
        ...news
      },
    });
  }
}
