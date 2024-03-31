import subprocess
import csv

# The path to your Python script
script_path = 'ml-script.py'

# The file where company tickers are stored
companies_file = 'companies.txt'

# The CSV file we will write to
output_csv_file = 'predicted_prices.csv'

# Function to run the script and capture its output
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
    with open(companies_file, 'r') as file:
        tickers = file.read().splitlines()
    
    with open(output_csv_file, 'w', newline='') as csvfile:
        fieldnames = ['Company', 'Price']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        
        for ticker in tickers:
            price = run_script_with_ticker(ticker)
            if price is not None:
                writer.writerow({'Company': ticker, 'Price': price})
            else:
                print(f"Failed to get price for ticker {ticker}")

if __name__ == '__main__':
    main()

