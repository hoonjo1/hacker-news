const innerHtml = (text: string) => ({
  __html: text.replaceAll(` href="`, ` target="_blank" href="`),
});

export default innerHtml;
