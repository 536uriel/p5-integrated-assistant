function addExercise1() {
    editor1.setValue(`
        r = 0
        g = 0
        b = 0

        x = 100
        y = 100
        radius = 100
        speedx = 5
        speedy = 5

        `)

    editor2.setValue(`

        //הכנס כאן את משתני הצבעים לפקודה 
        //ושנה את הצבעים של הכדור עם שינוי המספרים
        fill("purple")
        circle(x, y, radius)

        x += speedx
        y += speedy

        if(x > width || x < 0){
            speedx = -speedx
        }

        if(y > height || y < 0){
            speedy = -speedy
        }

        `)
}