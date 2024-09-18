from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def homepage_data(request):
    return Response({"message": "Welcome to the Homepage"})

@api_view(['GET'])
def portfolio_data(request):
    return Response({
        "projects": [
            {"name": "Project 1", "description": "Description of project 1"},
            {"name": "Project 2", "description": "Description of project 2"}
        ]
    })
