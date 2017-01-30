from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):

    return HttpResponse("loggedsad")


def login(request):

    if not request.user.is_authenticated:
        return render(request, 'index.html', {})
    else:
        redirect('/users/')

def reg(request):
    return HttpResponse("reg page")

