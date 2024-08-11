from django.http import JsonResponse
import json

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .models import User, Emotion
    
@csrf_exempt
def save_emotion(request):
    if not request.user.is_authenticated:
        return JsonResponse({"success": False, "message": "User not authenticated"}, status=403)
    
    if request.method == "POST":
        data = json.loads(request.body)
        emotion = data.get('emotion')
        description = data.get('description')

        new_emotion = Emotion(emotion=emotion, description=description, user=request.user)
        new_emotion.save()

        return JsonResponse({"success": True, "message": "Successfully saved a new emotion"})
    pass

@csrf_exempt
def get_user_calendar(request, user_id):
    if request.method == 'GET':        
        user = User.objects.get(pk=user_id)
        emotions = user.emotions.all()

        user_emotions = [
            {
                'id': emotion.id,
                'timestamp': emotion.timestamp,
                'emotion': emotion.emotion,
                'description': emotion.description
            }
            for emotion in emotions
        ]

        return JsonResponse({
            "calendar_info": user_emotions
        })
    pass
    
@csrf_exempt    
def get_user_id(request):
    if request.method == 'GET':
        user = request.user
        return JsonResponse({
            "user_id": user.id
        })
    pass

def api_view(request):
    return JsonResponse({'message': 'React + Django'})

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        # Attempt to sign user in
        email = data.get('email')
        password = data.get('password')
        user = authenticate(request, username=email, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return JsonResponse({'success': True, 'message': 'Successfully logged in!'})
        else:
            return JsonResponse({
                "message": "Invalid email and/or password."
            })
    # else:
    #     return render(request, "mail/login.html")


def logout_view(request):
    logout(request)
    return JsonResponse({
        "message": "Successfully logged out!"
    })
    # return HttpResponseRedirect(reverse("index"))

@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        email = data.get('email')

        # Ensure password matches confirmation
        password = data.get('password')
        confirmation = data.get('confirmation')
        if password != confirmation:
            return JsonResponse({
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(email, email, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return JsonResponse({
                "message": "Email address already taken."
            })
        login(request, user)
        return JsonResponse({
            "message": "Succesfully registered."
        })
    # else:
    #     return render(request, "mail/register.html")