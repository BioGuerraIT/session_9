## React (part 2)

For the second session on React we will be focusing on
communication between the frontend and the backend. We will
be using the same Kanban app that we built in the previous
sessions, but this time we will be using React for the
frontend and Flask for the backend.

(It is very likely that this will be the same architecture
that you will use for your final project.)

## Pre-class work

### 1. React tutorial

Continue working through the [React tutorial](https://blog.miguelgrinberg.com/post/the-react-mega-tutorial-chapter-1-modern-javascript).
Work through chapters 5–6.

(But feel free to continue if you have the time!)

### 2. Kanban React app

Refactor your Flask application to return simple Python
dictionaries of data instead of HTML. Think through how
to structure your api endpoints. Now modify your React app
from the previous session to use these dictionaries.

You can use the following simplifications to shorten the task:

- There's no need to have users for this site. (As a result, no need for registration/login/logout)

Come to class with your Flask server, and React app running on your laptop.
You will need to make changes to the code, so your development environment
should also be open and accessible.

### 3. OpenAPI generator

To prepare for today's class activities, please install the OpenAPI generator:

```
npm install @openapitools/openapi-generator-cli -g
```

Confirm that it is successfully installed by running:

```
openapi-generator-cli version
```

### 4. Javascript questions

As you work through the React tutorial, you will undoubtably see
code that confuses you! This is normal. Please keep examples of
javascript that you found confusing, and bring them to class.
The examples should be in a format suitable for pasting into a
forum doc, and you should be able to clearly identify the
lines of code that you found confusing.

(It's even better if you initially found it confusing, but
now understand it! Bring those to class and help teach others!)

**Please commit your work to your PCW repo and push it to github before class!**