class AddPolicyExpToVehicles < ActiveRecord::Migration[6.0]
  def change
    add_column :vehicles, :policy_exp, :string
  end
end
