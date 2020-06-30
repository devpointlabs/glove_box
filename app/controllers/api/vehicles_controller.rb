class Api::VehiclesController < ApplicationController
    
    def index
        render json: current_user.vehicles
    end 

    def create
        vehicle = current_user.vehicles.new(vehicle_params)
        if vehicle.save
            render json: vehicle
        else
            render json: {errors: vehicle, status: 422}
        end 
    end 

    def update
        if @vehicle.update
            render json: @vehicle
        else
            render json: {errors: @vehicle.errors, status: 422}
        end 
    end 

    def destroy
        render json: @vehicle.destroy
    end 


    private

    def vehicle_params
        params.require(:vehicle).permit(:make, :model, :year, :color, :type, :vin, :roadside, :insured_by, :policy_number, :image)
    end 

    def set_vehicle
        @vehicle = current_user.Vehicle.find(params[:vehicle_id])
    end 
end
