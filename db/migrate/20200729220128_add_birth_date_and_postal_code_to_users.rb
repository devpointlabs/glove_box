class AddBirthDateAndPostalCodeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :birth_date, :string
    add_column :users, :postal_code, :integer
  end
end
