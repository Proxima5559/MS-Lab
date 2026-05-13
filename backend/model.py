from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class NavItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)  
    path = db.Column(db.String(200), nullable=False)  
    slug = db.Column(db.String(100))                   
    category = db.Column(db.String(50), nullable=False, index=True)
    
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "path": self.path,
            "slug": self.slug,
            "category": self.category
        }

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    is_admin = db.Column(db.Boolean, default=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)