require('httparty')
require('pry')
require('json')
# require('json')


def celeb_game


    def game
      puts "Give me the ip address you wish to connect to."
      url = gets.chomp
      reply = HTTParty.get(url)
      puts reply
      return url
    end

    url = game()



    def game_two url
      # binding.pry
      puts "Which celebrity might this be?"
      url_ans = gets.chomp
      url_w_ans = url + url_ans
      reply = HTTParty.get(url_w_ans)
      p url_w_ans

      if reply["correct"]
        puts reply["correct"]
        execute = 100
      else
        puts reply["incorrect"]
        puts "Do you wish to quit, type 'y' for yes, 'n' for no."
        quit = gets.chomp
        while quit != "y" && quit != "n"
          puts "Do you wish to quit, type 'y' for yes, 'n' for no."
          quit = gets.chomp
        end
        if quit == "y"
          exit
        end
        print "Would you like to take another guess, or move onto another server?"
        print "'again' to try again , 'move' to move on."
        try_again = gets.chomp
        while try_again != "again" && try_again != "move"
          print "'again' to try again , 'move' to move on."
          try_again = gets.chomp
        end

        if try_again == "again" || try_again == "move"
          if try_again == "move"
            celeb_game()
          else
            game_two(url)
          end

        else
          print "Would you like to take another guess, or move onto another server?"
          print "'again' to try again , 'move' to move on."
        end
      end
    end
      game_two(url)

end
celeb_game()
