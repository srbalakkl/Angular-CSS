import {Routes} from '@angular/router';
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
import {GridLayoutComponent} from "./Layouts/grid-layout/grid-layout.component";
import {GridSizingComponent} from "./Layouts/grid-layout/grid-sizing/grid-sizing.component";
import {GridSizingTrainingComponent} from "./Training/grid-sizing-training/grid-sizing-training.component";
import {GridPlacementTrainingComponent} from "./Training/grid-placement-training/grid-placement-training.component";
import {GridColumnPlacementComponent} from "./Training/grid-column-placement/grid-column-placement.component";
import {GridCellPlacementComponent} from "./Training/grid-cell-placement/grid-cell-placement.component";
import {GridOverlapingTrainingComponent} from "./Training/grid-overlaping-training/grid-overlaping-training.component";
import {IntrinsicSizingComponent} from "./intrinsic-sizing/intrinsic-sizing.component";
import {MinMaxClampSizingComponent} from "./intrinsic-sizing/min-max-clamp-sizing/min-max-clamp-sizing.component";
import {MediaQueriesComponent} from "./media-queries/media-queries.component";
import {ContainerQueriesComponent} from "./container-queries/container-queries.component";

export const routes: Routes = [
  {path: 'flexLayout', component: FlexLayoutComponent},
  {path: 'cssSelector', component: CssSelectorComponent},
  {path: 'cssPositioning', component: CssPositioningComponent},
  {path: 'cssSpecificity', component: CssSpecificityComponent},
  {path: 'cssFlag', component: FlagDrawingComponent},
  {path: 'cssFloat', component: CssFloatComponent},
  {path: 'css-margins', component: CssMarginsComponent},
  {path: 'inlineMargin', component: MarginInlineComponent},
  {path: 'flex-sizing', component: FlexSizingComponent},
  {path: 'pricing_table', component: FlexLayoutPricingTableComponent},
  {path: 'grid-layout', component: GridLayoutComponent},
  {path: 'grid-sizing', component: GridSizingComponent},
  {path: 'gridSizingExample', component: GridSizingTrainingComponent},
  {path: 'gridPlacement', component: GridPlacementTrainingComponent},
  {path: 'gridColumnPlacement', component: GridColumnPlacementComponent},
  {path: 'gridCellPlacement', component: GridCellPlacementComponent},
  {path: 'gridOverlapping', component: GridOverlapingTrainingComponent},
  {path: 'cssIntrinsicSizing', component: IntrinsicSizingComponent},
  {path: 'IntrinsicMinMaxClamp', component: MinMaxClampSizingComponent},
  {path: 'mediaQueries', component: MediaQueriesComponent},
  {path: 'containerQueries', component: ContainerQueriesComponent},
];
