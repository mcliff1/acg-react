import boto3
import StringIO
import zipfile

"""
Downloads zip from build bucket, and extracts to deploy bucket
"""

s3 = boto3.resource('s3')
build_bucket = s3.Bucket('slsweb-codebuild')
deploy_bucket = s3.Bucket('slsweb-dev-websites3-14yjro36amv9c')

#print "dir of build_bucket"
#for obj in build_bucket.objects.all(): print obj.key

#print "dir of deploy_bucket"
#for obj in deploy_bucket.objects.all(): print obj.key

build_zip = StringIO.StringIO()
build_bucket.download_fileobj('slsbuild.zip', build_zip)

# now upload
with zipfile.ZipFile(build_zip) as myzip:
    for nm in myzip.namelist():
        obj = myzip.open(nm)
        deploy_bucket.upload_fileobj(obj, nm)
        deploy_bucket.Object(nm).Acl().put(ACL='public-read')
