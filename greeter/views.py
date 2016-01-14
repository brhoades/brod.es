from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

import glob

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

def cpp(request, page):
    template = loader.get_template('greeter/class.html')
    context = {'content': page}

    if page == '':
        context['title'] = "CS5201"
        context['content'] = \
            """
            Office: TBA<br />
            Office hours: TBD<br />
            <br />
            Email: <a href="mailto:bjrq48@mst.edu">bjrq48@mst.edu</a><br />
            <iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23C85A17&amp;src=bjrq48%40mst.edu&amp;ctz=America%2FChicago" style="border-width:0" width="600" height="600" frameborder="0" scrolling="no"></iframe>
            """
    elif page == 'avoid':
        context['title'] = "CS5201 - Things to Avoid"
        context['content'] = \
            """
            Avoid this!
            """

    context = RequestContext(request, context)
    return HttpResponse(template.render(context))
