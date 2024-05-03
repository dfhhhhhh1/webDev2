// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
// }



import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routerLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],  // Import RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
