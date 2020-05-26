import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  zoomUrl = 'https://zoom.us/j/99469935741?pwd=c2R2R01NQmNMcU5OeW1mOUpuempYZz09';
  urlSafe: SafeResourceUrl;
  output1 = '';
  output2 = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    alert('iOS = ' + iOS);
    this.output1 = 'Platform:' + navigator.platform;

    iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    alert('iOS = ' + iOS);
    this.output2 = 'Platform:' + navigator.userAgent + '<br/> MSStream' + window.MSStream;

    if (navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
      alert('IPAD');
    }

  }

  launchZoom() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.zoomUrl);
  }

  tabZoom() {
    window.open(this.zoomUrl, '_blank');
  }

}
