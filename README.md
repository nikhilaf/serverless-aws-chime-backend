# serverless-aws-chime-backend

Prerequisites
--------------
- Install [AWS Command Line Interface](https://aws.amazon.com/cli/)
- Install [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- Clone the repo
- Get permission to Amazon Chime Administration Console


Lambda deployment
------------------

- ```  npm i   ```
- ```  sam build   ```
- ```  sam deploy --guided   ```
- Use us-east-1 region in option while in deployment

Test the application
--------------------

- Take the endpoint URL.
- clone the [Frontend demo repo](https://github.com/WebRTCventures/simple-chime-frontend)
- Change the URL [here](https://github.com/WebRTCventures/simple-chime-frontend/blob/main/src/App.js#L165)
- ```  npm i   ```
- ```  npm start   ```
- check in the browser with ```    https://localhost:3000  ```
- Enter room name and test the meeting.


