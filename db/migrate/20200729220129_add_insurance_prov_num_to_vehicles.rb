class AddInsuranceProvNumToVehicles < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :insurance_prov_num, :string
  end
end
