import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  mainImageUrl = '/image/image 4.jpeg';
  image4Url = '/image/image 4.jpeg';
  image5Url = '/image/image 5.jpeg';
  image8Url = '/image/images 8.jpeg';
  image11Url = '/image/images 11.jpeg';

  changeMainImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
