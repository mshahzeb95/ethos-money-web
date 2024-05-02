import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-building-ethos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './building-ethos.component.html',
  styleUrl: './building-ethos.component.scss',
})
export class BuildingEthosComponent {
  imageUrl1: string = '../../assets/building-ethos-image-1.png';
  imageUrl2: string = '../../assets/building-ethos-image-2.png';

  dynamicHeading: string = 'Building Ethos';
  dynamicDescription: string =
    'We’re transparent about our process. Read about our product road map';

  roadmapPhases: { title: string; description: string }[] = [
    {
      title: 'Mobilisation',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Phase 1',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      title: 'Phase 2',
      description: 'Lorem ipsum dolor sit amet consectetur.',
    },
    { title: 'Launch', description: 'Lorem ipsum dolor sit amet consectetur.' },
  ];

  contents: { text: string; additionalText: string; imageUrl?: string }[] = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
      imageUrl: '../../assets/building-ethos-image-1.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
      imageUrl: '../../assets/building-ethos-image-2.png',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
      additionalText:
        'Lorem ipsum dolor sit amet consectetur. Id vitae phasellus in nam arcu eget fames a enim. Ut tortor luctus mauris sed. Vitae justo tellus ipsum consectetur venenatis consectetur nunc velit. Leo a pellentesque volutpat ante.',
    },
  ];
}
