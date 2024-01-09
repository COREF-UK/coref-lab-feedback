# COREF Lab App

## How to Add Guide

Guides can consist of:

1) Markdown
2) PDF
3) Website URL

Go to `/static/guides` and copy guide content into this folder. The file structure from this point should mirrors the structure in the web app; e.g. a folder will create a new page with guides in that subfolder

Go to `src/routes/guides/+layout.ts` and find the `guides` variable and add the guide to the corresponding level in the structure (follow the existing guides as an example).

## Build App

1) Install Node + NPM
2) Clone repo: `git clone https://github.com/COREF-UK/coref-lab-feedback`
3) `npm i`
4) `npm run deploy`
5) `git push`

