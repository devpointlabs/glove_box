Rails.application.routes.draw do
  

  namespace :api do
    resources :users do 
      resources :vehicles do
        resources :records
      end
    end
  end
end
