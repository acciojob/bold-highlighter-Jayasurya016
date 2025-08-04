 const allBold = document.querySelectorAll("strong")
        function highlight()
        {
             allBold.forEach((element) => {
                element.style.color = "rgb(0, 128, 0)"

             });
        }

        function return_normal()
        {
              allBold.forEach((element) => {
                element.style.color = "rgb(0, 0, 0)"
                
             });
        }