import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useEffect } from 'react';

import DataTable from './DataTable';
import type { SortBy } from './DataTable/Header';

const meta = {
  title: 'Elements/DataTable',
  tags: ['autodocs'],
  component: DataTable,
} satisfies Meta<typeof DataTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DataTable>
      <DataTable.Header>
        <DataTable.Row>
          <DataTable.HeaderCell>col1</DataTable.HeaderCell>
          <DataTable.HeaderCell>col2</DataTable.HeaderCell>
          <DataTable.HeaderCell>col3</DataTable.HeaderCell>
        </DataTable.Row>
      </DataTable.Header>
      <DataTable.Body>
        <DataTable.Row>
          <DataTable.DataCell>row1-col1</DataTable.DataCell>
          <DataTable.DataCell>row1-col2</DataTable.DataCell>
          <DataTable.DataCell>row1-col3</DataTable.DataCell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.DataCell>row2-col1</DataTable.DataCell>
          <DataTable.DataCell>row2-col2</DataTable.DataCell>
          <DataTable.DataCell>row2-col3</DataTable.DataCell>
        </DataTable.Row>
      </DataTable.Body>
    </DataTable>
  ),
};

export const Sortable: Story = {
  render: () => {
    const [sortBy, setSortBy] = useState<SortBy>({ field: 'COL1', direction: 'ASC' });

    const handleSortByChange = (newSortBy: SortBy) => {
      setSortBy(newSortBy);
    };

    return (
      <DataTable>
        <DataTable.Header
          sortBy={sortBy}
          onSortByChange={handleSortByChange}
        >
          <DataTable.Row>
            <DataTable.HeaderCell sortField="COL1" initialSortDirection="ASC">col1</DataTable.HeaderCell>
            <DataTable.HeaderCell sortField="COL2" initialSortDirection="DESC">col2</DataTable.HeaderCell>
            <DataTable.HeaderCell sortField="COL3" initialSortDirection="ASC">col3</DataTable.HeaderCell>
            <DataTable.HeaderCell>col4</DataTable.HeaderCell>
          </DataTable.Row>
        </DataTable.Header>
        <DataTable.Body>
          <DataTable.Row>
            <DataTable.DataCell>row1-col1</DataTable.DataCell>
            <DataTable.DataCell>row1-col2</DataTable.DataCell>
            <DataTable.DataCell>row1-col3</DataTable.DataCell>
            <DataTable.DataCell>row1-col4</DataTable.DataCell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.DataCell>row2-col1</DataTable.DataCell>
            <DataTable.DataCell>row2-col2</DataTable.DataCell>
            <DataTable.DataCell>row2-col3</DataTable.DataCell>
            <DataTable.DataCell>row2-col4</DataTable.DataCell>
          </DataTable.Row>
        </DataTable.Body>
      </DataTable>
    );
  },
};

export const Dynamic: Story = {
  render: () => {
    const rand = () => Math.random().toString();

    const randData = () => ([
      [rand(), rand()],
      [rand(), rand()],
    ]);

    const [data, setData] = useState(randData());

    useEffect(() => {
      setTimeout(() => {
        setData(randData());
      }, 2000);
    });

    return (
      <DataTable>
        <DataTable.Body>
          {data.map((val, i) => (
            <>
              {/* eslint-disable-next-line react/no-array-index-key */}
              <DataTable.Row key={i}>
                <DataTable.DataCell>{val[0]}</DataTable.DataCell>
                <DataTable.DataCell>{val[1]}</DataTable.DataCell>
              </DataTable.Row>
            </>
          ))}
        </DataTable.Body>
      </DataTable>
    );
  },
};
