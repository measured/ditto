# Ditto
#### Ditto is a static HTML boilerplate that can transform into anything you need it to be.
> Ditto (Japanese: メタモン *Metamon*) is a Normal-type Pokémon that uses the move `Transform` to copy the opponent's moves, types, form, and non-HP stats.


![](http://cl.ly/image/1n353l3M301a/ditto.gif)

## Features
- [Assemble](http://assemble.io/) (.hbs)
- Sass (.scss)
- Basic JS setup, including:
  * jQuery
  * [Fastclick](https://github.com/ftlabs/fastclick)
  * [Transit](https://github.com/rstacruz/jquery.transit)
- [Grunticon](https://github.com/filamentgroup/grunticon)
- [Grunt-aws](https://github.com/jpillora/grunt-aws)

## Getting started

- After cloning the repository, `cd` into the folder and grab the node dependencies: `npm install`
- Create a credentials.json file in the root folder (see below) - this doesn't need correct details yet, it's just so that grunt doesn't wig out over the missing file.
- Build the project: `grunt`
- When you're ready to start tinkering, watch for changes: `grunt watch`
- Finally, fire up the static server: `node server`

## Deployment

For rapid deployment, Ditto uses Amazon Web Services (AWS)
- Create an s3 bucket on your AWS account
- Create a `credentials.json` file in the root folder
- Put the relevant details (name, keys, region etc.)
- `grunt s3` to deploy

**note:** The credentials file is ignored by git so that you don't accidently publish your private aws keys to a public repo. That means if you're sharing a project you'll need to get each person to setup a credentials file on their local machine.

Example credentials:

```json
{
  "accessKeyId": "short string of numbers and letters",
  "secretAccessKey": "long string of numbers and letters",
  "bucketName": "my.bucket.com",
  "bucketRegion": "ap-southeast-2"
}
```

## To do

- ~~Add Grunticon~~
- ~~Set up Grunt s3~~
- ~~Update libs~~
- Investigate a way of cloning Ditto into a new repo without Git crud

## Authors

**David Hauser**
- [GitHub](http://github.com/haustraliaer)

**Ben Jennings**
- [GitHub](http://github.com/jenbennings)
