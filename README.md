# Airbnb Code Sample

This repository contains code excerpts from my private projects, showcasing code samples without boilerplate (i.e SQL, HTML, CSS, gemfile...)

There are two different examples:

* Rails part to show understanding of the framework
* JavaScript to show logical probelm solving with data manipulation.

## Rails User Auth - Backend

The Rails folder demonstrates a custom user authentication system api implemented in Rails, showcasing a deep understanding of the framework.

How it works:

1. Rails>app>models>user.rb - Model Level Authentication Methods
2. Rails>app>controllers>api>users_controller.rb - User account creation
3. Rails>app>controllers>api>sessions_controller.rb - Session creation/deletion actions
4. Rails>app>controllers>application_controller.rb - Login/Logout and other Helper Methods
5. Rails>app>views>api>users folder employs Jbuilder for data rendering. Additionally, a Jbuilder partial has been created for reuse, reducing redundancy.
6. Rails>app>static_pages>root.html.erb file is used to bootstarp the user when using React on the Frontend.
7. Rails>config>routes.rb showcases nested routes. It has user creation and session routes.

## JavaScript Logical Data Manipulation

The JavaScript folder demonstrates problem-solving skills through logical data manipulation. This project is live and can be viewed [here](https://hammadkhalid101.github.io/Covid-19-Vaccination-Tracker/) for demonstration purposes. Notably, it showcases the formatting of data retrieved from the CDC API and the creation of an interactive map.

How it works:
1. JavaSctipt>index>index.js - This is the main file which brings everything together via imports
2. JavaScript>functions>api_util.js - Calls to CDC Api to get data
3. JavaScript>functions>format_data.js - formats bulk of data to be used
4. JavaScript>functions>format_data_weekly.js - formats data to display weekly progress via slider
5. JavaScript>functions>draw_map.js - creates the map utilizing D3.js (DataMaps) and populates it with data

***

### One example of logical problem solution

Situation: I set out to create a dynamic slider for the map displaying weekly COVID-19 vaccination data for Pfizer, Moderna, Janssen, or all vaccines. The user could filter through these options and use the slider to navigate the data. However, integrating both the overall combined data set from the CDC and the weekly data sets on the map dynamically proved challenging.

Task: I aimed to devise a logical solution to update the map based on the selected filter button and the slider's position, with a focus on simplicity and effectiveness.

Action: I tackled this challenge by creating a logical statement that added an event listener to the slider. Additionally, each of the four filter buttons (All, Pfizer, Moderna, Janssen) was equipped with its own event listener. This setup enabled dynamic updates to the map based on both the selected filter and the slider's position. Upon activation of the event listener, I determined the selected filter buttons and used this information to either generate a map displaying data specific to the selected manufacturer or create a map with the entire data set.

Result: The implemented solution, located in JavaScript>index>index.js lines 53-69, effectively resolved the issue. While the project included other complex logical statements, overcoming the slider challenge was particularly rewarding and impactful for me.

***

More about the live app:

# Covid-19-Vaccination-Tracker

![alt text](https://github.com/HammadKhalid101/Covid-19-Vaccination-Tracker/blob/main/CVT_LOGO.png "CVT Logo")

***

[COVID-19 Vaccination Tracker Live](https://hammadkhalid101.github.io/Covid-19-Vaccination-Tracker/)

***
![alt text](https://i.imgur.com/umfUJXf.gif[/img])

***

## Background

Covid-19 Vaccination Tracker is a data visualization application. It utilizes USA vaccination data from the CDC and visualizes it on a map for easier comprehension. The goal is to keep track of the progress being made during the vaccination process and raise more awareness. This application displays data during various periods of time, which is further discussed in the Functionality & MVP section.

***

## Functionality & MVP

With the Covid-19 Vaccination Tracker, users are able to:
* Select a vaccine manufacturer to filter data
* Visualize data on a map / Hover over a state to get number of first and second doses administered
* Look at various stages of vaccination (each week)

***

## Technologies, Libraries, APIs

* Javascript
* HTML
* CSS
* jQuery
* Ajax
* Socrata
* SODA API
* DataMap D3.js
