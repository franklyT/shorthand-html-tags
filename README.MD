### shorthand-html-tags

Returns an HTML string built from a shorthand style.

lodash-core used as a stylistic preference to native.

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
return shorthandTags(`
  <p> 
    Some introduction text.
    <br /> <br />
    <s c|code-block> This is some code! </s>
    <s c|code-block> <s c|def> my_function </s>(<s c|num> 10 </s>) </s>
  </p>
  `);
```
