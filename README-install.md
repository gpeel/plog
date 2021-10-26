# My Usual setting for Angular 12

Here is a description of what was added to this project.

## eslint settings

In ng12 no more migration from tslint to eslint, the project comes with no linter at all, so you just need to add eslint
with:

        ng add @angular-eslint/schematics

## eslint rules

https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md

## usual eslint plugins

to install because missing by default and used but my rules:

         npm i -D eslint-plugin-jsdoc
         npm i -D eslint-plugin-import
         npm i -D eslint-plugin-prefer-arrow

         npm i -D eslint-plugin-prefer-arrow eslint-plugin-import eslint-plugin-jsdoc

## Webstorm

- activate Eslint Automatic config + fix on save option
- and disable tslint !
- Go to Tools -> Actions On Save and check - reformat Code, Optimize Imports, Rearrange Code Run code cleanup and run
  eslint --fix
