import { Component } from '@angular/core';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-angular-navigations/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'breadcrumb';
  
  public openURLInNewPage(args: BreadcrumbBeforeItemRenderEventArgs): void {

    if(args.element.children[0]){
      (args.element.children[0] as HTMLAnchorElement).target = "_blank"
    }

  }
}
