import React from 'react';
import {StyledFilterHeader} from 'components/common/styled-components';
import PanelHeaderAction from 'components/side-panel/panel-header-action';
import FieldSelector from 'components/common/field-selector';
import {Trash, Clock} from 'components/common/icons';
import {FILTER_TYPES} from 'utils/filter-utils';

FilterPanelHeaderFactory.deps = [];

function FilterPanelHeaderFactory() {
  const FilterPanelHeader = ({
    dataset,
    allAvailableFields,
    setFilter,
    idx,
    filter,
    removeFilter,
    enlargeFilter,
    enlarged
  }) => (
    <StyledFilterHeader
      className="filter-panel__header"
      labelRCGColorValues={dataset.color}
    >
      <FieldSelector
        inputTheme="secondary"
        fields={allAvailableFields}
        value={Array.isArray(filter.name) ? filter.name[0] : filter.name}
        erasable={false}
        onSelect={setFilter}
      />
      <PanelHeaderAction
        id={filter.id}
        tooltip="delete"
        tooltipType="error"
        onClick={removeFilter}
        hoverColor={'errorColor'}
        IconComponent={Trash}
      />
      {filter.type === FILTER_TYPES.timeRange && (
        <PanelHeaderAction
          id={filter.id}
          onClick={enlargeFilter}
          tooltip="Time Playback"
          IconComponent={Clock}
          active={enlarged}
        />
      )}
    </StyledFilterHeader>
  );

  return FilterPanelHeader;
}

export default FilterPanelHeaderFactory;
