import {Component, output, OutputEmitterRef} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  appButtonClick: OutputEmitterRef<Event> = output();
}

