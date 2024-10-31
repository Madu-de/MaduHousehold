import {Component, input, model, OnInit, signal} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  placeholder =  input<string>('');
  type = model<string>('');
  isPassword = signal(false);

  ngOnInit() {
    this.isPassword.set(this.type() == 'password');
  }

  switchPasswordMode() {
    this.type.set(this.type() == 'password' ? 'text' : 'password');
  }
}
