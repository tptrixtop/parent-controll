from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError
from django.contrib.auth import authenticate, login

from .forms import *

def index(request):
    if request.is_ajax():
        return render(request, 'redirect-to-login.html', {})
    else:
        return render(request, 'index.html', {})


def my_login(request):

    if not request.user.is_authenticated:
        return render(request, 'login.html', {})
    else:
        return render(request, 'already-login.html', {})

def reg(request):
    return render(request, 'reg.html', {})

def regProfile(request):

    resp = {}
    resp['status'] = 0
    resp['msg'] = ""
    resp['data'] = {}

    form = RegProfileForm(request.POST)

    if form.is_valid():

        try:
            user = User.objects.create_user(form.cleaned_data['email'], form.cleaned_data['email'], form.cleaned_data['password'])
            user.save()
        except IntegrityError:
            resp['status'] = 2
            resp['msg'] = "User already exists"
        except:
            resp['status'] = 1
            resp['msg'] = "Unexcepted error"

        return JsonResponse(resp, safe=False)

    resp['status'] = 1;
    resp['msg'] = "Data is not valid"

    return JsonResponse(resp, safe=False)

def checkUniqEmail(request):
    resp = {}
    resp['status'] = 0
    resp['msg'] = ""
    resp['data'] = {}

    form = CheckEmailForm(request.GET)

    if form.is_valid():
        try:
            user = User.objects.get(email=form.cleaned_data['email']);
            resp['status'] = 0;
            resp['msg'] = "User with this email already exists"
        except Exception, e:
            resp['status'] = 1
            resp['msg'] = str(e)
    else:
        resp['status'] = 2
        resp['msg'] = "Email is not valid"

    return JsonResponse(resp, safe=False)

def tryLogin(request):

    resp = {}
    resp['status'] = 0
    resp['msg'] = ""
    resp['data'] = {}

    form = LoginForm(request.POST)
    if form.is_valid():

        user = authenticate(username=form.cleaned_data['email'], password=form.cleaned_data['password'])
        
        if user is not None:
            login(request, user)
            resp['status'] = 0
            resp['msg'] = "Login OK"
            resp['data'] = []
        else:
            resp['status'] = 1
            resp['msg'] = "Login/password not found"
            resp['data'] = []            

    else:
        resp['status'] = 2
        resp['msg'] = "Your data is not valid"

    return JsonResponse(resp, safe=False)

@login_required
def dashboard(request):
    return render(request, 'dashboard.html', {})

