Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check
  namespace :api do
    resources :images, only: [ :update ]
  end

  resources :folders

  resources :notes

  root "images#index"
end
