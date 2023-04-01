import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-requent-client',
  templateUrl: './generate-requent-client.component.html',
  styleUrls: ['./generate-requent-client.component.css']
})
export class GenerateRequentClientComponent {
  public visible = true;

  public show(): void {
    this.visible = true;
  }

  public hide(): void {
    this.visible = false;
  }
}
