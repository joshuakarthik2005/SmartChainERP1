"""
WSGI config for Sony_main project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Sony_main.settings')

application = get_wsgi_application()
application = WhiteNoise(application)
