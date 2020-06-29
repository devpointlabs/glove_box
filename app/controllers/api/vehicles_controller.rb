class Api::VehiclesController < ApplicationController
    
    def index
        render json: current_user.vehicles
    end 

    def create
    end 

    def update
    end 

    def destroy
    end 


    private

    def vehicle_params
        params.require(:vehicle).permit(:make, :model, :year, :color, :type, :vin, :roadside, :insured_by, :policy_number, :image)
    end 

    def set_vehicle
        @vehicle = current_user.Vehicle.find(params[:vehicle_id])
    end 
end
