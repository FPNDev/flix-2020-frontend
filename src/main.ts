import { 
  Component, 
  group
} from "fe-lwn";
import { Router } from "./module/router";
import { routes } from './routes';

@Component({
  selector: 'app-main',
  template: './app.html',
  styles: ['./app.scss']
})
class AppComponent {
  router: Router = Router.get();

  constructor() {
    this.router.registerRoutes(routes);
  }
}
