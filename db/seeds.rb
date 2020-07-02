#   create_table "users", force: :cascade do |t|
#     t.string "provider", default: "email", null: false
#     t.string "uid", default: "", null: false
#     t.string "encrypted_password", default: "", null: false
#     t.string "reset_password_token"
#     t.datetime "reset_password_sent_at"
#     t.boolean "allow_password_change", default: false
#     t.datetime "remember_created_at"
#     t.string "confirmation_token"
#     t.datetime "confirmed_at"
#     t.datetime "confirmation_sent_at"
#     t.string "unconfirmed_email"
#     t.string "name"
#     t.string "nickname"
#     t.string "image"
#     t.string "email"
#     t.json "tokens"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.string "username"
#     t.integer "sign_in_count", default: 0
#     t.datetime "current_sign_in_at"
#     t.datetime "last_sign_in_at"
#     t.string "current_sign_in_ip"
#     t.string "last_sign_in_ip"
#     t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
#     t.index ["email"], name: "index_users_on_email", unique: true
#     t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
#     t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
#   end

5.times do 
    User.create(
    name: Faker::Name.name,
    nickname: Faker::Name.first_name ,
    image: Faker::Avatar.image,
    email:Faker::Internet.email ,
    username: Faker::Ancient.god,
    password: '123123123'
    )
end

insurance = ['State Farm', 'Geico', 'Nationwide', 'Farmers', 'Progressive', 'All-state', 'Nationwide']

10.times do 
    Vehicle.create(
        make: Faker::Vehicle.make,
        model: Faker::Vehicle.model,
        year: Faker::Vehicle.year,
        color: Faker::Vehicle.color,
        # type: Faker::Vehicle.car_type,
        vin: Faker::Vehicle.vin,
        roadside_assistance: false,
        insured_by: insurance.sample,
        policy_number: Faker::Vehicle.singapore_license_plate,
        image: Faker::Avatar.image,
        user_id: rand(6)
    )
end  

category = %w(regular maintenence, upgrades, accident)
tasks = %w(oil change, bumper damage, engine replacement, breaks, new battery, new windshield)
20.times do
    Record.create(
    date: Faker::Date.between(from: '2014-09-23', to: '2020-09-25'),
    maintenance_task: tasks.sample,
    mileage: Faker::Vehicle.mileage(min: 50_000),
    image: '',
    category: category.sample,
    reciepts: '',
    vehicle_id: rand(11)
    )
end 

puts 'seeded'