DESCRIPTION:
This is an app that allows you to buy candles.
USER STORIES:

- 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- Signup: As an anon I can sign up in the platform so that I can start creating and managing my backlog
- Login: As a user I can login to the platform so that I can start creating and managing my backlog
- Logout: As a user I can logout from the platform so no one else can modify my information
- Add elements: As a user, I can add elements to the shopping cart
- Delete elements As a user I can delete elements from the shopping cart
- Special Add elements: As an admin, I can add new candles
- Special Edit elements: As an admin, I can edit candle entries
- Special Delete elements: As an admin, I can delete candle entries
- Check profile: As a user I can check my profile
- Search: As a user, I can use the search function on the header/navBar
- Contact (BACKLOG): As a user, I can contact the admins

BACKLOG:
—shopping cart pop up /number pop up DONE
--install an account icon for account link DONE
--stock backlog availability DONE
--do social media icons DONE
--do footer links DONE
--loading symbol PARTIALLY DONE (make sure all pages have it)
--on the cart page, fix the lack of space between the message words "candles" and "here". DONE
--show logout button DONE
--after logging in, redirect to user page    DONE

--hide checkout button until after products are added to cart
--make green outline for cedar and pine logo
--make instagram icon bigger
--fix payment info in url
--put shopping cart on right side of browser
—candle filter
--Make footer stick to bottom of browser
--—button to fill in delivery address if same as billing address
--after adding a candle, redirect back to candle page
--random number on confirmation page
--for the edit page: make it so it's okay to only edit
one part and it changes just that part
--put sign up and log in on same page

FRONT-END CLIENT ROUTES:
-> / Homepage DONE!!!
-> /candles/:id | candles detail page DONE!!!!
-> /user | user profile DONE!!!!
-> /cart (NOTE: i think it's /auth/cart?) DONE!!!!!
-> /checkOut PARTIALLY DONE
->/confirmation DONE!

-> 404

API ENDPOINTS/BACKEND ROUTES:
GET /all DONE!

GET /:id DONE!

GET /account DONE!

POST /auth/signup DONE!

POST /auth/login DONE!

POST /auth/logout DONE!

GET /auth/loggedin DONE!!

POST /auth/me/create DONE!!

PATCH /auth/me/:id/edit DONE!!

DELETE /auth/me/:id DONE!!

POST /cart DONE!!

POST /(cart)/checkout DONE!!

POST /(cart)/(checkout)/confirmation DONE

Delivery Address (same as above) DONE

backlog--
GET /shippingandreturn DONE!!

GET /faq DONE!

GET /about-us DONE!

GET /contact-us DONE!

POST /contact-us/sent

COMPONENTS:
--NavBar DONE
--Account (sign up button / sign in) PARTIALLY DONE
--Shopping Cart DONE!
--Checkout Page DONE!
--Candles DONE!
--CandleDetails DONE!
--Footer DONE!
--Account/User Detail Page (Private.jsx) DONE!
--Order Confirmation DONE!
--Footer (shipping, faq, contact, about us, social media) DONE!

IO
Services:
Auth Service DONE!
auth.login(user) DONE!
auth.signup(user) DONE!
auth.logout() DONE!
auth.me (for admin) DONE!
auth.getUser() // synchronous DONE!

Candle Service
candle.list() DONE!
candle.detail(id) DONE!
candle.create(data or id?) DONE!
candle.edit(id) DONE!
candle.delete(id) DONE!

backlog.filter(fragrance, price)

SERVER:
MODELS:
Model #1: DONE!
--User Model (for signing up):  
{
first-name: {type: String, required: true, unique: true},
last-name: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
}

Model #2: DONE!
Candle:
—Picture: file
—Name: string
—Price: number
—Weight: number
—Quantity: number
—(Add to Cart button)
—Description: String
[RELATIONSHIP TO CREATING?]

Model #3: Message (for Contact Us Form) DONE!  
--name: string
--email: string
--message: string
--send button: button

LINKS:
Trello/Kanban
Link to your trello board or picture of your physical board
https://docs.google.com/document/d/1wf5IG7UZBTb6v9HWaossFWlXxypiyPNdzYnDfHbn8SM/edit

Git
The url to your repository and to your deployed project

Client Repository:
https://github.com/natasha-ironhack/cedar-pine-client

Server Repository:
https://github.com/natasha-ironhack/cedar-pine-server

Deploy Link

README Example:
https://gist.github.com/jorgeberrizbeitia/38e9b52b6b476c7823bd7d0628f794fd

Slides
The url to your presentation slides

Slides Link
https://docs.google.com/presentation/d/1wwPEDK9d4uEnxbc2l3OFqHso9MGXCpZYAOywJQAXV2g/edit#slide=id.ge3471791df_0_530

testing
