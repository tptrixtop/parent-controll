from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db import IntegrityError

from .forms import RegProfileForm

# Create your views here.
def index(request):
    return render(request, 'index.html', {})


def login(request):

    if not request.user.is_authenticated:
        return render(request, 'login.html', {})
    else:
        redirect('/users/')

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

    resp['status'] = 1
    resp['msg'] = "Data is not valid"

    return JsonResponse(resp, safe=False)

