Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  devise_for :users

  namespace :api do
    resources :users do
      resources :vehicles do
        resources :records 
      end
    end
  end
end
