import { Component } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent {

  @Input()
  userImageSource!: string

  @Input()
  username!: string

  constructor() { }

  ngOnInit(): void {
  }

}
