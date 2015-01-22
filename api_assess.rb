require 'sinatra'
require 'pry'



get '/:lat/:lng' do
  lat = (params[:lat])
  lng = (params[:lng])
  coord = {"lat" => lat ,"lng"=> lng}
  erb(:index , locals:{coordinates: coord})
end
