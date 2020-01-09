# Python backend
Connects our UIs, ML and data modules

## SQL queries used to generate tables

### food_banks_x_products
One row for every combination of item and food_bank, used to track the quantity of
items requested by each food bank.

```sql
SELECT
    name AS item_name,
    description AS food_bank_name,
    postcode AS food_bank_postcode,
    subCategoryName as category

FROM `team-21-262414.FoodBank.sainsprod`, `team-21-262414.FoodBank.food_banks`  
WHERE businessUnitName IN ('BU GROCERY', 'BU FRESH FOOD')
LIMIT 10000
```