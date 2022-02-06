import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getNewsList() {
    return Promise.resolve([
      { id: 0, img: '../../../assets/img/news/news-01.jpeg', date: '2020/6/1', content: '春園多肉設計坊 (慶生會)幾個知己好友一起慶祝,真的好開心.' },
      { id: 1, img: '../../../assets/img/news/news-02.jpeg', date: '2020/6/1', content: '春園多肉設計坊 ~ 園長人都好好喔!像回到自己家一樣' },
      { id: 2, img: '../../../assets/img/news/news-03.jpeg', date: '2020/6/8', content: '春園多肉設計坊 不只可以買多肉.賞多肉.還可以預約餐點,每一樣都超好吃.' },
      { id: 3, img: '../../../assets/img/news/news-04.jpeg', date: '2020/6/29', content: '左手香膏製作方法，請兩位小帥哥示範一下,需要耐心和細心,非常適合親子一起玩喔!' },
      { id: 4, img: '../../../assets/img/news/news-05.jpeg', date: '2020/6/29', content: '在春園一起看夕陽吧!' },
      { id: 5, img: '../../../assets/img/news/news-06.jpeg', date: '2021/5/17', content: '因為新冠肺炎疫情影響、所以暫停開放入園服務、等疫情穩定在通知開園時間、謝謝' },
    ])
  }
}
