class Api::VehiclesController < ApplicationController
    before_action :set_vehicle, only: [:show, :update, :destroy]

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

        @vehicle.assign_attributes(vehicle_edit_params)
        file = params[:filepond]
        if file
            begin
                ext = File.extname(file.tempfile)
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
                @vehicle.image = cloud_image['secure_url']
            rescue => e
                debugger
                render json: { errors: e }, status: 422
                return
            end
        end
        if @vehicle.save()
            render json: @vehicle
        else
            debugger
            render json: {errors: @vehicle.errors, status: 422}
        end 
    end 

    def destroy
        render json: @vehicle.destroy
    end 


    private

    def vehicle_params
        params.require(:vehicle).permit(:make, :model, :year, :color, :type, :vin, :roadside_assistance, :insured_by, :policy_number, :image, :policy_exp, :insurance_prov_num, :mileage, :license_plate)
    end 

    def set_vehicle
        @vehicle = Vehicle.find(params[:id])
    end 

    def vehicle_edit_params
        params.permit(:make, :model, :year, :color, :type, :vin, :roadside_assistance, :insured_by, :policy_number, :image, :policy_exp, :insurance_prov_num, :mileage, :license_plate)
    end 
end
