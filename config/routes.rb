Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :users do
      resources :vehicles do
        resources :records 
      end
    end
  end
end
