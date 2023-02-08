[![Netlify Status](https://api.netlify.com/api/v1/badges/7ce32031-89c3-44e3-87f8-d8908f99239a/deploy-status)](https://app.netlify.com/sites/architect-harbor-30617/deploys)
# danielmcgrath.xyz

[My personal website](https://danielmcgrath.xyz)

Built with [GatsbyJS](gatsbyjs.org) and [Styled Components](https://www.styled-components.com)

## Getting Started

```sh
$ npm install -g gatsby-cli
```

test

if on [windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/):

```sh
$ npm install -g windows-build-tools
```

## Develop

```sh
$ gatsby develop
```

## Build

```
$ gatsby build
```

## Deploy

```sh
$ netlify deploy public/
```

## Resume

Resume is built statically via `gatsby-source-dropbox`

In order to generate the node, you need to have the environment variable `DROPBOX_ACCESS_TOKEN`
set.