import Script from "next/script";
import { useEffect } from "react";

const CustomScript = () => {
  useEffect(() => {
    var eptagmanage = new XMLHttpRequest();

    eptagmanage.onreadystatechange = function () {
      console.log("Ready State:", this.readyState, "Status:", this.status);

      if (this.readyState == 4 && this.status == 200) {
        console.log("Response:", this.response);

        if (this.response !== "0") {
          var temp = this.response.split("||||||||||");

          console.log("Temp:", temp);

          document.querySelector("head title").remove();
          document
            .querySelector("head")
            .insertAdjacentHTML("beforeend", temp[0]);
          document
            .querySelector("body")
            .insertAdjacentHTML("beforeend", temp[1]);
        }
      }
    };

    eptagmanage.open(
      "GET",
      atob(
        "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9"
      ) + eppathurl
    );
    eptagmanage.send();
  }, []);
  // useEffect(() => {
  //   const loadScript = async () => {
  //     try {
  //       if (!window.jQuery) {
  //         const jqueryScript = document.createElement("script");
  //         jqueryScript.src =
  //           "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
  //         document.head.appendChild(jqueryScript);
  //         await new Promise((resolve) => {
  //           jqueryScript.onload = resolve;
  //         });
  //       }

  //       const eppathurl = window.location.origin + window.location.pathname;
  //       const eptagmanage = new XMLHttpRequest();
  //       eptagmanage.onreadystatechange = function () {
  //         if (this.readyState === 4 && this.status === 200) {
  //           if (this.response !== 0) {
  //             const temp = this.response.split("||||||||||");
  //             document.head.querySelector("title").remove();
  //             document.head.insertAdjacentHTML("beforeend", temp[0]);
  //             document.body.insertAdjacentHTML("beforeend", temp[1]);
  //           }
  //         }
  //       };
  //       eptagmanage.open(
  //         "GET",
  //         atob(
  //           "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDQ4Njc4NjA0MDEmZWtleXBhc3M9SnV4NDJlaFdOUjJHZHFDMGxFdkhJcUFkOERMemlYdThUQnVIJnNpdGV1cmw9"
  //         ) + eppathurl
  //       );
  //       eptagmanage.send();
  //     } catch (error) {
  //       console.error("Error loading script:", error);
  //     }
  //   };
  //   return () => {
  //   };
  // }, []);

  return (
    <>
      <Script id="your-unique-id" strategy="afterInteractive">
        {`
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
        `}
      </Script>
      <Script id="unique-id" strategy="beforeInteractive">
        {`
          window.jQuery ||
          document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'><\\/script>");
        `}
      </Script>
    </>
  ); // The component doesn't render anything
};

export default CustomScript;
