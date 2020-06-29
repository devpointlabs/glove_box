class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string :Make
      t.string :Model
      t.integer :Year
      t.string :Color
      t.string :Type
      t.string :VIN
      t.boolean :Roadside_Assistance
      t.string :Insured_by
      t.string :Policy_Number
      t.string :Image
      t.Belongs_To :User

      t.timestamps
    end
  end
end
