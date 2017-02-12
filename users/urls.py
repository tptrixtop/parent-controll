from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^login-template', views.login, name='login'),
    url(r'^reg-template', views.reg, name='reg'),
    url(r'^reg-profile$', views.regProfile, name='regProfile'),
    url(r'^', views.index, name='index'),
]

