#Requests Variation
import requests
from bs4 import BeautifulSoup

# Get the HTML of the WallStreetBets subreddit homepage
response = requests.get('https://www.reddit.com/r/wallstreetbets/top')

# Create a BeautifulSoup object from the HTML
soup = BeautifulSoup(response.content, 'html.parser')

# Find all the post titles
titles = soup.find_all('h3', class_='title')

# Create a list to store the titles of the posts
titles_list = []
print(soup)
# Loop through the post titles and add them to the list
for title in titles:
   
    titles_list.append(title.text)

# Print the titles of the posts
for title in titles_list:
    print(title)