#(Note *Updates Required)
# Useful info for Setting up Typescript
Useful Commands:

* npm init --> creation of package.json
* npm install typescipt -D --> -D will modify package.json and typescript in devdepencies
* npm install anypackage - s --> will modify package.json and in dependecies
* tsc --init --> creation of tsconfig.json
* tsc tsfilepath --> will compile typescript to javascript
* npm install @types/node -D --> will import all typeDefinitions. This will help to know what methods are available in thirdparty libraries
* npm run es6 --> Will start http server 8080 port

Some BestPractices of Typescript (check comments in learning-types.ts file):
* Its always better enable strict null checks in tsconfig.json
* Use noImplicitAny to true so that we have to declare a type always

Setting up VisualStudio code Environment:

* Configure Task Runner in command palette. Intsall Typescript. it created tasks.json
* Importing all type definition for Dep

ThirdParty Libraries:
* loadash 
* @types/node
* ts-node


Debugging Typescript:
* change sourcemap to true  in tsconfig.json

