import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {ButtonType} from './button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  appButtonClick: OutputEmitterRef<Event> = output();
  appButtonType: InputSignal<ButtonType> = input(<ButtonType>'primary');
}

