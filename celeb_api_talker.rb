require('httparty')
require('pry')

p "give me a url"

url = gets.chomp

HTTParty.get(url)
