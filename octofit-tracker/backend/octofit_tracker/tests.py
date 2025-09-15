from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class OctofitTrackerModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        self.spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        self.batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        Activity.objects.create(user=self.spiderman, type='Running', duration=30)
        Workout.objects.create(name='Cardio Blast', description='High intensity cardio workout')
        Leaderboard.objects.create(team=marvel, points=100)

    def test_user_creation(self):
        self.assertEqual(User.objects.count(), 2)

    def test_team_creation(self):
        self.assertEqual(Team.objects.count(), 2)

    def test_activity_creation(self):
        self.assertEqual(Activity.objects.count(), 1)

    def test_workout_creation(self):
        self.assertEqual(Workout.objects.count(), 1)

    def test_leaderboard_creation(self):
        self.assertEqual(Leaderboard.objects.count(), 1)
