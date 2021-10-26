# GpeelPlogNg12

@gpeel/plog@12.0.0 is the first version migrated for Angular 12.

Here is the addtional steps used to install the library into this project.

# multi CLI Projects

https://angular.io/guide/file-structure
https://angular.io/guide/creating-libraries

            ng generate library @gpeel/plog
            ng build @gpeel/plog 

https://angular.io/guide/creating-libraries#managing-assets-in-a-library
Managing assets in a library Starting with version 9.x of the ng-packagr tool, you can configure the tool to
automatically copy assets into your library package as part of the build process. You can use this feature when your
library needs to publish optional theming files, Sass mixins, or documentation (like a changelog). Learn how to copy
assets into your library as part of the build. Learn more about how to use the tool to embed assets in CSS.

## tsconfig

When you import something from a library in an Angular app, Angular looks for a mapping between the library name and a
location on disk. When you install a library package, the mapping is in the node_modules folder. When you build your own
library, it has to find the mapping in your tsconfig paths.

Generating a library with the Angular CLI automatically adds its path to the tsconfig file. The Angular CLI uses the
tsconfig paths to tell the build system where to find the library.

    "paths": {
      "@gpeel/plog": [
      "dist/gpeel/plog/gpeel-plog",
      "dist/gpeel/plog"
      ]
    }

By default, CLI generate the link to the ./dist folder => So you HAVE TO BUILD the lib to test it.

And now you can change that to src with :

* MODIFED by Gauthier

      "paths": {
          "@gpeel/plog": ["projects/gpeel/plog/src/public-api.ts"]
      }

## Building without IVY

With

        ng build @gpeel/plog

You get a warning :

        Building Angular Package
        ******************************************************************************
        It is not recommended to publish Ivy libraries to NPM repositories.
        Read more here: https://v9.angular.io/guide/ivy#maintaining-library-compatibility
        ******************************************************************************

It is recommended to build in --prod mode

## npm login

You should do it ONCE on your machine:

    C:\me\_gitgpeel\my-libs-npmjs\plog\gpeel-plog-lib-ng9>npm login
    Username: gpeel
    Password:
    Email: (this IS public) gauthier.peel@gmail.com
    Logged in as gpeel on https://registry.npmjs.org/.

This creates a .npmrc file in your c/users/gauthier with the credit to log in https://www.npmjs.com/

<hr>
GENERATED text now :
<hr>

## eslint migration of lib

to make lib eslint Correct I changed in projects/gpeel/plog/.eslintrc.json/.eslintrc  >FROM :

 ````json
{
  "extends": "../../.eslintrc.json",
  "ignorePatterns": [
    "!**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "projects/gpeel/plog/tsconfig.lib.json",
          "projects/gpeel/plog/tsconfig.spec.json"
        ],
        "createDefaultProgram": true
      },
````

TO:

 ````json
{
  "extends": "../../../.eslintrc.json",
  "ignorePatterns": [
    "!**/*"
  ],
  "overrides": [
    {
      "files": [
        "*.ts"
      ],
      "parserOptions": {
        "project": [
          "tsconfig.lib.json",
          "tsconfig.spec.json"
        ],
        "createDefaultProgram": true
      },

````
