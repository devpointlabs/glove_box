class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.integer :year
      t.string :color
      t.string :type
      t.string :vin
      t.boolean :roadside_assistance
      t.string :insured_by
      t.string :policy_number
      t.string :image
      t.belongs_to :user

      t.timestamps
    end
  end
end
