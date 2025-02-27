// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import TimeRangeSliderFactory from './common/time-range-slider';

// Components
export {default as KeplerGl, default, injectComponents} from './container';

// factories
export {default as KeplerGlFactory} from './kepler-gl';
export {default as SidePanelFactory, PanelTitleFactory} from './side-panel';
export {default as MapContainerFactory} from './map-container';
export {default as BottomWidgetFactory} from './bottom-widget';
export {default as ModalContainerFactory} from './modal-container';
export {default as PlotContainerFactory} from './plot-container';

// // side panel factories
export {
  default as PanelHeaderFactory,
  SaveExportDropdownFactory,
  ExportImageFactory,
  ExportDataFactory,
  ExportConfigFactory,
  ExportMapFactory,
  SaveMapFactory
} from './side-panel/panel-header'
export {CollapseButtonFactory, default as SidebarFactory} from './side-panel/side-bar';
export {default as PanelToggleFactory} from './side-panel/panel-toggle';

export {AddDataButtonFactory, default as LayerManagerFactory} from './side-panel/layer-manager';
export {default as LayerPanelFactory} from './side-panel/layer-panel/layer-panel';
export {default as LayerConfiguratorFactory} from './side-panel/layer-panel/layer-configurator';

export {default as DatasetSquare} from './common/styled-components';
export {default as SourceDataCatalogFactory} from './side-panel/common/source-data-catalog';
export {default as SourceDataSelectorFactory} from './side-panel/common/source-data-selector';
export {default as DatasetTitleFactory} from './side-panel/common/dataset-title';
export {default as DatasetInfoFactory} from './side-panel/common/dataset-info';
export {default as DatasetTagFactory} from './side-panel/common/dataset-tag';

export {default as FilterManagerFactory} from './side-panel/filter-manager';
export {default as FilterPanelFactory} from './side-panel/filter-panel/filter-panel';

export {default as InteractionManagerFactory} from './side-panel/interaction-manager';
export {default as BrushConfigFactory} from './side-panel/interaction-panel/brush-config';
export {default as TooltipConfigFactory} from './side-panel/interaction-panel/tooltip-config';

export {default as MapManagerFactory} from './side-panel/map-manager';
export {default as LayerGroupSelectorFactory} from './side-panel/map-style-panel/map-layer-selector';
export {default as MapStyleSelectorFactory} from './side-panel/map-style-panel/map-style-selector';

// // map container factories
export {default as MapPopoverFactory} from './map/map-popover';
export {default as MapControlFactory} from './map/map-control';
export {default as LayerHoverInfoFactory} from './map/layer-hover-info';
export {default as CoordinateInfoFactory} from './map/coordinate-info';

// // modal container factories
export {default as DeleteDatasetModalFactory} from './modals/delete-data-modal';
export {default as DataTableModalFactory} from './modals/data-table-modal';
export {default as LoadDataModalFactory} from './modals/load-data-modal';
export {default as ExportImageModalFactory} from './modals/export-image-modal';
export {default as ExportDataModalFactory} from './modals/export-data-modal';
export {default as AddMapStyleModalFactory} from './modals/add-map-style-modal';

// // common factory
export {default as AnimationControlFactory} from './common/animation-control/animation-control';
export {default as SpeedControlFactory} from './common/animation-control/speed-control';
export {default as AnimationPlaybacksFactory} from './common/animation-control/playback-controls';
export {default as FloatingTimeDisplayFactory} from './common/animation-control/floating-time-display';

// // Filters
export {default as TimeWidgetFactory} from './filters/time-widget';
export {default as SingleSelectFilterFactory} from './filters/single-select-filter';
export {default as MultiSelectFilterFactory} from './filters/multi-select-filter';
export {default as TimeRangeFilterFactory} from './filters/time-range-filter';

export {default as RangeFilterFactory} from './filters/range-filter';

// Injector
export {
  injector as injector,
  withState as withState
} from './injector'

// Common Components
export {default as FileUpload} from './common/file-uploader/file-upload';
export {default as ItemSelector} from './common/item-selector/item-selector';
export {default as FieldSelector} from './common/field-selector';
export {default as RangeSlider} from './common/range-slider';
export {default as Modal, ModalFooter, ModalTitle} from './common/modal';
export {default as AppLogo} from './common/logo';
export {default as Switch} from './common/switch';
export {default as LoadingSpinner} from './common/loading-spinner';
export * from './common/styled-components';
export * as Icons from './common/icons';

export const TimeRangeSlider = TimeRangeSliderFactory();
export {TimeRangeSliderFactory};
