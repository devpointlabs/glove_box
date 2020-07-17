class Api::VehiclesController < ApplicationController
    before_action :set_vehicle, only: [:show]

    def index
        render json: current_user.vehicles
    end 

    def show 
        render json: @vehicle
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
        params.require(:vehicle).permit(:make, :model, :year, :color, :type, :vin, :roadside_assistance, :insured_by, :policy_number, :image, :policy_number, :policy_exp, :insurance_prov_num, :mileage, :license_plate)
    end 

    def set_vehicle
        @vehicle = current_user.Vehicle.find(params[:vehicle_id])
        # @vehicle = Vehicle.find(params[:id])
    end 
end
