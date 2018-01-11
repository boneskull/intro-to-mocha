/* global Reveal:false, hljs:false */
(function () {
  'use strict';

  const hasMarkdown = () => document.querySelector('[data-markdown]');

  const REVEAL_VERSION = '3.6.0';
  const BASE_CDN_URL = `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/${REVEAL_VERSION}/`;

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    markdown: {
      smartypants: true
    },

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
      {
        src: `${BASE_CDN_URL}/plugin/markdown/marked.js`,
        condition: hasMarkdown
      }, {
        src: `${BASE_CDN_URL}/plugin/markdown/markdown.min.js`,
        condition: hasMarkdown
      }, {
        src: `${BASE_CDN_URL}/plugin/highlight/highlight.min.js`,
        async: true,
        condition: () => document.querySelector('[data-html]') ||
          document.querySelector('pre code') || hasMarkdown(),
        callback: () => {
          hljs.initHighlightingOnLoad();
        }
      }, {
        src: `${BASE_CDN_URL}/plugin/notes/notes.min.js`,
        async: true
      }, {
        src: 'js/loadhtmlslides.min.js',
        condition: () => document.querySelector('[data-html]')
      }
    ]
  });
}());
