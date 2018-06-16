import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BreakablePipe } from './pipes/breakable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/dateformat';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { DurationPipe } from './pipes/duration';
import { EllipsizePipe } from './pipes/ellipsize';
import { FromUnixTimePipe } from './pipes/fromunixtime';
import { HTMLifyPipe } from './pipes/htmlify';
import { HydratedDirective } from './directives/hydrated';
import { HydratorDirective } from './directives/hydrator';
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { NumeralPipe } from './pipes/numeral';
import { ResizedDirective } from './directives/resized';
import { RouterModule } from '@angular/router';
import { RxfSubmitDirective } from './directives/rxf-submit';
import { TimeAgoPipe } from './pipes/timeago';
import { UTCFormatPipe } from './pipes/utcformat';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  AnimatedRouterOutletComponent,
  DrawerContainerComponent,
  DrawerPanelComponent,
  MarkdownComponent
];

const DIRECTIVES = [
  HydratedDirective,
  HydratorDirective,
  ResizedDirective,
  RxfSubmitDirective
];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  RouterModule
];

const PIPES = [
  BreakablePipe,
  DateFormatPipe,
  DurationPipe,
  EllipsizePipe,
  FromUnixTimePipe,
  HTMLifyPipe,
  MarkdownPipe,
  NumeralPipe,
  TimeAgoPipe,
  UTCFormatPipe
];

const SERVICES = [ ];

@NgModule({

  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],

  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],

  imports: [
    ...MODULES,
  ]

})

export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
