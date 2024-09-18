from django.urls import path
from . import views

urlpatterns = [
    path('homepage/', views.homepage_data),
    path('portfolio/', views.portfolio_data),
]
