import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  constructor() { }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().map((tab) => tab.active = false)
    tab.active = true
  }

}
