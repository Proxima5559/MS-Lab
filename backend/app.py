from flask import Flask, jsonify, make_response, redirect, request, session
from flask_cors import CORS
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from model import User, db, NavItem
from dotenv import load_dotenv
from flask_login import LoginManager, login_user, logout_user, current_user
import os   
from admin import init_admin

app = Flask(__name__)
CORS(app, 
     supports_credentials=True, 
     origins=["http://localhost:5173", "http://127.0.0.1:5173"],
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])
load_dotenv()  

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///henk_lab.db'
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-dev-key-change-me')
app.config.update(
    SESSION_COOKIE_SECURE=False, 
    REMEMBER_COOKIE_DURATION=3600 
)

app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)
# login_manager.login_view = "admin_login"

@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))

init_admin(app, db, User, NavItem)

@app.route('/api/nav', methods=['GET'])
def get_nav():
    items = NavItem.query.order_by(NavItem.id).all()
    return jsonify([i.to_dict() for i in items])

@app.route("/api/admin-login", methods=["POST"])
def admin_login():
    if request.method == "OPTIONS":
        return {}, 200

    data = request.json
    username = data.get("username")
    password = data.get("password")

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        if user.is_admin:
            login_user(user, remember=False)
            return {"ok": True}, 200
        else:
            return {"ok": False, "msg": "Not an admin"}, 403
    
    return {"ok": False, "msg": "Invalid credentials"}, 401

@app.route("/logout")
def logout():
    logout_user()
    
    session.clear()
    
    response = make_response(redirect("http://localhost:5173/auth-terminal"))

    response.set_cookie('session', '', expires=0)
    response.set_cookie('remember_token', '', expires=0)
    
    return response



with app.app_context():
    db.create_all()
    
    if NavItem.query.count() == 0:
        db.session.add_all([
            NavItem(name="Capabilities", path="/capabilities", slug="capabilities"),
            NavItem(name="Projects", path="/projects", slug="projects"),
            NavItem(name="Process", path="/process", slug="process"),
            NavItem(name="Contact", path="/contact", slug="contact"),
        ])
    
    if User.query.count() == 0:
        admin_user = User(username="admin", is_admin=True)
        admin_user.set_password("Test1234!")
        db.session.add(admin_user)
        
    db.session.commit()


if __name__ == "__main__":
    app.run(debug=True, port=5000)