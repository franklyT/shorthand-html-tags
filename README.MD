### tag-template

A tag templating utility function that returns a DOM node as a string in-place from a provided template.

Lodash used as a stylistic preference to native.

e.g.

```
return `
  <p>
  Some introduction text.
  <br /> <br />
  <span class="code-block"> This is some code! </span>
  <span class="code-block"> <span class="def"> my_function </span>(<span class="number"> 10 </span>) </span>
  </p>
  `;
```

becomes

```
return templateTags(`
  <p> 
  Some introduction text.
  <br /> <br />
  <scb|This is some code!|ss>
  <scb|<sdef|my_function|ss>(<snum|10|ss>)|ss>
  </p>
  `);
```
