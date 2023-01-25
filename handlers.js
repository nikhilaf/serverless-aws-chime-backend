const AWS = require('aws-sdk');
const { v4: uuidv4 } = require("uuid");

 
const chime = new AWS.Chime({ region: 'us-east-1'});
//Setting the AWS chime endpoint, The global endpoint is https://service.chime.aws.amazon.com.
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com');

exports.start = async (event, context, callback) => {
    const query = event.queryStringParameters;
   // Retrieve Meetings list
   const meetingsResult = await chime.listMeetings().promise();

   // finding a Meeting with a specific “external id”
   const foundMeeting = Array.from(meetingsResult.Meetings).find(
     (it) => it.ExternalMeetingId === query.room
   );

   // If not, create a new Meeting.
   const createdMeetingResponse =
     !foundMeeting &&
     (await chime
       .createMeeting({
         ClientRequestToken: uuidv4(),
         MediaRegion: "us-west-2",
         ExternalMeetingId: query.room,
       })
       .promise());

   // … or use the found meeting data.
   const meetingResponse = foundMeeting
     ? { Meeting: foundMeeting }
     : createdMeetingResponse;

   // Create Attendee info using the existing Meeting info.
   const attendeeResponse = await chime
     .createAttendee({
       MeetingId: meetingResponse.Meeting.MeetingId,
       ExternalUserId: uuidv4(), // Link the attendee to an identity managed by your application.
     })
     .promise();

    return {
        statusCode : 200,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            attendeeResponse,
            meetingResponse,
          }),
    }
 };

 