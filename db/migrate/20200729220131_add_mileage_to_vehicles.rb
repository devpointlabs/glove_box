class AddMileageToVehicles < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :mileage, :integer
  end
end
