from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

import glob

# Create your views here.
def index(request):
    template = loader.get_template('greeter/index.html')
    context = {'jobs': [], 'projects': [], 'about': ''}

    f = open('static/greeter/about.textile', 'r')
    context['about'] = f.read()
    f.close()
    
    jobs = sorted(glob.glob('static/greeter/jobs/*'), reverse=True)
    for file in jobs:
        f = open(file, 'r')
        context['jobs'].append(f.read())

    projects = sorted(glob.glob('static/greeter/projects/*'), reverse=False)
    for file in projects:
        f = open(file, 'r')
        context['projects'].append(f.read())

    context = RequestContext(request, context)
    return HttpResponse(template.render(context))
