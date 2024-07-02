        function random_color(){
            let char='0123456789ABCDEF';
            let code='#'

            for (let i=0 ; i<6 ; i++){
                code=code+char[Math.floor(Math.random()*16)]
            }
            console.log(code)
        }
        random_color()