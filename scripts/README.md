# exclude this from deployment to S3

* copy/sync the directory below out to S3
* create the S3 bucket and Route 53 records (CFN template that takes domain name and prefix ??)
* * portfolio.<domainname>
* a CFN json file to make an EC2 workstation and role taht can pull GIT and publish content


## Resource Setup 
CloudFormation resource does the following

Input 
 - prefix:  portfolio
 - domainname  (example.com)


Output:
 sets up static content S3 bucket/ CFN/ Route 53 recourd to 
https://<prefix>.<domainname>/


### S3 steps
must match the full DNS name we plan to use

allow public

us-east-1

static hosting
  default page is index.html



when copying everything in there, we need to make sure each resource is public






###  ACM Certificate

in us-east-1 region

- note this requires an email confirmation to happen (CF doesn't support the domain validation yet)




### Cloud Front

lots of variable to cover here

TTL shouldn't be low (under 600) forever, but maybe when first setting things up (default 24h - 86400)




### Route 53

requires output from S3 creation

new record A (prefix name); 
use Alias feautre end point with S3 website end point
#  if we do this one we get NO SSL --- s3-webstite-....-us-east-1.amazonaws.com

Use Alias target from the CDN





