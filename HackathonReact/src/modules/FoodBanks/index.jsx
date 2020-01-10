import React from 'react'
import { SearchField } from '@jsluna/form'
import { Search } from '@jsluna/icons'
import { Button } from '@jsluna/button'
// import FoodBanksTable from './table'

const FoodBanks = () => (
  <div>
    <h1>FoodBanks</h1>
    {/* <FoodBanksTable /> */}
    <SearchField
      name="search-field-1"
      label="Search Food Banks"
      hideLabel
      placeholder="Search Food Banks"
      hasAction
      action={
        <Button>
          <span className="ln-u-visually-hidden">Search Food Banks</span>
          <Search />
        </Button>
      }
    />
  </div>
)

export default FoodBanks
