# serverless-aws-chime-backend

Prerequisites
--------------
- Install [AWS Command Line Interface](https://aws.amazon.com/cli/)
- Clone the repo
- Get permission to Amazon Chime Administration Console
- Install [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)


Lambda deployment
------------------

1. ```  npm i   ```
2. ```  sam build   ```
3. ```  sam deploy --guided   ```
4. Use us-east-1 region in option while in deployment

Test the application
--------------------

1. Take the endpoint URL.
2. clone the [Frontend demo repo](https://github.com/WebRTCventures/simple-chime-frontend)
3. Change the URL [here](https://github.com/WebRTCventures/simple-chime-frontend/blob/main/src/App.js#L165)
4. ```  npm i   ```
5. ```  npm start   ```
6. check in the browser with ```    https://localhost:3000  ```
7. Enter room name and test the meeting.


