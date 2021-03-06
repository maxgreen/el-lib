import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { DrawerPanelComponent } from './drawer-panel';

/**
 * lib-drawer-container
 *
 * Used to hold lib-drawer-panels
 */

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'lib-drawer-container',
  styles: [`
    :host {
      display: block;
      height: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
    }

    .drawer-mask {
      background-color: rgba(128, 128, 128, 0.5);
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .drawer-mask.masked {
      opacity: 1;
      z-index: 99;
    }
  `],
  template: `
    <ng-content></ng-content>

    <div
      (click)="closeAll()"
      [ngClass]="{'masked': masked}"
      class="drawer-mask">
    </div>`
})

export class DrawerContainerComponent {

  drawers = {
    left: [] as DrawerPanelComponent[],
    right: [] as DrawerPanelComponent[],
    top: [] as DrawerPanelComponent[],
    bottom: [] as DrawerPanelComponent[],
    center: [] as DrawerPanelComponent[]
  };

  masked: boolean;

  /** Close all the drawers */
  closeAll(): void {
    Object.keys(this.drawers).forEach(position => {
      this.drawers[position].forEach(drawer => drawer.close());
    });
  }

  /** A drawer has been closed */
  closed(drawer: DrawerPanelComponent): void {
    this.masked = false;
  }

  /** A drawer has been opened */
  opened(drawer: DrawerPanelComponent): void {
    this.masked = true;
  }

  /** Register a drawer */
  register(drawer: DrawerPanelComponent): DrawerPanelComponent[] {
    const drawers = this.unregister(drawer);
    drawers.push(drawer);
    return drawers;
  }

  /** De-register a drawer */
  unregister(drawer: DrawerPanelComponent): DrawerPanelComponent[] {
    const drawers = this.drawers[drawer.position];
    const ix = drawers.indexOf(drawer);
    if (ix !== -1)
      drawers.splice(ix, 1);
    return drawers;
  }

}
