import React from 'react'
import { SearchField } from '@jsluna/form'
import { Search } from '@jsluna/icons'
import { Table } from '@jsluna/table'
const data = require('./products.json')

const ProductsRequired = () => (
  <div>
    <h1>Products Required</h1>

    <SearchField
      name="search-field-3"
      label="Search products"
      hideLabel
      placeholder="Search products"
      hasIcon
      icon={<Search />}
    />

    <Table
      rowKey="products.id"
      sortable
      data={data.products}
      columns={[
        {
          name: 'Item',
          accessor: rowData => ({ value: rowData.name }),
          hideLabel: true,
          className: 'customCol',
        },
        {
          name: 'Quantity',
          accessor: rowData => ({
            value: rowData.quantity,
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

export default ProductsRequired
