import React from 'react';
import styled from 'styled-components';
import {StyledFilterHeader} from 'components/common/styled-components';
import PanelHeaderAction from 'components/side-panel/panel-header-action';
import {Trash} from 'components/common/icons';

const StyledChildrenContainer = styled.div`
  display: flex;
  flex: 2;
`;

FilterPanelHeaderFactory.deps = [];

function FilterPanelHeaderFactory() {
  const FilterPanelHeader = ({
    children,
    datasets,
    allAvailableFields,
    setFilter,
    idx,
    filter,
    removeFilter
  }) => (
    <StyledFilterHeader
      className="filter-panel__header"
      labelRCGColorValues={datasets.map(d => d.color)}
    >
      <StyledChildrenContainer>
        {children}
      </StyledChildrenContainer>
      <PanelHeaderAction
        id={filter.id}
        tooltip="delete"
        tooltipType="error"
        onClick={removeFilter}
        hoverColor={'errorColor'}
        IconComponent={Trash}
      />
    </StyledFilterHeader>
  );

  return FilterPanelHeader;
}

export default FilterPanelHeaderFactory;
