from django.test import TestCase
import json

# Create your tests here.
class HomepageDataTest(TestCase):

  def test_get_message(self):
    response = self.client.get('/api/homepage/')
    print(json.loads(response.content)['message'])