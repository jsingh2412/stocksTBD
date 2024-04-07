import subprocess
import csv
from pymongo import MongoClient


script_path = 'ml-script.py'

companies_file = 'companies.txt'

output_csv_file = 'predicted_prices.csv'

client = MongoClient('mongodb+srv://jsingh:ZTUyAYAcRYgzSI6h@cluster0.cq1i8gs.mongodb.net/stock')
db = client['stock']
collection = db['results']


def run_script_with_ticker(ticker):
    try:
        # Running the Python script with the ticker as a command line argument
        result = subprocess.run(['python3', script_path, ticker], capture_output=True, text=True)
        # Parsing the output to extract the price
        price = eval(result.stdout.strip())
        return price[0]
    except Exception as e:
        print(f"Error running script for ticker {ticker}: {e}")
        return None


def main():
    data=[]

    with open(companies_file, 'r') as file:
        tickers = file.read().splitlines()

    with open(output_csv_file, 'w', newline='') as csvfile:
        fieldnames = ['Company', 'Price']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

        writer.writeheader()

        for ticker in tickers:
            price = run_script_with_ticker(ticker)
            if price is not None:
                #Company = ticker
                #collection.update_one({'Company':Company},{'$set': {'Price': price}}, upsert=True)
                document = {'Company': ticker, 'Price': price[0]}
                collection.update_one({'Company': ticker}, {'$set': document}, upsert=True)
                data.append(document)
                #writer.writerow({'Company': ticker, 'Price': price})
            else:
                print(f"Failed to get price for ticker {ticker}")
    #with open('predicted_prices.csv', 'r') as file:
     #   reader = csv.DictReader(file)
      #  for row in reader:
       #     data.append(row)
    #collection.insert_many(data)
if __name__ == '__main__':
    main()

