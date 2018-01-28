from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),

    # /users/1/
    url(r'^(?P<user_id>[0-9]+)$', views.detail, name='detail'),
]