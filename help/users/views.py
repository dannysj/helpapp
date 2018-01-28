from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Users

# Create your views here.
def index(request):
    all_users = Users.objects.all()
    html = ''
    for user in all_users:
        url = '/users/' + str(user.id)
        html += '<a href="' + url + '">' + user.name + '</a><br>'
        return HttpResponse(html)

def detail(request, user_id):
    return HttpResponse("<h2>Details for user id: " + str(user_id) + "</h2>")