# brod.es
This repository contains the source code for [brod.es](https://brod.es).

## Development
```bash
$ direnv allow
$ yarn install
$ yarn devserver
[...]
http://localhost:8080
```

Visit the devserver at http://localhost:8080 for a site which live reloads.

## Publishing
Configure the AWS CLI tool and create a bucket named brod.es which has a cloudfront
distribution in front of it. See the script in package.json.

Afterwards, run:
```bash
$ yarn upload
```
