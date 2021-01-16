_.each({
  s: "<span ",
  ss: "</span>",
  d: "<div ",
  dd: "</div>",
  p: "<p ",
  pp: "</p>",
  h1: "<h1 ",
  h1h1: "</h1>",
  h2: "<h2 ",
  h2h2: "</h2>"
    }, (outerVal, outerKey) => {
      _.each({
        call: "call",
        cb: "code-block",
        def: "def",
        num: "number",
        str: "string",
      }, (innerVal, innerKey) => {
        window[`$_${outerKey}${innerKey}`] = `${outerVal} class='${innerVal}'>`;
      });
      window[`$_${outerKey}`] = outerVal;
    });
