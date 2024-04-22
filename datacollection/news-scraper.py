#script used to scrape data from yahoo news.
#used when we considered performing sentiment analysis for our predictions.

#Author: Sean Brady

#Date created: Oct 8, 2023

import requests
import bs4
from selenium import webdriver
import time
import json

companyList = open('s&pCompanies.txt', 'r') #open file
for company in companyList:
    company = company.strip()
    print(company)
    url = 'https://finance.yahoo.com/quote/'+company+'/news?p='+company #url to see news of specific company
    
    
    # Initialize the browser
    browser = webdriver.Firefox()

    # Navigate to the URL
    browser.get(url)
    #time.sleep(10)  # Initial wait for the page to load

    # Implementing smaller scroll increments
    scroll_increment = 2500  # pixels
    for _ in range(5000):  # Adjust number of scrolls as required
        browser.execute_script(f"window.scrollBy(0, {scroll_increment});")
        time.sleep(1)  # Adjust time as required

    # Extract articles using BeautifulSoup
    soup = BeautifulSoup(browser.page_source, 'lxml')
    articles = soup.find_all('h3', class_='Mb(5px)')

    #add the articles to a file
    json_filename = f"links/{company}-links.json"
    articles_info = [] #used to store article info
    #print(f"Found {len(articles)} articles from yahoo news.")
    for article in articles:  
        a_tag = article.find('a')
        title = a_tag.text
        link = a_tag['href']
        articles_info.append({
            'title': title,
            'link': link
        })

        
    # Close the browser
    browser.quit()
    #dump file info into json file
    json_filename = f"links/{company}-links.json"
    with open(json_filename, 'w') as json_file:
        json.dump(articles_info, json_file, indent=4)

print('successfully went through all companies')
    
    
    
    