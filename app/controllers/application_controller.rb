class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
before_action :configure_permitted_parameters, if: :devise_controller?

wrap_parameters format: [:json] if respond_to?(:wrap_parameters)

protected
def configure_permitted_parameters
        added_attrs = [:username, :email, :password, :password_confirmation, :fname, :lname, :registration]
        devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
        devise_parameter_sanitizer.permit :account_update, keys: added_attrs
end
end
