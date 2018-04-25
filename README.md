# acg-react
REACT work based on ACloud Guru training

2018-04-25 - this is designed to go with the slsweb project in [aws/slsweb](https://github.com/mcliff1/aws/slsweb/)

this github is integrated with Code Build to deploy to the S3 bucket generated under the 
slsweb project in [aws/slsweb](https://github.com/mcliff1/aws/slsweb/)

## Technologies Used

HTML
CSS
FontAwesome
Google Fonts

### TODO

add Code Build to CFN 
add S3 bucket needed for this

add Lambda function to deploy from code build S3 bucket to runtime webapp S3 bucket
use environment params (put in CFN configuration)
 - dont forget permissions on lambda
