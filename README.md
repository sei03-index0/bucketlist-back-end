# Bucketlist

Bucketlist is an application used to easily create and manage all of your bucketlists. Start organizing all of your present and future goals with this modern, cutting edge application built from the ground up.

With Bucketlist users can seemless generate custom lists of objectives to help themselves stay on track and complete each goal. Immediately on sign in, you have the option to create a new list, view or edit an existing list, and even mark a list as complete!

## How It Works

Start by creating an account to receive full access to all of Bucketlist's features. From here users have the option to:
* Change the current login password
* Create a new list, includes a title and description
* View or modify the contents of an existing list
* Delete a list entry
* Mark an entry as complete

## Stretch Goals and Future Features to Come!

* Users will soon be able to pin various locations using our 3rd party map
* Users will soon be able to filter through their completed entries
* Users will soon be able to add a picture to an entry
* Users will soon be able to attach a timeframe to a list or goal
* Users will soon be able to view other public lists and like or follow a list

### Repos and Deployment

Link to the client repo and deployed website


* [Bucketlist-Client Repo](https://github.com/sei03-index0/bucketlist-front-end)
* [Bucketlist-Server Repo](https://github.com/sei03-index0/bucketlist-back-end)
* [Bucketlist Deployed Website](https://sei03-index0.github.io/bucketlist-front-end/)
* [Bucketlist Deployed Heroku](https://obscure-bayou-78598.herokuapp.com/)


### MVP User Stories

  - As an unregistered user, I would like to sign up with email and password.
  - As a registered user, I would like to sign in with email and password.
  - As a signed in user, I would like to change password.
  - As a signed in user, I would like to sign out.
  - As a signed in user, I would like to create a bucket list item with a title and description.
  - As a signed in user, I would like to update my bucket list item's title and description.
  - As a signed in user, I would like to delete my bucket list item.
  - As a signed in user, I would like to see all my bucket list items but not other users'.
  - As a signed in user, I would like to cross off items to complete them.

### The Process

The team began the project with a solid planning process which set the foundation for how the application would look and run. There were no wrong answers during this exercise and creative freedom was highly encouraged. After the wireframes, ERD and functionalities were completed the team began setting up both the front/back-end simultaneously; two members worked on setting up the client to view any testing and one member set up the server + CURL scripts.

At this point everything was ready to start adding the custom code that would give life to the application and make each option perform properly. To stay organized and on track, the team used the User Stories above to guide us through the process and ensure nothing was missed. Nearly each objective on the list was handed out to each member to work on, but nothing was finalized until each member gave the OK to save and push the feature branch to the remote repo. By the end of the process we became masters of version control (although there were occasional merge conflicts our procedure limited the extent of each conflict and were solved with a quick fix).

At last we made it to the final length of the project--crossing off completed items and styling the entire website. Checkbox the hardest function to get to work because we really didn't have a clear plan on how to tackle the task, yet, from the planning stage, the team already knew what kind of checkbox we wanted to have. But after hours of research and some failed attempts the checkbox was complete. The process went as follows:

  1. A completed object and boolean value was added to the database's schema
    - This determined whether the box was checked off or not
  2. Next an api variable was added to the front-end to communicate the true/false response with the back-end
  3. After, an event handler was added to listen for when the box has been checked on the website
  4. Finally, the variable added to the event handler file relayed the checked box to the UI, which was loaded in by the handlebar helper files.

Now that we have achieved MVP we used the remainder of the time to style the website--which seemed like an entire project within itself. Luckily, this team is equipped with two CSS wizards who were able to maneuver through most of the styling issues and concepts, while producing a stylish, modern, and aesthetically pleasing Bucketlist website.

### The Routes

| Verb   | URI Pattern  | Result |
|:-------|:-------------|:------------------|
| GET    | `/list-items`     | read all list items    |
| POST   | `/list-items`     | create list item       |
| PATCH  | `/list-items/:id` | update list item       |
| DELETE | `/list-items/:id` | destroy list item      |


## ERD Images

* ![ERD Image](https://i.imgur.com/R27jzsn.jpg)
* ![ERD Image 2](https://i.imgur.com/LYaalCX.jpg)

## Built With

* [ExpressJS](https://expressjs.com/en/api.html) - The web framework used
* [MongoDB](https://docs.mongodb.com/manual/) - Non-Relational Database Program
* [Mongoose](https://mongoosejs.com/docs/) - Object Data Modeling(ODM) library for Node.js and MongoDB
* [Node.js](https://nodejs.org/en/docs/) - JavaScript Run-Time Environment


## Acknowledgments

* Patience
* Breaks
* Jordan - 4th 'Member'
