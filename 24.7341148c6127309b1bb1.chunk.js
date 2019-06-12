(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{302:function(e,o,s){"use strict";s.r(o),o.default='<p>Any time one file depends on another, webpack treats this as a <em>dependency</em>. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as <em>dependencies</em> for your application.</p>\n<p>When webpack processes your application, it starts from a list of modules defined on the command line or in its config file.\nStarting from these <a href="/concepts/entry-points/"><em>entry points</em></a>, webpack recursively builds a <em>dependency graph</em> that includes every module your application needs, then bundles all of those modules into a small number of <em>bundles</em> - often, just one - to be loaded by the browser.</p>\n<blockquote class="tip">\n<p>Bundling your application is especially powerful for <em>HTTP/1.1</em> clients, as it minimizes the number of times your app has to wait while the browser starts a new request. For <em>HTTP/2</em>, you can also use <a href="/guides/code-splitting/">Code Splitting</a> to achieve best results.</p>\n</blockquote>\n'}}]);