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
            <h3>Contact</h3>
            <p> I can answer any C++ or programming-like question you have with regards to the course. I will also handle any questions (or qualms) you have about submitting (including "How do I Git?") or grading. I prefer email for questions, but if you prefer another format, you can message me on IRC or set up a meeting with me. <strong>Do not wait until the night before an assignment is due to ask questions.</strong></p>
            <br />
            <br />

            <strong>Email</strong>: <a href="mailto:bjrq48@mst.edu">bjrq48@mst.edu</a><br />
            <strong>IRC</strong>: query brodes on <a href="https://webchat.freenode.net">irc.freenode.net</a>. Note that my response time will vary with how free I am.<br />
            <strong>Meeting</strong>: by request. If you need to meet with me, you can send an email to set up a time.
            Please make sure it is in an available spot below.<br />
            <br />
            <br />
            <iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=bjrq48%40mst.edu&amp;color=%23853104&amp;ctz=America%2FChicago" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            """
    elif page == 'tips':
        context['title'] = "CS5201 - Assignment Tips"
        context['content'] = \
            """
            <p>For my sanity, I have included a (non-exhaustive) list of things to watch. I highly recommend walking through this before each submission,
            as a sort of checklist. These are all great ways to retain points.</p>
            <h3>C++</h3>
            <ul>
                <li>Use S&T's brace style everywhere. The coding standard describes this.</li>
                <li>Use two spaces per level of indentation.</li>
                <li>Check if you are leaking memory frequently.</li>
                <li>Filenames for includes must match case with the file.</li>
                <li>Practice <a href="http://web.mst.edu/~nmjxv3/articles/templates.html">safe templating</a>.</li>
                <li>Name your variables things that make sense. Please do not name them after smurfs...</li>
                <li>Your code should compile with g++, even if you use clang++ or Visual Studio.</li>
                <li>I do not grade in an IDE. Make sure your code looks good when you cat your files.</li>
            </ul>

            <h3>UML</h3>
            <ul>
                <li>If you can not figure out which arrow goes where, I can not either.</li>
                <li>Your handout should be legibly sized.</li>
                <li>Parameter names are optional but encouraged.</li>
            </ul>

            <h3>Makefile</h3>
            <ul>
                <li>It is "Makefile" not "Makefile.txt", the latter is a 0.</li>
            </ul>

            <h3>Documentation</h3>
            <ul>
                <li>Make sure your grammer is well and you spell good.</li>
                <li>PREs and POSTs do not describe the function declaration.</li>
            </ul>
            """
    else:
        context['title'] = "CS5201 - Git"
        context['content'] = \
            """
            <h3>Overview</h3>
            <p>
            In SP2016, you can now opt-in to using Git instead of cssubmit for assignment submission. A repository will be created for
            you when each assignment appears, you will recieve an email when this happens. You do not need to wait for the repository in order to begin;
            use a local Git repository and simply push when your graded one is available.</p>

            <p>At the very least, before the assignment deadline, push to the repositories. Although you can push afterwards, I will arbitrarily choose when to clone all
            the repositories. The date of the last commit will be used to determine if the submission was late. <strong>Should you decide to take a late grade, you must notify me
            if it is after the deadline.</strong> The repositories will be through our internal Missouri S&T <a href="http://git.mst.edu/">GitLab server here</a>.</p>

            <p>On the first homework, I will give some slight leeway for mistakes with Git. As this is the first semester 5201 is doing this, I will, at my discretion,
            wave any easy mistakes. For example, if you did not push properly, I will email you when I notice. If you respond quickly, I will allow you to push to make up this
            mistake without a late grade. Note that your commit timestamps for a late push must still be before the deadline. This is nonrefundable and does not roll over.</p>
            <br />

            <h3>Enrollment and Incentives</h3>
            <p>Please mention during the first day of class that you are interested. There will be a sign-up sheet passed around. 
            <strong>You must have logged into GitLab previously in order for a repository to be created for you</strong>. I will be very upset
            if you sign up but do not log in first. Not as upset as you will be if you notice there is not a repository the night before submission, however.
            Should you change your mind at some point, <a href="mailto:bjrq48@mst.edu">email me</a>, and I will swap you between using Git/cssubmit</p>

            <p>If you use Git properly (see the links and lists at the bottom) I will attempt to comment on blatant errors, bad formatting, typos, etc within GitLabs. Regardless of
            how well you use it, it counts as a submission. I do, however, reserve the right to choose when commenting is worth my time--- I have a lot of assignments to grade, and not all day to debug your code. 
            Additionally, I will comment on your Git usage on your gradesheet. As a final incentive, you get to practice with Git. For those going into Software Development,
            Git is <a href="http://stackoverflow.com/research/developer-survey-2015#tech-sourcecontrol">the most popular version control system</a> and very relevant.</p>
            <br />

            <h3>Late Submissions</h3>
            <p>
            Late submissions will be cumbersome. I will not check the repositories by hand after the deadline unless you have not pushed at all. You must email me to tell me you wish to resubmit 
            if you didn't have a blank repository at the deadline. I recommend you email me either way, to be safe.
            </p>

            <h3>Warning - Not for All Ages</h3>
            <p>Using Git will not be without risks. If you do one of the things listed below (or find a new, more creative thing), then you can either make a late submission or take a zero.</p>
            
            <p>
            Here are a few ways to consider messing this up:
            <ul>
              <li>Use a nonmaster branch</li>
              <li>Never push</li>
              <li>Similarly, not pushing your latest code</li>
              <li>Use another repository</li>
              <li>Use cssubmit</li>
              <li>Push after I clone the repository (after the deadline)</li>
            </ul>
            </p>
            <p>
              Here are a few ways to not get comments on your code:
              <ul>
                <li>Commit only once</li>
                <li>Commit only twice</li>
                <li>Commit not often enough</li>
                <li>Commit with messages like "new code" or "update"</li>
              </ul>
            </p>
            <br />

            <h3><a href="https://xkcd.com/1597/">Useful Material</a></h3>
            <ul>
                <li><a href="http://www.git-tower.com/learn/git/ebook/command-line/appendix/best-practices">General Best Practices for Git</a></li>
                <li><a href="https://try.github.io/">Git Tutorial</a></li>
                <li><a href="https://git-scm.com/download/win">Official Windows Git client</a></li>
            </ul>

            """


    context = RequestContext(request, context)
    return HttpResponse(template.render(context))
