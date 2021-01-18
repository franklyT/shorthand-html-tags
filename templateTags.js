function shorthandTags(str) {
  const BLOCK_TEMPLATES = {
    s: "span",
    d: "div",
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a"
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
    const NAKED_MOD = `${modKey}`;

    if (str.indexOf(NAKED_MOD) === -1) return;

    str = str.split(NAKED_MOD).join(`${modVal}`)
  });

  return str;
}
