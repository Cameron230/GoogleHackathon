import React from 'react'
import { Table } from '@jsluna/table'
// import { foodbank as data } from './TestData.json'
const data = require('./TestData.json')

const FoodBanksTable = () => (
  <div>
    <Table
      rowKey="foodbank.id"
      responsive
      sortable
      data={data.foodbank}
      columns={[
        {
          name: 'Name',
          accessor: rowData => ({ value: rowData.name }),
          hideLabel: true,
          className: 'customCol',
        },
        {
          name: 'Location',
          accessor: rowData => ({
            value: rowData.location,
          }),
          sort: (accessor, ascending) => (a, b) => {
            const valueA = parseInt(accessor(a).value, 10)
            const valueB = parseInt(accessor(b).value, 10)

            if (valueA < valueB) {
              return ascending ? -1 : 1
            }
            if (valueA > valueB) {
              return ascending ? 1 : -1
            }
            return 0
          },
          className: {
            th: 'customHead',
          },
          render: ({ value }) => <span>{value}</span>,
        },
      ]}
    />
  </div>
)

export default FoodBanksTable
