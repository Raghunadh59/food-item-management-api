from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# List and Create Recipes (GET, POST)
class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Retrieve, Update, and Delete Recipe by ID (GET, PUT, PATCH, DELETE)
class RecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
