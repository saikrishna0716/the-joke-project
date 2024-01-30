import csv
import random
from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

# Function to read jokes from CSV
def read_jokes_from_csv():
    jokes = []
    with open('jokes.csv', 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            jokes.append(row)
    return jokes

# Function to get a random joke for the day
def get_random_joke():
    all_jokes = read_jokes_from_csv()
    return random.choice(all_jokes)

@app.route('/')
def index():
    # Get a random joke for the day
    joke_of_the_day = get_random_joke()
    return render_template('index.html', joke_of_the_day=joke_of_the_day)

@app.route('/search/<keyword>')
def search(keyword):
    all_jokes = read_jokes_from_csv()
    matching_jokes = [joke for joke in all_jokes if keyword.lower() in joke['joke_description'].lower()]
    return render_template('search.html', keyword=keyword, matching_jokes=matching_jokes)

@app.route('/all_jokes')
def all_jokes():
    all_jokes = read_jokes_from_csv()
    return render_template('all_jokes.html', all_jokes=all_jokes)

@app.route('/joke/<int:joke_id>')
def individual_joke(joke_id):
    all_jokes = read_jokes_from_csv()
    joke = all_jokes[joke_id]
    return render_template('individual_joke.html', joke=joke)

if __name__ == '__main__':
    app.run(debug=True)
