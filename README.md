[![Build Status](https://travis-ci.org/tobold/allstaas-bnb.svg?branch=master)](https://travis-ci.org/tobold/allstaas-bnb)

INSTRUCTIONS FOR LOCAL SETUP
----------------------------
```
$ npm install
$ npm install sequelize-cli -g
$ createdb allstaas-test
$ createdb allstaas-dev
$ sequelize db:migrate
$ sequelize db:migrate --env test
$ mocha
```

Description
----------

We would like a web application that allows users to list spaces they have available, and to hire spaces for the night.

User Stories
----------
```
As a host,
so I can rent my space,
I want to be able to create a listing on All Staas BnB

As a user,
so I can view available listings,
I want to see the listings on the homepage

As a user,
so I can stay at a listing,
I want to be able to create a booking request

As a user,
so I can use All Staas BnB,
I would like to be able to create an account

As a user,
so I can use the website as me,
I want to be able to log in to the All Staas BnB website

As a user,
to stop others posting as me,
I want to be able to log out of the All Staas BnB website
```


```
As a host,
so I can rent multiple spaces,
I want to be able to create multiple listings
```

```
As a host,
so that I can describe my space,
I want to be able to provide a name, description and price
```

```
As a host,
so that I can control when my space is available,
I want to be able to offer a range of available dates
```

```
As a user,
so that I can rent a space,
I want to be able to submit a booking request

As a host,
so that I can control who rents my space
I want to be able to approve or reject the booking

As a user,
so that I know which dates are not available,
I want to be able to see which dates are already booked

As a host,
so that I do not receive multiple requests for the same dates,
I want the space to be made unavailable when a request is made
```
