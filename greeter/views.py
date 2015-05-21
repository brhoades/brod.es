from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

import glob

# Create your views here.
def index(request):
    template = loader.get_template('greeter/index.html')
    context = {'jobs': []}
    
    jobs = glob.glob('static/jobs/*')
    jobs.reverse() # python globs in ascending
    for file in jobs:
        f = open(file, 'r')
        context['jobs'].append(f.read())

    context = RequestContext(request, context)
    return HttpResponse(template.render(context))
