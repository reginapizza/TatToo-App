## **Tat, Too: Your Personal Tattoo Gallery App**.
------------------------------------------------------

**Hello! Thank you for taking the time to check out my app! This app was created because I love tattoos and looking at them online makes me really happy. After getting my most recent tattoo, I noticed that I had a slight reaction to the brand of ink I got and I thought that for my next one, I would like to have the artist probably use a different brand of ink, except since this was a couple months after the fact, I had no idea what type of ink the artist had used. I also realized that while some people only stick to one tattoo artist for all of their tattoos, many people with multiple tattoos have different artists (like myself) and I want a way to keep track of all of them so when people ask me about them I can just pull out my app and see the info all about it!**

### **Important Links**:
* [My Live App hosted on Github Pages](https://reginapizza.github.io/TatToo-App/)
* [My front-end repository on Github](https://github.com/reginapizza/TatToo-React-Client)
* [My API repository on Github](https://github.com/reginapizza/TatToo-Backend)
* [My API hosted on Heroku](https://morning-earth-83765.herokuapp.com/)

### **Technologies Used (Backend):**
* Ruby
* Rails

### **Technologies Used (Frontend):**
* React
* Javascript
* CSS
* React-Bootstrap
* npm react-icons

### **Technologies Used (Other):**
* Postman
* Sketch

### **User Stories:**

1. As a user, I want to be able to sign up, sign-in, change password, and sign out.

2. As a user, I want to be able to create a record of a new tattoo I got with inputs for a title, a description, the date I got it, the tattoo shop I got it at, the area of my body I got it on, and a link to a picture of it.

3. As a user, when adding a location for a tattoo I would like my input field to autocomplete with shop names by integrating with Google Maps API.

2. As a user, I want to be able to edit my tattoo posts.

3. As a user, I want to be able to delete one of my tattoo posts.

4. As a user, I want to be able to see all of my tattoos posts in one place.

5. As a user, I want to be able to search for tattoos based on where they are on the body.

6. As a user, I want to be able to see all user's tattoos posts when I log in (almost like a newsfeed style).

7. As a user, I want the website to visually appealing and easy to navigate.


### **Planning Story:**
I wanted to create an app that was easy to use and intuitive, so I designed my app to be almost like an instagram-style with a home page for content that the user just has to scroll through to get a quick sense of the post, and if they like it they have the option to click on it for view more info. I also wanted it have a user profile, and a button to make a new post. In my original wireframe I did not have some of these things, and my nav bar was originally words because I didn't think about all the different options I would need. As my navbar quickly got more and more cramped, I decided to go with familiar icons for each page redirect to make it more user-friendly.

For this app I started with my backend because I knew that I would have to create all the attributes for each tattoo and assign them data types, and I didn't want to start working with the front-end until I knew those things were more solidly laid out to avoid having to go back in and change things on my front-end. Once I had my backend working, I started building out the front-end and styling along the way so I would know what worked with my layout and what didn't work.

### **Problems I Ran Into (Front-end):**

Most of my problems with both the front end and the back end came from authenticated errors. I wasn't including proper headers when I was coding my axios requests and that caused me a lot of headaches but after I figured it out the first time, the rest of it wasn't so bad.

Another big issue I had was getting my update function to work. I ran into an error where even though I was setting a default value for my `day` (which holds the date and has a data type of `Date`) in my state, it was getting set to `null` when I was udpating it without a value. Rather than mess with my backend, I fixed it by adding `|| ''` to my input value, that way if there wasn't a given value for day (meaning it would be set to null, or 'falsey') it would go to '' instead that would be 'truthy' and it wouldn't give me an error.

Some other issues included resizing my images to be responsive to the page size. I had to implement many different methods of StackOverflow solutions including changing the images to background images before I found a solution that worked for me. It's still not perfect, but ideally in the future I would like users to be able to upload the actual image and not have to link to it, so I decided to not try to make this perfect if I'm just going to get rid of it in future updates.


### **Future Updates:**

1.  I would really like user's to be able to 'heart'/'like' tattoo posts and have that save them to a collection that is only viewable to that user.
2.  I would like users to be able to directly upload an image as opposed to just sending in a link to their image hosted somewhere on the web.
3.  I would like this app to be mobile-friendly
4.  I would like to be able to mark images as NSFW and have that create a blur effect on the image until you tap on it. Additionally, I would like to have users that are under the age of 18 not be able to see any images that are marked as NSFW.


### **Original Wireframe Sketch:**

![Original Wireframe drawing for landing page](https://i.imgur.com/tGA2bye.png)
![Original Wireframe drawing for authenticated content-viewing](https://i.imgur.com/biuMUpd.png)

![Final Landing Page Screenshot](https://i.imgur.com/AUuKHrk.png)
![Final Home Page](https://i.imgur.com/oguWMFb.png)
