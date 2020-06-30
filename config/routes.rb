Rails.application.routes.draw do
  
  devise_for :users 

  namespace :api do
    resources :users do
      resources :vehicles do
           resources :reports
         end
      end
    end
end

# random note so i can push again
# random notes so i can push 