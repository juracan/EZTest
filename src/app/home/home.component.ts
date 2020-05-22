import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  zoomUrl = 'https://zoom.us/j/98209763691?pwd=VG80TFpWK05zYzQxdnhIbHh4UEdqQT09';
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  launchZoom() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.zoomUrl);
  }

}
