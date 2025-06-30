function addExercise1() {
    editor1.setValue(`
        x = 100
        y = 100
        r = 100
        speedx = 5
        speedy = 5

        `)

    editor2.setValue(`
        //תרגיל 1: שנה צבע באופן אקראי
        //עם הפקודה  random()
        
        fill("purple")
        circle(x, y, r)

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