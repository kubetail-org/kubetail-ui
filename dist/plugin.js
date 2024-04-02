import u from "@tailwindcss/forms";
import t from "tailwindcss/plugin";
import e from "tailwindcss/colors";
const y = u();
function r(o) {
  const g = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, m = o.replace(g, (h, d, n, c) => d + d + n + n + c + c), a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m);
  return a ? `${parseInt(a[1], 16)} ${parseInt(a[2], 16)} ${parseInt(a[3], 16)}` : "";
}
const s = t((o) => {
  y.handler(o);
  const { addBase: g } = o;
  g({
    ":root": {
      "--accent": r(e.amber[200]),
      "--accent-foreground": r(e.gray[800]),
      "--background": r(e.white),
      "--border": r(e.gray[200]),
      "--danger": r(e.red[500]),
      "--danger-foreground": r(e.white),
      "--foreground": r(e.gray[900]),
      "--input": r(e.gray[300]),
      "--muted": r(e.gray[100]),
      "--muted-foreground": r(e.gray[800]),
      "--primary": r("#456EDE"),
      "--primary-foreground": r(e.white),
      "--ring": r(e.blue[200]),
      "--secondary": r(e.blue[100]),
      "--secondary-foreground": r(e.gray[800]),
      "--chrome-50": r(e.gray[50]),
      "--chrome-100": r(e.gray[100]),
      "--chrome-200": r(e.gray[200]),
      "--chrome-300": r(e.gray[300]),
      "--chrome-400": r(e.gray[400]),
      "--chrome-500": r(e.gray[500]),
      "--chrome-600": r(e.gray[600]),
      "--chrome-700": r(e.gray[700]),
      "--chrome-800": r(e.gray[800]),
      "--chrome-900": r(e.gray[900]),
      "--chrome-950": r(e.gray[950]),
      "--chrome-foreground": r(e.gray[800]),
      "--chrome-foreground-muted": r(e.gray[500]),
      "--chrome-foreground-subtle": r(e.gray[300]),
      "--chrome-divider": r(e.gray[300])
    },
    ".dark": {
      "--accent": r(e.amber[200]),
      "--accent-foreground": r(e.gray[800]),
      "--background": r(e.neutral[800]),
      "--border": r(e.gray[200]),
      "--danger": r(e.red[500]),
      "--danger-foreground": r(e.white),
      "--foreground": r(e.white),
      "--input": r(e.gray[300]),
      "--muted": r(e.gray[100]),
      "--muted-foreground": r(e.gray[800]),
      "--primary": r(e.blue[500]),
      "--primary-foreground": r(e.white),
      "--ring": r(e.blue[200]),
      "--secondary": r(e.blue[100]),
      "--secondary-foreground": r(e.gray[800]),
      "--chrome-50": r(e.gray[950]),
      "--chrome-100": r(e.gray[900]),
      "--chrome-200": r(e.gray[800]),
      "--chrome-300": r(e.gray[700]),
      "--chrome-400": r(e.gray[600]),
      "--chrome-500": r(e.gray[500]),
      "--chrome-600": r(e.gray[400]),
      "--chrome-700": r(e.gray[300]),
      "--chrome-800": r(e.gray[200]),
      "--chrome-900": r(e.gray[100]),
      "--chrome-950": r(e.gray[50]),
      "--chrome-foreground": r(e.white),
      "--chrome-divider": r(e.gray[700])
    },
    "*": {
      "@apply border-border": ""
    },
    body: {
      "@apply bg-background text-foreground": "",
      "font-feature-settings": '"rlig" 1, "calt" 1',
      "@apply antialiased": ""
    }
  });
}, {
  darkMode: "selector",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px"
    },
    extend: {
      maxWidth: {
        "max-w-screen-sm": "540px",
        "max-w-screen-md": "720px",
        "max-w-screen-lg": "960px",
        "max-w-screen-xl": "1140px",
        "max-w-screen-2xl": "1320px"
      },
      colors: {
        accent: {
          DEFAULT: "rgb(var(--accent))",
          foreground: "rgb(var(--accent-foreground))"
        },
        background: {
          DEFAULT: "rgb(var(--background))"
        },
        border: {
          DEFAULT: "rgb(var(--border))"
        },
        danger: {
          DEFAULT: "rgb(var(--danger))",
          foreground: "rgb(var(--danger-foreground))"
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground))"
        },
        input: {
          DEFAULT: "rgb(var(--input))"
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))"
        },
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))"
        },
        ring: {
          DEFAULT: "rgb(var(--ring))"
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))"
        },
        chrome: {
          50: "rgb(var(--chrome-50))",
          100: "rgb(var(--chrome-100))",
          200: "rgb(var(--chrome-200))",
          300: "rgb(var(--chrome-300))",
          400: "rgb(var(--chrome-400))",
          500: "rgb(var(--chrome-500))",
          600: "rgb(var(--chrome-600))",
          700: "rgb(var(--chrome-700))",
          800: "rgb(var(--chrome-800))",
          900: "rgb(var(--chrome-900))",
          950: "rgb(var(--chrome-950))",
          foreground: "rgb(var(--chrome-foreground))",
          divider: "rgb(var(--chrome-divider))"
        }
      }
    }
  }
});
export {
  s as default
};
