/* global Reveal:false, hljs:false */
(function () {
  'use strict';

  const hasMarkdown = () => document.querySelector('[data-markdown]');
  const isLocal = () => document.location.hostname === 'localhost';

  const REVEAL_VERSION = '3.6.0';
  const BASE_URL = isLocal()
    ? 'node_modules/reveal.js'
    : `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/${REVEAL_VERSION}/`;

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    defaultTiming: 90,

    markdown: {
      smartypants: true
    },

    transition: 'none', // none/fade/slide/convex/concave/zoom
    dependencies: [
      {
        src: `${BASE_URL}/plugin/markdown/marked.js`,
        condition: hasMarkdown
      }, {
        src: `${BASE_URL}/plugin/markdown/markdown.js`,
        condition: hasMarkdown
      }, {
        src: `${BASE_URL}/plugin/highlight/highlight.js`,
        async: true,
        condition: () => document.querySelector('[data-html]') ||
          document.querySelector('pre code') || hasMarkdown(),
        callback: () => {
          hljs.initHighlightingOnLoad();
        }
      }, {
        src: `${BASE_URL}/plugin/notes/notes.js`,
        async: true,
        condition: isLocal
      }, {
        src: 'js/loadhtmlslides.min.js',
        condition: () => document.querySelector('[data-html]')
      }
    ]
  });
}());
