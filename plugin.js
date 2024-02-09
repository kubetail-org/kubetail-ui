// Copyright 2024 Andres Morey
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use strict";

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` : '';
}

// define plugin
module.exports = plugin(
  function (apiArgs) {
    // initialize forms plugin
    const formsPlugin = require('@tailwindcss/forms')();
    formsPlugin.handler(apiArgs);

    // add custom styles
    const { addBase } = apiArgs;

    addBase({
      ':root': {
        '--accent': hexToRgb(colors.amber[200]),
        '--accent-foreground': hexToRgb(colors.gray[800]),
        '--background': hexToRgb(colors.white),
        '--border': hexToRgb(colors.gray[200]),
        '--danger': hexToRgb(colors.red[500]),
        '--danger-foreground': hexToRgb(colors.white),
        '--foreground': hexToRgb(colors.gray[900]),
        '--input': hexToRgb(colors.gray[300]),
        '--muted': hexToRgb(colors.gray[100]),
        '--muted-foreground': hexToRgb(colors.gray[800]),
        '--primary': hexToRgb('#456EDE'),
        '--primary-foreground': hexToRgb(colors.white),
        '--ring': hexToRgb(colors.blue[200]),
        '--secondary': hexToRgb(colors.blue[100]),
        '--secondary-foreground': hexToRgb(colors.gray[800]),
      },
      '.dark': {
        '--accent': hexToRgb(colors.amber[200]),
        '--accent-foreground': hexToRgb(colors.gray[800]),
        '--background': hexToRgb(colors.neutral[800]),
        '--border': hexToRgb(colors.gray[200]),
        '--danger': hexToRgb(colors.red[500]),
        '--danger-foreground': hexToRgb(colors.white),
        '--foreground': hexToRgb(colors.white),
        '--input': hexToRgb(colors.gray[300]),
        '--muted': hexToRgb(colors.gray[100]),
        '--muted-foreground': hexToRgb(colors.gray[800]),
        '--primary': hexToRgb(colors.blue[500]),
        '--primary-foreground': hexToRgb(colors.white),
        '--ring': hexToRgb(colors.blue[200]),
        '--secondary': hexToRgb(colors.blue[100]),
        '--secondary-foreground': hexToRgb(colors.gray[800]),
      },
      '*': {
        '@apply border-border': ''
      },
      'body': {
        '@apply bg-background text-foreground': '',
        'font-feature-settings': '"rlig" 1, "calt" 1',
        '@apply antialiased': '',
      },
    });
  },
  {
    darkMode: ['class'],
    theme: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px'
      },
      extend: {
        maxWidth: {
          'max-w-screen-sm': '540px',
          'max-w-screen-md': '720px',
          'max-w-screen-lg': '960px',
          'max-w-screen-xl': '1140px',
          'max-w-screen-2xl': '1320px'
        },
        colors: {
          accent: {
            DEFAULT: "rgb(var(--accent))",
            foreground: "rgb(var(--accent-foreground))",
          },
          background: {
            DEFAULT: "rgb(var(--background))",
          },
          border: {
            DEFAULT: "rgb(var(--border))"
          },
          danger: {
            DEFAULT: "rgb(var(--danger))",
            foreground: "rgb(var(--danger-foreground))",
          },
          foreground: {
            DEFAULT: "rgb(var(--foreground))",
          },
          input: {
            DEFAULT: "rgb(var(--input))",
          },
          muted: {
            DEFAULT: "rgb(var(--muted))",
            foreground: "rgb(var(--muted-foreground))",
          },
          primary: {
            DEFAULT: "rgb(var(--primary))",
            foreground: "rgb(var(--primary-foreground))",
          },
          ring: {
            DEFAULT: "rgb(var(--ring))"
          },
          secondary: {
            DEFAULT: "rgb(var(--secondary))",
            foreground: "rgb(var(--secondary-foreground))",
          },
        }
      }
    },
  }
);
