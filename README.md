# babel-plugin-nameof-js
The plugin works with variables and object members.

## Setup:
```
npm install --save-dev babel-plugin-nameof-js
yarn add --dev babel-plugin-nameof-js
```

In your .babelrc:
```
"plugins": ["nameof-js"]
```

## Usage:

```javascript
const myVar = "I love 🦄";
const nameOfMyVar = nameof(myVar); // Turns into "myVar";

const myObject = {
  myMember: true
};
const nameOfMyMember = nameof(myObject.myMember); // Turns into "myMember";



// Works with all identifiers.
class MyClass {
}

// Outputs: What's my classes name? MyClass
consolge.log(`What's my classes name? ${nameof(MyClass)}`);
```
