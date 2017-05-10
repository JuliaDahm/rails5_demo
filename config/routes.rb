Rails.application.routes.draw do
  get 'demo/index'

  mount ActionCable.server =>  "/cable"
end
