import { Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  @Input()
  username!: string

  @Input()
  userImageSource!: string

  constructor() { }

  ngOnInit(): void {
  }
}
