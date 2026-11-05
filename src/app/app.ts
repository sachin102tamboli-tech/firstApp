import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected flag = signal(true)
  protected readonly title = signal('I Love .Net');
  protected isFormValid = signal(false)  
  protected skills = ['Angular', 'JavaScript', 'HTML', 'CSS', '.NET']
  skill(){
    this.title.set('I Love JavaScript')
  }

  ngOnInit() : void {
    setTimeout(() => {
      this.isFormValid.set(true)
    }, 4000)
  }
}
