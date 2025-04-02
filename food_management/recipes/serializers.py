from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    # Custom validation for prep_time and cook_time (must be positive)
    def validate_prep_time(self, value):
        if value <= 0:
            raise serializers.ValidationError("Preparation time must be greater than 0 minutes.")
        return value

    def validate_cook_time(self, value):
        if value <= 0:
            raise serializers.ValidationError("Cooking time must be greater than 0 minutes.")
        return value

    class Meta:
        model = Recipe
        fields = '__all__'
