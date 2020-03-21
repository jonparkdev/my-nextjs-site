import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
            {`
                * {
                box-sizing: inherit;
                font-family: 'latohairline', serif;
                font-weight:bold;
                }
                html {
                box-sizing: border-box;
                overflow-y: scroll;
                }
                a {
                text-decoration: none;
                color: inherit;
                transition: opacity 0.2s ease;
                }
                a:hover {
                transition: opacity 0.2s ease;
                opacity: 0.5;
                text-decoration-color: inherit;
                }
                ul {
                list-style: none;
                margin: 0;
                padding-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                list-style-position: outside;
                list-style-image: none;
                }
                ol {
                margin: 0;
                padding-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                list-style-position: outside;
                list-style-image: none;
                }
                ul, ol {
                margin-bottom: 1.45rem;
                }
                img {
                max-width: 100%;
                }
                img, figure, table, fieldset  {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                padding-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                margin-bottom: 1.45rem;
                }
                pre {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 1.45rem;
                font-size: 0.85rem;
                line-height: 1.42;
                background: hsla(0, 0%, 0%, 0.04);
                border-radius: 3px;
                overflow: auto;
                word-wrap: normal;
                padding: 1.45rem;
                }
                table {
                font-size: 1rem;
                line-height: 1.45rem;
                border-collapse: collapse;
                width: 100%;
                }
                blockquote {
                margin-left: 1.45rem;
                margin-right: 1.45rem;
                margin-top: 0;
                padding-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                margin-bottom: 1.45rem;
                }
                strong {
                font-weight: bold;
                }
                li {
                margin-bottom: calc(1.45rem / 2);
                }
                ol li {
                padding-left: 0;
                }
                ul li {
                padding-left: 0;
                }
                li > ol {
                margin-left: 1.45rem;
                margin-bottom: calc(1.45rem / 2);
                margin-top: calc(1.45rem / 2);
                }
                li > ul {
                margin-left: 1.45rem;
                margin-bottom: calc(1.45rem / 2);
                margin-top: calc(1.45rem / 2);
                }
                blockquote *:last-child {
                margin-bottom: 0;
                }
                li *:last-child {
                margin-bottom: 0;
                }
                p *:last-child {
                margin-bottom: 0;
                }
                li > p {
                margin-bottom: calc(1.45rem / 2);
                }
                code {
                font-size: 0.85rem;
                line-height: 1.45rem;
                }

                {/* //TYPOGRAPHY------------------------------------- */}

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                font-family: 'latohairline', serif;
                font-weight: bold;
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                padding-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                margin-bottom: 1.45rem;
                color: inherit;
                text-rendering: optimizeLegibility;
                }

                h1,
                h2 {
                font-weight: bold;
                }

                h1 {
                font-size: 40px;
                letter-spacing: -1px;
                line-height: 1.1875;
                }

                h2 {
                font-size: 32px;
                letter-spacing: -0.75px;
                line-height: 1.2;
                }

                h3 {
                font-size: 24px;
                letter-spacing: -0.5px;
                line-height: 1.1875;
                }

                p {
                font-family: 'latoregular', serif;
                font-weight: lighter;
                font-size: 20px;
                letter-spacing: -0.1px;
                line-height: 1.58;
                color: #464646f2;
                }

                {/* //BLOG MARKDOWN STYLES---------------------- */}

                .blog-post .body h1,
                .blog-post .body h2,
                .blog-post .body h4,
                .blog-post .body h3,
                .blog-post .body h5,
                .blog-post .body h6,
                .blog-post .body p,
                .blog-post .body blockquote,
                .blog-post .body ul,
                .blog-post .body ol,
                .katex-display {
                  margin-top: 2em;
                  margin-bottom: -.5em;
                }

                .blog-post .body p:first-child {
                  margin-top: 1em;
                }

                @media (min-width: 768px){
                  p {
                    font-size: 20px;
                  }

                }

                @media (min-width: 1280px) {
                    h1 {
                        font-size: 48px;
                        letter-spacing: -1px;
                        line-height: 1.1875;
                    }

                    h2 {
                        font-size: 40px;
                        letter-spacing: -0.75px;
                        line-height: 1.1667;
                    }

                    h3 {
                        font-size: 32px;
                        letter-spacing: -0.5px;
                        line-height: 1.1875;
                    }

                    p {
                        line-height: 1.8;
                    }
                }

            `}
        </style>
      </Html>
    )
  }
}

export default MyDocument
