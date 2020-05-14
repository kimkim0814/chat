class Group < ApplicationRecord
  has_many :group_users
  hasmany :users, through: :group_users
  validates :name, presence: true, uniqueness: true
end
