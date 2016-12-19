# babel-plugin-nameof
The plugin works with variables and object members.
Usage:

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
