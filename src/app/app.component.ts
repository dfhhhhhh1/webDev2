// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent {
//   title = 'inventory-app';


//   addProduct() {
//     // Logic to add a product
//     console.log('Adding product');
//     // You might navigate to a new component or open a modal dialog here
//   }
// }








 

// import { Component } from '@angular/core';
// import { HeaderComponent } from './components/header/header.component'; // Adjust path as necessary

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     HeaderComponent // Import HeaderComponent if it's used in your template
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
// })
// export class AppComponent {
//   title = 'inventory-app';

//   addProduct() {
//     // Logic to add a product
//     console.log('Adding product');
//     // You might navigate to a new component or open a modal dialog here
//   }
// }



// best so far 

// import { Component } from '@angular/core';
// import { HeaderComponent } from './components/header/header.component'; // Adjust path as necessary
// import { RouterModule } from '@angular/router'; // Import RouterModule

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     HeaderComponent, // Import HeaderComponent if it's used in your template
//     RouterModule     // Import RouterModule to use router-outlet
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'inventory-app';

//   addProduct() {
//     console.log('Adding product');
//   }
// }


// import { Component } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router'; // Include Routes
// import { HeaderComponent } from './components/header/header.component';
// import { Body1Component } from './components/body1/body1.component'; // Ensure name and path are correct
// import { Body2Component } from './components/body2/body2.component'; // Ensure name and path are correct

// // Define the routes within the component since it's standalone
// const routes: Routes = [
//   { path: 'body1', component: Body1Component },
//   { path: 'body2', component: Body2Component },
//   { path: '', redirectTo: '/body1', pathMatch: 'full' } // Redirect to '/body1' by default
// ];

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     HeaderComponent,
//     Body1Component,
//     Body2Component,
//     RouterModule.forRoot(routes) // Setup routing here
//   ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'inventory-app';

//   addProduct() {
//     console.log('Adding product');
//   }
// }


import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Body1Component } from './components/body1/body1.component';
import { Body2Component } from './components/body2/body2.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    Body1Component,
    Body2Component,
    RouterModule // Import RouterModule without configuration
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';
}



