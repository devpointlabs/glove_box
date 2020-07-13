1.times do 
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

1.times do 
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
1.times do
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
