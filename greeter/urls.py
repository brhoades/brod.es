from django.conf.urls import patterns, url, include
from greeter import views

urlpatterns = patterns('',
    url(r'^$', views.index),
    url(r'^5201$', views.cpp)
)
