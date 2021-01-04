---
title: Light Mode bug should be resolved by doubled request detection not replacing GET and POST
pubdate: 2020-04-05
---

With browser games that many interacts request by users toward databases, there might be a problem called Light Mode bug.

It's Google Chrome on mobile's feature that you can save time and traffics, and it achieves by forcing all request and responce go through google servers. They receives user's requests, and parry it with continuous requests so that even if you ara in low traffic bands, you can get the fastest response.

This continuous requests makes bug that your DB CRUD will happen twice or more.

## main cause
What this makes happened is that site owner codes CRUD with GET requests. It's really unbelievable but there are some codes like that anyway. To make matters worse, this CRUD requests are from user's right one request, so they have correc sessions and token.

Light Mode never make POST request continuous, then it will be resolved by replacing GET with POST, but you might say you are not sure where there is a bad GET requests. Adding to it, you can't make sure if someone will code wrong again.

Therefore, you should validate with backend that receives and detects double requests.

## 1: session purge
This way is really popular measure with famous framework such as Laravel. If the request comes to the API and validates with session, the second request will pass again as it is. However, the first request delete the session the second one will never validate, so you can prevent the latter request, even though the request comes almost same time.

However, this causes one missing case that async requests from a same page wouldn't receive since they use same session. To detect the only same requests which is that latter from the second request, you should use token with it.

With this approach, you can separate if this is an invalid request or just doubled request so that you could lead the doubled request to the valid URL but error page. It would be better UX.

## 2: token check by read and write handle
You should error check with R handle at first so all the invalid request whose wrong token could redirect to error. Then, you can separate the invalid one here. Secondally, you lock the W handle to error check again.

You can easily lock with select_for_update if you set Database with Repeatable Read. In this case, the first one will make the second or latter request to wait. After you correct the token, you can remove the token here, so the second request or latter will never accepted.

1. token check with R handle(slave), and redirect to error if invalid
2. error check if valid to avoid the process so it gets faster
3. token check with W handle(master) with lock
4. second or latter request will wait, but they are valid(it means they are doubled requests.) 
5. redirect them to valid URL, but skip the process because first one has passed certainly

Step 4 is the important because it makes sure this request is the doubled request but valid. The session purge way is enough but not general way, so this might be the best UX.

## summary
Well, the best thing is to not code wrong. POST requests to CRUD is not rarely seen in any programming company. If you fix this up, you should refactor the code later. Also, I just wonder if the old engineer solved the way like this.
t
