require('httparty')
require('pry')
# require('json')

p "give me a url"

url = gets.chomp
url = "http://localhost:3000/" + url
reply = HTTParty.get(url)
# reply = JSON.parse(reply)

# binding.pry

puts reply
