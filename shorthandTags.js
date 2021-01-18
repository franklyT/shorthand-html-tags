function shorthandTags(str) {
  const BLOCK_TEMPLATES = {
    s: "span",
    d: "div"
  };

  const MOD_TEMPLATES = {
    "c|": "class=",
    "h|": "href=",
  };

  _(BLOCK_TEMPLATES).each((blockVal, blockKey) => {
    const LEFT_KEY = `<${blockKey}`;
    const RIGHT_KEY = `${blockKey}>`;

    if (str.indexOf(LEFT_KEY) !== -1) str = str.split(LEFT_KEY).join(`<${blockVal}`);
    if (str.indexOf(RIGHT_KEY) !== -1) str = str.split(RIGHT_KEY).join(`${blockVal}>`);
  });

  _(MOD_TEMPLATES).each((modVal, modKey) => {
    if (str.indexOf(modKey) !== -1) str = str.split(modKey).join(modVal);
  });

  return str;
}

// Alternative Implementation
/*
function shorthandTags(str: string) {
  const BLOCK_TEMPLATES = {
    "<s": "<span",
    "s>": "span>",
    "<d": "<div",
    "d>": "div>"
  };

  const MOD_TEMPLATES = {
    "c|": "class=",
    "h|": "href=",
  };

  _(BLOCK_TEMPLATES).each((blockVal, blockKey) => {
    if (str.indexOf(blockKey) !== -1) str = str.split(blockKey).join(blockVal);
  });

  _(MOD_TEMPLATES).each((modVal, modKey) => {
    if (str.indexOf(modKey) === -1) str = str.split(modKey).join(modVal);
  });

  return str;
}
*/
