import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socials: string[] = ['facebook', 'twitter', 'youtube', 'instagram', 'telegram', 'pinterest']

  constructor() { }

  ngOnInit() {
  }

}
