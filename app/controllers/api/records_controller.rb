class Api::RecordsController < ApplicationController
    before action :set_vehicle
    before_action :set_record, only: [:update, :destroy]


    def index
        render json: @vehicle.records
    end

    def create
        record = @vehicle.records.new(record_params)
        
        file = params[:file]
        if file
            begin
              ext = File.extname(file.tempfile)
              cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
              record.image = cloud_image['secure_url']
            rescue => e
              render json: { errors: e }, status: 422
              return
            end
          end
        end


        if record.save
            render json: record
        else
            render json: {errors: record.errors, status: 422}
        end 
    end 

    def update
        if @record.update(record_params)
            render json: @record
        else 
            render json: {errors: @record.errors, status: 422}
        end 
    end 

    def destroy
        render json: @record.destroy
    end 

    private

    def record_params
        params.require(:record).permit(:date, :maintenance_task, :mileage, :image, :category, :reciepts)
    end 

    def set_vehicle
        @vehicle = current_user.Vehicle.find(params[:vehicle_id])
    end 

    def set_record
        @record = @vehicle.records.find(params[:id])
    end 
end
