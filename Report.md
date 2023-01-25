
# AE1 
# COM 619 DEVOPS

# Group Members names
1. Nastaran Sharifi Sadr
1. Michal Ostenda
1. Cristian Anton Frincu

# The link to the GitHub repository 
## https://github.com/ToniAnton22/Recipe_App.git
In the Github repository there are six branches for this project.
1. The main Branch
1. NasiChanges
1. TonisChanges 
1. MichaelChanges
1. nastaransharifisadr-patch-1
1. submittedchanges

The last two of them haven't been used.
![](./Report%20Images/1.png)
![](./Report%20Images/2.png)

# Link to deploy version of Application 

# Introduction
The result of this collaboration project is building a recipe application using React and Nex.js. In this application the Mongo DB database has been used. To managing and integrating the project GitHub been used. In this web-based application the user can:
In the website the user able to :
1. Search for all Recipes
1. Login 
1. registration 
1. Logout  
1. Adding new Recipes
1. Adding comments under each recipe 
1. Like each recipe

# Project Management 
At the first step the template of UI created. We decided to separate the project to 3 parts.
1. The home page and Search for all recipes: Nastaran 
1. Registration and login/logout: Toni 
1. adding new Recipes and adding comments and like: Michal

We used projects part of GitHub to assign each task to each person in the group. We also created a group in teams to share all images and any meetings.  

![](./Report%20Images/3.png)

Also, we created a WhatsApp group to ask our urgent questions there and communicate with each other regarding the project. Having weekly development meetings, we improved the communication between us in the group.

The most important part of developing a project is version control. We used GitHub to monitor all changes and finding any problem after merging our code. As soon as we had any problem, we made a NEW ISSUE in the GitHub and assigned it to ourselves. Then the owner of the issue would make a commit and push that to the new branch that already has been made. Then, the owner of issue would make pull request for staging and then would be merged by the owner of the issue. We decided that the only person who can push and merge into the main is the leader just to prevent any error in the code.

The next step was deciding about the environment of our source code editor and the technologies we are going to use. We decided to use vocode as it was easier to add any extension or package installing for our project. 

We also used many tools in our project for managing static code analysis. One of the decisions that has been made in this project was to use Type Script as it was helpful to prevent common errors in our application.

Then for making the code more consistent and avoiding bugs we installed ESlint and prettier. With Eslint we made a few rules to finding the common errors. We used prettier to make sure our code is consistent between all files, then we can understand each other's codes and make it easier for others too to understand our code. 
For automated acceptance/integration tests we used Cypress. This tool helped us to test that how a user can interact with our application.

The approach that we used in this project is component base. Storybook is an environment that allows us to create and showcase components outside of our main application. Storybook helped us to documenting our project and made reusing the components easier. 

# Workflow of the project.
Our design cycle began by establishing the design of the project on the figma. Having an idea of what we wanted to achieve, we assigned tasks to each person. This was done with the help of a tool that can be found on our repository (projects tab).

After assigning the tasks, we started working on our components. In order to discuss the completed tasks, we used the established groups on Teams and Whatsapp. Every week we tried to meet and update our work in separate branches. In order to automate and check our code and catch errors, we used "Code Quality Static Checks" which checked our set up sequentially, dependencies installed, ESLint and prettier working correctly. 

In order to prevent errors in the main repository of Continuous Integration, we introduced "SubmittedChanges" in the branch, where we tried to merge our code and check its operation after merging the components.

# Storybook

When are are writing an application, it is of great important to design and test the components of the application. We are able to test complex activities and make sure that the components we have written always work as expected. Storybook is a tool for creating application interface components. It allows you to browse components, view the different states of each component and test components. Storybook makes component creation faster and easier by isolating components. We are able to create entire user interfaces without having to move around the application, and it also helps to document components for reuse, and gives you the ability to test them visually to prevent errors. 

# Idea of Registration component/story.
We had an idea to build registration component when after we are thinking of creating a component. After filling in the appropriate form, we would like an alarm or pop up to indicate that we have registered. The page should then redirect us to the home page where we would already be logged in. 

## Login story
To create story itselft we need to import the component itself. After that we use react build-it template. Then we return it as a GS component. Export the title and the component was the next step. Finally the code exports the title and the right properties. Component and the type of the component has to render. At the end we bind the template and it is shows up as soon as we click on it. 

# Adding new Comment story
Unfortunetly we encountered some bugs on the way. Comment story section required query client provider. The idea of unbuging was to wrap our element inside client provider and pass it to session that we have.

# Unit test
In one of our repositories we managed to use Cypress. We successfully tested main login and register page. The testing approach we used allowed us to carry out some unit tests on our code. The tests not only catch our bugs but also help us to document our code. As soon as the server starts Cypress send the GET request to these locations to visit them. It will come with the messege ("They have been found"). If connection is lost, the test will fail.



# Deployment
The app been deployed on Vercel. This platform is using its own dependences to runs application with with simultaneous tests. 
The domain with our project is on : https://recipe-app-blush-theta.vercel.app/


# Reflection And Future Work
The result of this project was building a web-based Recipe application, but the main goal of this project was collaboration in a teamwork project and keep the code consistent and error free. We believe we almost got the goal although we finished the project about 2 weeks late due an issue. 
We worked effectively together. Whenever one of us had a problem to finishing a task or had an error for something, other team member helped the person to solve the problem as it was a group work, and we were working to get the same goal. 
We learned how to manage the time and how to break tasks into a smaller section and divide it between the team members. At the beginning the project seemed to be easy, but we immediately realised that the project is more complex than we thought. So, we learned to think about the project deeply before  we make any plan. 

We couldn't make some features for the application that we had plan for that and they are:
1. Adding admin page 
1. Adding session variable for login system 
1. Adding Basket and wallet for the user

For future work it is recommended to add recommendation system using machine learning algorithm for the project. 
Our CI/CD-based work was not perfect. We did not correct mistakes such as not setting up the project at the very beginning and we missed the deployment phase of an early version of the project. This resulted in significantly longer working times and a multitude of errors. Nevertheless, the project taught us a lot of new functionality and teamwork in a dedicated environment, which will certainly be profitable for us in the future.


    












