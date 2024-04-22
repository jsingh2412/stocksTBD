#script to run ml-script.py for every company in companies.txt and write the results to predicted_prices.csv

#Author: Sean Brady
#Date Created: Mar 30, 2024

import subprocess
import csv
from pymongo import MongoClient #added by vaibhav

# script path
script_path = 'ml-script.py'

# The file where company tickers are stored
companies_file = 'companies.txt'

# The CSV file we will write to
output_csv_file = 'predicted_prices.csv'


# Function to run the script and capture output
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

# Main process
def main():
    client = MongoClient('mongodb://localhost:3000/') #added by vaibhav
    db = client['stock']
    if client:
        print("Connected to MongoDB successfully!")
    else:
        print("Failed to connect to MongoDB.")
    
    with open(companies_file, 'r') as file: #read companies from company file
        tickers = file.read().splitlines()
    
    with open(output_csv_file, 'w', newline='') as csvfile: #set up writer to write to csv file
        fieldnames = ['Company', 'Price']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        
        for ticker in tickers: #for every company
            price = run_script_with_ticker(ticker) #run the script
            if price is not None:
                writer.writerow({'Company': ticker, 'Price': price}) #write to csv file if the price was found
            else:
                print(f"Failed to get price for ticker {ticker}")

if __name__ == '__main__':
    main()

