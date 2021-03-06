import { AnimatedRouterOutletComponent } from './components/animated-router-outlet';
import { BreakablePipe } from './pipes/breakable';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './pipes/dateformat';
import { DebouncePipe } from './pipes/debounce';
import { DrawerContainerComponent } from './components/drawer-container';
import { DrawerPanelComponent } from './components/drawer-panel';
import { DurationPipe } from './pipes/duration';
import { EllipsizePipe } from './pipes/ellipsize';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FromUnixTimePipe } from './pipes/fromunixtime';
import { HTMLifyPipe } from './pipes/htmlify';
import { HydratedDirective } from './directives/hydrated';
import { HydratorDirective } from './directives/hydrator';
import { LinkifyPipe } from './pipes/linkify';
import { MarkdownComponent } from './components/markdown';
import { MarkdownPipe } from './pipes/markdown';
import { NgModule } from '@angular/core';
import { NumeralPipe } from './pipes/numeral';
import { ResizedDirective } from './directives/resized';
import { RouterModule } from '@angular/router';
import { RxfDisabledDirective } from './directives/rxf-disabled';
import { RxfRequiredDirective } from './directives/rxf-required';
import { RxfSubmitDirective } from './directives/rxf-submit';
import { ScrollContainerComponent } from './components/scroll-container';
import { TimeAgoPipe } from './pipes/timeago';
import { UTCFormatPipe } from './pipes/utcformat';

/**
 * el-lib module definition
 */

const COMPONENTS = [
  AnimatedRouterOutletComponent,
  DrawerContainerComponent,
  DrawerPanelComponent,
  MarkdownComponent,
  ScrollContainerComponent
];

const DIRECTIVES = [
  HydratedDirective,
  HydratorDirective,
  ResizedDirective,
  RxfDisabledDirective,
  RxfRequiredDirective,
  RxfSubmitDirective
];

const MODULES = [
  CommonModule,
  FontAwesomeModule,
  RouterModule
];

const PIPES = [
  BreakablePipe,
  DateFormatPipe,
  DebouncePipe,
  DurationPipe,
  EllipsizePipe,
  FromUnixTimePipe,
  HTMLifyPipe,
  LinkifyPipe,
  MarkdownPipe,
  NumeralPipe,
  TimeAgoPipe,
  UTCFormatPipe
];

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

export class LibModule { }
