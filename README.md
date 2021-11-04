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
—shopping cart pop up
—Contact Us form
—candle filter
--social media links
--stock backlog availability
--loading symbol

FRONT-END CLIENT ROUTES:
-> / Homepage (BACKEND?)
-> /candles/:id | candles detail page (BACKEND?)
-> /user | user profile (BACKEND?)
-> /cart (NOTE: i think it's /auth/cart?)
-> /checkOut (?)
->/confirmation (?)

-> 404

API ENDPOINTS/BACKEND ROUTES:
GET /all
body:
display list of all candles (clicked? leads to GET /account)

GET /:id

((GET /auth/me))

GET /account
create an account button (leads to post / auth/signup)

POST /auth/signup DONE!

POST /auth/login DONE!

POST /auth/logout DONE!

GET /auth/loggedin DONE

POST /auth/me/create NATASHA

PATCH /auth/me/:id/edit NATASHA

DELETE /auth/me/:id NATASHA

POST /cart MARINA

POST /(cart)/checkout -> separate from cart

POST /(cart)/(checkout)/confirmation

Delivery Address (same as above)

GET /shippingandreturn

GET /faq

GET /about-us

GET /contact-us

POST /contact-us/sent

COMPONENTS:
--NavBar PARTIALLY DONE
--Account (sign up button / sign in)
--Sign Up / Create An Account PARTIALLY DONE
--Shopping Cart
--Checkout Page
--Candle List
--Individual Candle
--Footer
--Account/User Detail Page
--Order Confirmation
--Footer (shipping, faq, contact, about us, social media) (BACKLOG)

IO
Services:
Auth Service
auth.login(user) DONE!
auth.signup(user) DONE!
auth.logout() DONE!
auth.me (for admin)
auth.getUser() // synchronous

Candle Service
candle.list()
candle.detail(id)
candle.create(data or id?)
candle.edit(id)
candle.update(id)
candle.delete(id)

backlog.filter(fragrance, price)

SERVER:
MODELS:
Model #1:
--User Model (for signing up):
{
first-name: {type: String, required: true, unique: true},
last-name: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
}

Model #2:
Candle:
—Picture: file
—Name: string
—Price: number
—Weight: number
—Quantity: number
—(Add to Cart button)
—Description: String
[RELATIONSHIP TO CREATING?]

Model #3: Message (for Contact Us Form)
--name: string
--email: string
--message: string
--send button: button

(WORK ON RELATIONSHIPS!)

LINKS:
Trello/Kanban
Link to your trello board or picture of your physical board

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
