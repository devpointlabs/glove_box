class AddLicensePlateToVehicles < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :license_plate, :string
  end
end
