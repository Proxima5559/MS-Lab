from flask_admin import Admin
from flask_admin.menu import MenuLink
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user
from flask import redirect, url_for

admin = Admin(name="Henk Lab Admin")

class SecureModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and getattr(current_user, 'is_admin', False)

    def inaccessible_callback(self, name, **kwargs):
        return redirect("http://localhost:5173/auth-terminal")

def init_admin(app, db, User, NavItem):
    if not admin.app:
        admin.init_app(app)

    admin._views = []
    
    admin.add_view(SecureModelView(NavItem, db.session))
    admin.add_view(SecureModelView(User, db.session))
    admin.add_link(MenuLink(name='Logout', category='', url='/logout'))
    return admin