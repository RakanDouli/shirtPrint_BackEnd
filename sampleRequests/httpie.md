# Sample HTTPIE requests

1. Walk through the in README first
2. Start your server

```
npm start / npm run dev
```

3. Open another terminal
4. Try out the requests below

## GET /

```bash
http GET :4000
```

## POST /echo

```bash
http POST :4000/echo hello="world" number:=0 cheesesArray:='["cheddar", "rochefort", "stilton"]'
```

## POST /signup

```bash
http POST :4000/signup email="newuser@fastcompany.com" password="test1234" name="John Doe"
```

## POST /login

```bash
http POST :4000/login email="test@test.com" password="test1234"
```

## GET /me

Get a token first:

```
http POST :4000/login email="test@test.com" password="test1234"
```

```bash
http GET :4000/me Authorization:"Bearer <PASTE_YOUR_TOKEN_HERE>"
```

```bash
http GET :4000/me Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU4NDYwNzIyMSwiZXhwIjoxNTg0NjE0NDIxfQ.PcK4zqUIuA347cW7jdLFSH-86RckZtPw4RFeChwqh2o"
```

## POST /authorized_post_request

Get a token first:

```
http POST :4000/login email="test@test.com" password="test1234"
```

```bash
http POST :4000/authorized_post_request Authorization:"Bearer <PASTE_YOUR_TOKEN_HERE>" hello="world" number:=0 cheesesArray:='["cheddar", "rochefort", "stilton"]'
```

```bash
http POST :4000/products/ Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU3Mzc3NCwiZXhwIjoxNjI0NTgwOTc0fQ.HWkSJ0oT7pjZx8KoiNGR89UTx1VIM01QWO4V9vQZy8E" title="ss" imageurl="ss" tags"sss" description="sss" cost=30 addedcost=3
```

```bash
http POST :4000/orderproductitems/ Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU3NTQwOSwiZXhwIjoxNjI0NTgyNjA5fQ.Qja-kczB6XMxO6ybgIuizrQSDNvQUpIz5Dj-doik9hc" size="S" color="Black" quantity="1" productId="1"
```

http POST :4000/orderproductitems/ Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYyNDU3NjYzNSwiZXhwIjoxNjI0NTgzODM1fQ.1BbRzeLdhM2VHlezzTH8AV4wZVJsl8IOqyca6Q63XJU" size="L" color="black" type="short sleeve" quantity=1 productId=1
