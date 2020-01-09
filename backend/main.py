from google.cloud import bigquery

from pykml import parser


def query_data(select, table, limit):
    '''
    Valid datasets:
        sainsburys_product_data
    '''
    client = bigquery.Client()
    external_id = f'hackathon-data-project.sainsburys_hackathon_dataset.{table}'

    query = f'''
    SELECT {select}
    FROM `{external_id}`
    LIMIT {limit}
    '''

    print(query)
    query_job = client.query(query)

    for row in query_job:
        print(row)


def get_json_from_kml_file(path, output):
    with open(path, 'r') as f:
        doc = parser.parse(f)

    root = doc.getroot()
    for place in root.iter('{http://www.opengis.net/kml/2.2}Placemark'):
        try:
            name, address = str(place.name).replace(',', ' '), str(place.address).replace(',', ' ')
            with open(output, 'a') as f:
                f.write(f"{', '.join([name, address])}\n")

        except AttributeError:
            pass

        
'''
React connectors:

'''

def get_products_list(food_bank_name, category=None):
    pass

if __name__ == '__main__':
    print('Starting backend module...')
    # query_data('*', 'sainsburys_product_data', 20)
    get_json_from_kml_file('data/independent_food_banks/doc.kml', 'data/independent_food_banks/food_banks.csv')