require('httparty')
require('pry')
require('json')
# require('json')
execute = 0
while execute === 0
  def game
  puts "Give me the ip address you wish to connect to."

  url = gets.chomp
  url = "http://localhost:3000/" + url
  reply = HTTParty.get(url)

  puts reply
end

  puts "Which celbrity might this be?"


  # binding.pry
  url_ans = gets.chomp
  url_w_ans = "http://localhost:3000/" + url_ans
  reply = HTTParty.get(url_w_ans)



  if reply["correct"] == true
    puts reply["correct"]
    execute = 100
  else
    puts reply["incorrect"]
    print "Would you like to take another guess, or move onto another server?"
    print "'again' to try again , 'move' to move on."
    try_again = gets.chomp
    while try_again != "again" || try_again != "move"
      if try_again == "again"
        puts "Which celbrity might this be?"
        # reply = JSON.parse(reply)

        # binding.pry
        url_ans = gets.chomp
        url_w_ans = "http://localhost:3000/" + url_ans
        reply = HTTParty.get(url_w_ans)
      end
    end
  end

end
