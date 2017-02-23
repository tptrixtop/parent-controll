from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^login-template', views.my_login, name='login'),
    url(r'^reg-template', views.reg, name='reg'),
    url(r'^reg-profile$', views.regProfile, name='regProfile'),
    url(r'^chk-email$', views.checkUniqEmail, name='checkUniqEmail'),
    url(r'^try-login$', views.tryLogin, name='tryLogin'),
    url(r'^dashboard-view$', views.dashboard, name='Dashboard'),
    url(r'^', views.index, name='index'),
]

