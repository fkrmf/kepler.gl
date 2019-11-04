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

import React from 'react';
import {StyledFilterContent} from 'components/common/styled-components';
import SourceDataSelectorFactory from 'components/side-panel/common/source-data-selector';
import EmptyFilterPanelFactory from 'components/filters/filter-panels/empty-filter-panel';
import TimeRangeFilterFactory from 'components/filters/time-range-filter';

TimeRangeFilterPanelFactory.deps = [
  SourceDataSelectorFactory,
  EmptyFilterPanelFactory,
  TimeRangeFilterFactory
];

function TimeRangeFilterPanelFactory(
  SourceDataSelector,
  EmptyFilterPanel,
  TimeRangeFilter
) {
  const TimeRangeFilterPanel = React.memo(({
    idx,
    datasets,
    filter,
    isAnyFilterAnimating,
    enlargeFilter,
    setFilter,
    toggleAnimation
  }) => (
    <StyledFilterContent className="filter-panel__content">
      <EmptyFilterPanel
        datasets={datasets}
        filter={filter}
        setFilter={setFilter}
      />
      {filter.type && !filter.enlarged && (
        <div className="filter-panel__filter">
          <TimeRangeFilter
            filter={filter}
            idx={idx}
            isAnyFilterAnimating={isAnyFilterAnimating}
            toggleAnimation={toggleAnimation}
            setFilter={setFilter}
          />
        </div>
      )}
    </StyledFilterContent>
  ));

  TimeRangeFilterPanel.displayName = 'TimeRangeFilterPanel';

  return TimeRangeFilterPanel;
}

export default TimeRangeFilterPanelFactory;
