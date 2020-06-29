class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.datetime :date
      t.string :maintenance_task
      t.integer :mileage
      t.string :image
      t.string :category
      t.string :reciepts
      t.belongs_to :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
