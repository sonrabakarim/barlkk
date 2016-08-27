# Overview

Forwards emails sent to `whatever@habd.as` to `jhabdas@gmail.com` using SES.

# Usage

- Set `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` for Serverless IAM user
  **Note:** Can be set as env vars or configured under home directory.
- Do the wild thing

# Todo

- [] Integrate with CI for automated Lambda updates

# Resources

- https://spinscale.de/posts/2016-06-16-using-claudia-js-and-recaptcha-to-send-emails-with-aws-lambda.html
- https://jeremyfelt.com/2016/05/22/send-receive-email-domain-postmark-amazons-ses-s3-lambda-services/
- https://github.com/arithmetric/aws-lambda-ses-forwarder/blob/master/example/index.js
- https://github.com/serverless/serverless/tree/master/docs
