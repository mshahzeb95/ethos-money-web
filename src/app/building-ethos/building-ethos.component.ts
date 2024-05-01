import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-building-ethos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './building-ethos.component.html',
  styleUrl: './building-ethos.component.scss',
})
export class BuildingEthosComponent {
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
}
