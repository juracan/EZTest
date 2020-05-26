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
  openNewWindow = false;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const iOSPlatform = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    const iOSUserAgent = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const iPad = navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
    if (iOSPlatform || iOSUserAgent || iPad) {
      this.openNewWindow = true;
    }

  }

  launchZoom() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.zoomUrl);
  }

  tabZoom() {
    window.open(this.zoomUrl, '_blank');
  }

  launchZoomCombined() {
    if (this.openNewWindow){
      window.open(this.zoomUrl, '_blank');
    } else {
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.zoomUrl);
    }
  }
}
