### tag-template

Dirty HTML tag templating in template literals, occupies global namespace with the $_ prefix by building from a dictionary of tags and classes.

Uses lodash-core as a stylistic preference to native methods.

e.g.

```
return `<span class="code-block"> This is some code! </span>`;
```

becomes

```
return `${$_scb} This is some code! ${$_ss}`;
```
