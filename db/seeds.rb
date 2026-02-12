# 10.times do
#   Image.create title: FFaker::CheesyLingo.word, url: FFaker::Image.url
# end

# 5.times do
#   Folder.create title: FFaker::CheesyLingo.word,
#                 description: FFaker::Lorem.sentence
# end

user = User.create!(name: FFaker::Name.name)

5.times do
  Note.create!(
    title: FFaker::CheesyLingo.word,
    description: FFaker::Lorem.sentence,
    user: user
  )
end
