import { Routes } from '@angular/router';
import {FlexLayoutComponent} from "./Layouts/flex-layout/flex-layout.component";
import {CssSelectorComponent} from "./css-selector/css-selector.component";
import {CssPositioningComponent} from "./css-positioning/css-positioning.component";
import {CssSpecificityComponent} from "./css-specificity/css-specificity.component";
import {CssFloatComponent} from "./css-float/css-float.component";
import {FlagDrawingComponent} from "./Training/flag-drawing/flag-drawing.component";
import {CssMarginsComponent} from "./css-margins/css-margins/css-margins.component";
import {MarginInlineComponent} from "./css-margins/margin-inline/margin-inline.component";
import {FlexSizingComponent} from "./Layouts/flex-layout/flex-sizing/flex-sizing.component";
import {
  FlexLayoutPricingTableComponent
} from "./Training/flex-layout-pricing-table/flex-layout-pricing-table.component";

export const routes: Routes = [
  {path:'flexLayout',component:FlexLayoutComponent},
  {path:'cssSelector',component:CssSelectorComponent},
  {path:'cssPositioning',component:CssPositioningComponent},
  {path:'cssSpecificity',component:CssSpecificityComponent},
  {path:'cssFlag',component:FlagDrawingComponent},
  {path:'cssFloat',component:CssFloatComponent},
  {path:'css-margins',component:CssMarginsComponent},
  {path:'inlineMargin',component:MarginInlineComponent},
  {path:'flex-sizing',component:FlexSizingComponent},
  {path:'pricing_table',component:FlexLayoutPricingTableComponent}
];
